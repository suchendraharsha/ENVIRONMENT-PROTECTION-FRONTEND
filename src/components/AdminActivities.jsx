import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useAuth } from '../context/Auth';
import Layout from '../layout/Layout';
import AOS from "aos";
import "aos/dist/aos.css";

const AdminActivities = () => {

    const [name,setName] = useState("");
    const [venue,setVenue] = useState("");
    const [day,setDay] = useState("");
    const [contact,setContact] = useState("");
    const [addActivity,setAddActivity] = useState(false);

    const [fullActivities,setFullActivities] = useState(); 
    const [activities, setActivities] = useState([]);
    const [fullComments,setFullComments] = useState([]);
    const [auth] = useAuth();

    console.log(addActivity);

    const activitiesImages = [
      'https://files.prokerala.com/news/photos/imgs/1024/school-students-participate-in-save-water-871079.jpg',      
      'https://tse3.mm.bing.net/th?id=OIP.y8yimRwTkD1eHkrijj6TVwHaFL&pid=Api&P=0&h=180',
      'https://tse2.mm.bing.net/th?id=OIP.8Z0gzypr5yIhLRKOSBfGXAHaDt&pid=Api&P=0&h=180',
      'https://tse3.mm.bing.net/th?id=OIP.zRVg1PXYUhAP2I63L-7pKgHaFj&pid=Api&P=0&h=180',
      'https://tse1.mm.bing.net/th?id=OIP.FMvCYnQ4tu1-PAVEsidWXwHaEo&pid=Api&P=0&h=180',
    // Add more activities here
  ];

    const allComments=async()=>{
        const res = await axios.get(`http://localhost:3500/api/v1/comment/all-comment`);
        setFullComments(res?.data);
      }

      const getAllActivities =async()=>{
        try{
            const res = await axios.get("http://localhost:3500/api/v1/activity/activity");
            setActivities(res?.data?.activity);
            console.log(auth);            
        }catch(error){
            console.log(error);
        }       
    }

    const createActivity = async()=>{
      setAddActivity(!addActivity);
        const res = await axios.post("http://localhost:3500/api/v1/activity/create-activity",{
            name,
            venue,
            day,
            contact
        })
        getAllActivities();
    }

    useEffect(()=>{
        getAllActivities();
        allComments();
    },[])

    useEffect(()=>{
        AOS.init({duration:2000,offset:300});
      },[])

      const marginButton ={
        marginBottom:'20px',
      }
  return (
    <Layout>
      <div className="scrolling-text-container" data-aos="fade">
        <div className="scrolling-text">
          <p>Save the water-Protect the environment : A Awarness Drive</p>
        </div>
      </div>
      {/* <marquee>This is a scrolling text</marquee> */}
      <div className="activities-page">
      <div className="activities-header-image" data-aos="flip-left">
        <img src="https://i.ytimg.com/vi/xtemRKL-l_w/maxresdefault.jpg" />
        <div className="activities-header-text">
          <h1>PROTECT THE WATERS</h1>
          <p>
          only few places are left
          </p>
        </div>
        {/* <img className="activities-hurry-up-image" src="https://tse4.mm.bing.net/th?id=OIP.T9qwOpqOiqgsY64-5TdVHAHaFd&pid=Api&P=0&h=180" alt="Hurry Up" /> */}
      </div>

      <div className="activities-container">
        <button onClick={()=>{
          setAddActivity(!addActivity)
          }} className='activity-button' style={marginButton}>
            Create New Activity
            </button>
        <div className={`admin-create-activity ${addActivity ? 'create-act' : ''}`}>
          <div className='admin-create-activity2'>
            <div className='admin-create-activity3'>
            <input
            type="text"
            placeholder="enter activity name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Add your venue"
            value={venue}
            onChange={(e)=>setVenue(e.target.value)}
            />
            <input
            type="text"
            placeholder="day of occurence"
            value={day}
            onChange={(e)=>setDay(e.target.value)}
            />
            <input
            type="text"
            placeholder="contact no of maintainer"
            value={contact}
            onChange={(e)=>setContact(e.target.value)}
            />
            <button onClick={()=>{
            createActivity()}
            }>Add activity</button>
        </div>
        </div>
        </div>
        {activities.map((activity,i) => (
          <div className="activities-card" data-aos="fade-down" key={activity.id}>
            <div className="activities-card-image">
              <img src={activitiesImages[i]} alt={activity.name} />
            </div>
            <div className="activities-card-details">
              <h3>{activity.name}</h3>
              <p className='activity-day'>
                <strong>Day:</strong> {activity.day}
              </p>
              <p className='activity-place'>
                <strong>Place:</strong> {activity.place}
              </p>
              <p className='activity-status'>
                <strong>Status:</strong> {activity.status}
              </p>
              {/* <button onClick={()=>handleInvolvement(activity._id,activity.name,auth.user.id,auth.user.name)} className='activity-button'>Get-Involved</button> */}
              <p className='activity-members'>
                 58 members registered
              </p>
              <div className="home-card-comments">
                {/* <div className="home-card-comment-input">
                  <input
                    type="text"
                    placeholder="Add a comment"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                  <button onClick={()=>{
                    writeComment(activity._id)}
                    }>Add Comment</button>
                </div> */}
                <div className="home-card-comment-list" key={activity._id}>
                  { fullComments.filter((c)=> c.activity===activity._id) 
                  .map((comment, index) => (<div className='commentdes'>
                    <p className='des1' key={index}>{comment.users.name} :</p>
                    {/* <br className='break'></br> */}
                    <p className='des2' key={index}>{comment.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

export default AdminActivities