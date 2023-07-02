import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../styles/AuthStyles.css";
import Layout from '../layout/Layout';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Register = () => {

  const form = useRef();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:3500/api/v1/auth/register", {
                name,
                email,
                password,
                phone,
                address,
                answer
              });
            if(res.data.success){
                toast.success(res.data.message);
                navigate("/login");
            }
            else{
                toast.error(res.data.message);
            }
            emailjs.sendForm('service_pgj8xtx', 'template_3rw202q', form.current, 'MUKPIvmtkFi1zw3AG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        } catch(err){
            console.log(err);
            toast.error("something went wrong");
        }

    }

  return (
    <div>
        <div className="form-container ">
        <form ref={form} onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What Is Your Favourite Sports"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register