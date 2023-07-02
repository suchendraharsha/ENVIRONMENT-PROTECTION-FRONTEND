import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import toast from 'react-hot-toast';

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ()=>{

  const [auth,setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(()=>{
      AOS.init({duration:2000,offset:300});
    },[])
    return <>
              <nav className="mobile-navbar">
              <div className="mobile-navbar-logo">
              {auth?.user ? <div class="logo">protect the waters<br></br> <p> welcome {auth?.user?.name}</p></div> : <div class="logo">protect our waters<br></br> <p> welcome </p></div>}
              </div>
              <div className={`mobile-navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {/* Mobile menu items */}
                <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                {auth?.user ? <>
              <li><NavLink to="/resources">Resources</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              </>            
              : <>
              <li><NavLink to="/login">Login</NavLink></li>
              </>}
              {auth?.user?.role===1 ? <>
                {/* <li><NavLink to="/user/resources">Resources</NavLink></li> */}
              <li><NavLink to="/activity">All registered</NavLink></li>
              <li><NavLink to="/admin-activities">Activities</NavLink></li>
              {/* <li><NavLink to="/user/about">About Us</NavLink></li> */}
              </>
              : <>{ auth?.user && <>
              <li><NavLink to="/testimonials">Activities</NavLink></li>
              <li><NavLink to="/involved">Get-Involved</NavLink></li>   
              </>
              }
              </> 
              }
              {auth?.user && <li><NavLink to="/login" onClick={handleLogout}>Logout</NavLink></li>}
                </ul>
              </div>
              <div className="mobile-navbar-icon" onClick={toggleMobileMenu}>
                <div className={`mobile-hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
              </div>
            </nav>
            </>
  }

  export default Navbar;