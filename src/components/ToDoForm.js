

import React, { useState } from 'react';

export const ToDoForm = ({addNewTask}) => {

    const [task, setTask] = useState('');

    const handleChange = (event) => {
        let newTask = event.target.value;
        setTask(newTask)        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewTask(task)
        setTask('')
    }
    
    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <input
                value={task}                
                type="text"
                placeholder="Introduce la tarea."
                onChange={handleChange}
            >
            </input>
            <input
                className="ms-1"
                type="submit"
            >
            </input>
        </form>
    )
}
