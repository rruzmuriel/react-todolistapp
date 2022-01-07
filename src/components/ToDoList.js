import React from 'react';
import { ToDo } from './ToDo';

export const ToDoList = ({tasksList, handleToggle, handleDelete}) => {
       
    return (
        <div>
            {tasksList.map(taskItem =>{
                return(
                <ToDo taskToDo={taskItem}
                      handleToggle={handleToggle}
                />
                )
            })}
            <button onClick={handleDelete} className="btn-primary mt-3" >
                Borrar tareas
            </button>
        </div>
    )
}
