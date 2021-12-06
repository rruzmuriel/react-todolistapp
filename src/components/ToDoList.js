import React from 'react';
import { ToDo } from './ToDo';

export const ToDoList = ({toDoList}) => {

    
    return (
        <div>
            {toDoList.map(todo =>{
                return(
                <ToDo todo={todo} />
                )
            })}
        </div>
    )
}
