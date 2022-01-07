import React from 'react';

export const ToDo = ({taskToDo, handleToggle}) => {
    return (
        <div onClick={() => handleToggle(taskToDo.id)} className={taskToDo.complete ? 'strike' : ''} >
            {taskToDo.task}            
        </div>
    )
}
