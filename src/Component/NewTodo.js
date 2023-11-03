import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo,setTodo]=useState({title:"",desc:""})
    const {title,desc}=todo
    
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
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <p>Title : </p>
            <input type='text' id='title' name='title' value={title} onChange={handleChange}/>
        </div>
        <div>
            <p>Description : </p>
            <textarea  name="desc"
              id="desc"
              value={todo.desc}
              onChange={handleChange}>

            </textarea>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo