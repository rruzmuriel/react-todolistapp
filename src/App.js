import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { ToDo } from './components/ToDo';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

import data from './data.json';


function App() {

const [toDoList, setToDoList] = useState(data);

const handleToggle = (id)=> {
  let newTasksList = toDoList.map( taskToDo => {
    if (taskToDo.id === id) {
      taskToDo.complete = !taskToDo.complete
    }
    return taskToDo
  })
   setToDoList(newTasksList);
} //end handleToggle

  const handleDelete = () => {
    
    let newTasksList = toDoList.filter(taskToDo => { 
      return !taskToDo.complete
    })
    
    setToDoList(newTasksList);
    
  } //end handleDelete


  return (
    <div className="App">
      <Header />
      <ToDoList tasksList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
