import React from 'react'
import Todo from './Todo'
import style from "./Todos.module.css"

const Todos = (props) => {
  return (
    <section  className={style.todo}>
        {
            props.todos.map((todo)=>{
               return <Todo  todo={todo.todo}/>
            })
        }
    </section>
  )
}

export default Todos