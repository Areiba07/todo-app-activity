import React, { useState } from 'react';
import './App.css';



function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { task: task, completed: false }]);
      setTask('');
    }
  };
  
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <p>New Item:
        <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        />
      </p>
      
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
    
          <li key={index}>
            <input
            type="checkbox"
            classname="position-left"
            checked={task.completed}
            onChange={() => toggleTask(index)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.task}</span>
            <button onClick={() => removeTask(index)}>X</button>
          </li>
       ))}
      </ul>


    </div>
  );
}

export default App;
