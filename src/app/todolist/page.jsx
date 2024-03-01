'use client';
import React, { useState } from 'react'

const Todolist = () => {
    const [taskList, setTaskList] = useState([
        { text: 'Do Homework', completed: false },
        { text: 'Learn React', completed: false },
        { text: 'Bring milk', completed: false }

    ]);



    const addNewTask = (e) => {
        console.log(taskList);
    }
    return (
        <div className='container py-5'>

            <h1 className='display-3 fw-bold text-center'>ToDo List</h1>

            <div className='card shadow'>
                <div className='card-header py-3'>
                    <input
                        onKeyDown={addNewTask}
                        type='text'
                        className='form-control border-3 border-primary'
                        placeholder='Enter New Task to Add'
                    />
                </div>
            </div>
            <div className='card-body'>
                {
                    taskList.map((task, index) => {
                        return <div key={index} className='p-3 shadow mb-3 d-flex justify-content-between'>
                            <p className='my-auto h4'>{task.text}</p>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Todolist