import React from 'react';
import { Outlet } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className='fullcontainer'>
        <Header />
        <Navbar />
        <main style={{minHeight:"70vh"}}>{children}</main>
        <Toaster />
    </div>
  )
}

export default Layout