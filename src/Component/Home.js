import React, { useState } from 'react'
import style from "./Home.module.css"
import NewTodo from './NewTodo'
import Todos from './Todos'


const Home = () => {
  const [todos,setTodos]=useState([])
  const handleAddTodo=(todo)=>{
    setTodos((prevTodos)=>{
      return [...prevTodos,{todo}]
    })
  }
  
  return(
    <div >
       (
    <div  className={style.container}>
       <div>
       <h1>Collect Data from a Form</h1>
      <div className={style.child}>
      <NewTodo onAddTodo={handleAddTodo}/>
     
    </div>
       </div>
    </div>
    <div className={style.down}>
    <Todos todos={todos}/>
    </div>
    </div>
  )
}

export default Home