import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "./NewTodo.module.css";


const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;


  const handleChange=(e)=>{
    const name=e.target.name
    setTodo((oldTodo)=>{
      return {...oldTodo,[name]:e.target.value}
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    props.onAddTodo(todo)
    setTodo({ title: "", desc: "" });
  }

  const handleClick=()=>{
    toast.success("Todo is added",{
      position:'top-left'
    })
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title : </label>
            <input type='text' id='title' name='title' value={title} onChange={handleChange}/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc'>Description : </label>
            <textarea type='text' id='desc' name='desc' value={desc} onChange={handleChange}/>
        </div>
        <button onClick={handleClick} type='submit'>Add Todo</button>
        <ToastContainer/>
    </form>
  )
}

export default NewTodo