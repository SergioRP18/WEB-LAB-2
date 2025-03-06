import { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Task from './components/Task/Task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  //   setTasks(savedTasks);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      state: 'Pendiente',
    };
    setTasks([...tasks, newTask]);

  };

  const updateTaskState = (id, newState) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, state: newState } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>TO-DO Manager</h1>
      <Form addTask={addTask} />
      <div className="columns-container">
        <Task
          title="Pendiente"
          tasks={tasks.filter((task) => task.state === 'Pendiente')}
          updateTaskState={updateTaskState}
          deleteTask={deleteTask}
        />
        <Task
          title="En Progreso"
          tasks={tasks.filter((task) => task.state === 'En Progreso')}
          updateTaskState={updateTaskState}
          deleteTask={deleteTask}
        />
        <Task
          title="Completadas"
          tasks={tasks.filter((task) => task.state === 'Completadas')}
          updateTaskState={updateTaskState}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;