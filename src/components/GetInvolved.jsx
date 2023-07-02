import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate,useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../styles/AuthStyles.css"
import Layout from '../layout/Layout';
import { useAuth } from '../context/Auth';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const GetInvolved = () => {

    const form = useRef();
    const [auth]=useAuth();
  const [name,setName] = useState("");
    const [useraId,setUseraId]= useState();
    const [email,setEmail]=useState();
    const [err,setErr]=useState(0);
    const [contact,setContact]=useState();
    const [activity,setActivity]=useState();
    const [otherPage,setOtherPage] = useState();
    /* const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState(""); */
    const navigate = useNavigate();
    const location = useLocation();
    const {userId,uname,aname,aid} = location.state;
    console.log(userId,aid,aname,uname);
    useEffect(()=>{
      setUseraId(userId);
      setActivity(aid);
      setName(uname);
      setOtherPage(true);
    },[userId,aid])
    
    const handleSubmit = async(e) =>{
      setUseraId(userId);
      setActivity(aid);
      e.preventDefault();
      /* console.log(auth.user);
      console.log("submitted");
      console.log(userId);
      console.log(activity,email,phone); */
      const productData = new FormData();
          productData.append("userId", userId);
          productData.append("activity", activity);
          productData.append("email", email);
          productData.append("contact", contact);
      try{
          const res = await axios.post("http://localhost:3500/api/v1/activity/activity-register",productData);
          
          if(res.data.success){
            setErr(0);
              console.log(res.data.message);
          }
          else{
              console.log(res.data.message);
          }
          emailjs.sendForm('service_pgj8xtx', 'template_jeg4omh', form.current, 'MUKPIvmtkFi1zw3AG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          navigate("/testimonials");
      } catch(err){
        if(err.response.status===404){
         /*  console.log(res.data.message); */
          setErr(1);
          return
        }
          console.log(err.response.status);
          console.log("something went wrong");
      }


  }
  return (
    <Layout>
        <div className="form-container ">
        <form ref={form} onSubmit={handleSubmit}>
          <h4 className="title">ACTIVITY REGISTER FORM</h4>
          <p className={err?'alreg':''}>{auth?.user?.name} is already registered</p>
          <div className="mb-3">
              <input
                name="name"
                type="text"
                /* value={useraId}
                onChange={(e) => setUseraId(e.target.value)} */
                className="form-control"
                id="exampleInputEmail1"
                placeholder={uname}
                required
                autoFocus
                disabled
              /> 
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              /* value={activity}
              onChange={(e) => setActivity(e.target.value)} */
              className="form-control"
              id="exampleInputPassword1"
              name="aname"
              placeholder={aname}
              required
              disabled
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="contact"
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

export default GetInvolved