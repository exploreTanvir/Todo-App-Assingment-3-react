import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./Todo.module.css";

const Todo = (props) => {
    const {title,desc}=props.todo
    const {id}=props
    const handleClick=(id)=>{
      props.onRemoveTodos(id)
      toast.warning("Todo is deleted")
    }
  return (
    <div>
      <div className={style.todo}>
        <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        </div>
        <button className={style.btn} onClick={()=>
          {handleClick(id)
        }}><i className='fa fa-trash fa-2x'></i>
        </button>
        

    </div>
    <ToastContainer/>
    </div>
  )
}

export default Todo