'use client';
import React, { useEffect } from 'react'
import Navbar from '../../navbar';
import toast from 'react-hot-toast';
const Template = ({children}) => {
useEffect(() =>{
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}, []);


  return (
    <div>
      <toaster postiton ='top-center'/>
      
      <Navbar/> 
    {children}</div>

  )
}

export default Template;