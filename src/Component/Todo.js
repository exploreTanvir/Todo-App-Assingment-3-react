import React from 'react';
import style from "./Todo.module.css";

const Todo = (props) => {
    const {title,desc}=props.todo
  return (
    <div   className={style.titleForm}>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default Todo