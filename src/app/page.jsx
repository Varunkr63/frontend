import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
    <Link href="/login">Login</Link>
    <Link href="/about">about us</Link>
    <Link href="/contact">contact us</Link>
      
      <h1 style={{ color:'red', fontSize:'5rem'}}>my home page</h1>
      <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Creta-180120241405.jpg&w=872&h=578&q=75&c=1" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto possimus quod quasi cupiditate asperiores sit ad veritatis praesentium perferendis?</p>
    </div>
  )
}

export default Home