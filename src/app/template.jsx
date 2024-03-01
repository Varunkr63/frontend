'use client';
import React, { useEffect } from 'react'
import Navbar from '../../navbar';

const Template = ({children}) => {
useEffect(() =>{
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}, []);


  return (
    <div><Navbar/> 
    {children}</div>

  )
}

export default Template;