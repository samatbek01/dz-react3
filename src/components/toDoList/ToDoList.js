import React from 'react';
import ToDo from '../toDo/ToDo';
import classes from './ToDoList.module.css';


const ToDoList = ({tasks, handleDelete}) => {
    console.log(tasks);
    return (
        <ul className={classes.list}>
            {tasks.map(todo=> <ToDo key={todo.id} task={todo} handleDelete={handleDelete}/> )}
        </ul>
    );
};

export default ToDoList;