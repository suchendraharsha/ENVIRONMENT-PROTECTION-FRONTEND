import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate,useLocation, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../styles/AuthStyles.css"
import Layout from '../layout/Layout';
import { useAuth } from '../context/Auth';

const GetInvolvedNew = () => {

    const [userId,setUserId]= useState();
    const [name,setName]= useState();
    const [email,setEmail]=useState();
    const [contact,setContact]=useState();
    const [activity,setActivity]=useState();
    const [activities,setActivities] = useState();

    const [auth] = useAuth();
    console.log(auth.user.id);
    const location = useLocation();

    const handleChange = (event) => {
      setActivity(event.target.value);
    };

    const getAllActivities =async()=>{
      try{
          const res = await axios.get("https://envinormentprotectionbackend.onrender.com/api/v1/activity/activity");
          setActivities(res?.data?.activity);
          console.log(activities);            
      }catch(error){
          console.log(error);
      }       
  }

    const handleSubmit = async(e) =>{
      e.preventDefault();
      setUserId(auth?.user?.id);
      console.log(userId);
      const productData = new FormData();
          productData.append("userId", userId);
          productData.append("activity", activity);
          productData.append("email", email);
          productData.append("contact", contact);
      try{
          const res = await axios.post("https://envinormentprotectionbackend.onrender.com/api/v1/activity/activity-register",productData);
          if(res.data.success){
              console.log(res.data.message);
          }
          else{
              console.log(res.data.message);
          }
      } catch(err){
          console.log(err);
          console.log("something went wrong");
      }
  }

  useEffect(()=>{
    getAllActivities();
  },[])
  return (
    <Layout>
        <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">ACTIVITY REGISTER FORM</h4>
          <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder={auth?.user?.name}
                disabled
              /> 
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <select value={activity} onChange={handleChange}>
              <option value="" disabled>Select activity</option>              
              {activities && activities.map((a)=>(
                <option value={a._id}>{a.name}</option>
              ))}             
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default GetInvolvedNew