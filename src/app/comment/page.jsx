'use client';
import React from 'react'

import { useState } from 'react';

const Comment = () => {

  const[comment,setComment] = useState("");

  const[comments ,setComments] = useState([])

  const onClickHandler =() => {
    setComments(( comments) => [...comments, comment])
  }

  const onChangeHandler =(e) => {

    setComment(e.target.value);
  }
  const taskDelete =() => {
    console.log();


  }

  
  return (
    <div className='main-container py-5'>
      {comments.map((text) =>(
      <div className='comment-container'>{text}</div>
      


      ))}
      <div>
      <button onClick={taskDelete} className='btn btn-primary mx-2 '>Delete</button>
      <button className='btn btn-danger mx-2'>Like</button>
      </div>


      <div className='comment-flexbox'>
        <h3 className='comment-text'>Comment</h3>
        <textarea value={comment} 
        onChange={onChangeHandler} 
        className='input-box'/>
        <button onClick={onClickHandler} className='btn btn-danger'>Submit</button>
    </div>
    </div>

  )
}

export default Comment;