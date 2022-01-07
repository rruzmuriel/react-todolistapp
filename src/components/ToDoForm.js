

import React, { useState } from 'react';

export const ToDoForm = () => {

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const [userInput, setUserInput] = useState('');
    return (
        <div>
            <input value={userInput}
                    type="text"
                    onChange={handleChange}
                    placeholder="Introduce la tarea."
            >
            </input>
            
        </div>
    )
}
