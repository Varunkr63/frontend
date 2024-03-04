'use client';
import React, { useState } from 'react'

const Todolist = () => {
    const [taskList, setTaskList] = useState([]);



    const addNewTask = (e) => {

      if (e.code === 'Enter'){

      console.log(e.target.value);

       const obj ={text: e.target.value, completed: false};

       setTaskList([obj, ...taskList]);

       e.target.value ='';



    }
}
   const deleteTask =(index) => {
    console.log(index);

    const temp =taskList;
    temp.splice(index, 1);
    setTaskList([...temp] );
 }


 const completeTask= (index)=> {

    const temp= taskList;
    temp[index].completed=!temp[index].completed ;
    setTaskList([...temp]);
    console.log(temp);
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
                        return <div key={index} className='p-3 shadow mb-3 d-flex justify-content-between align-items-center'>
                           
                           <input type="checkbox" checked={task.completed} />
                           
                            <p className='my-auto h4'>{task.text}</p>
                            { task.completed ? 
                            <span className='badge bg-success'> Completed</span>
                            :
                            <span className='badge bg-warning'>pending</span>
                            }


                            <button onClick={ () => {deleteTask(index) } } className='btn btn-danger'>Delete</button>
                            <button onClick={() => {completeTask(index)}} className='btn btn-primary'>
                                { task.completed ? 'Undo Task' : 'Completed Task'}
                            </button>
                            
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Todolist