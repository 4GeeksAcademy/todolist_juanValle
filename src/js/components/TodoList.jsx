//funcionará como mi componente contenedor, padre.
import React, { useState, useRef } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const taskIdCounter = useRef(0);

  const addTask = (newTaskText) => {
    setTasks([...tasks, { id: taskIdCounter.current++, text: newTaskText }]);
  };

  const deleteTask = (taskIdToDelete) => {
    setTasks(tasks.filter(task => task.id !== taskIdToDelete));
  };

  return (
    <div>
      <TodoInput onAddTask={addTask} />
      {tasks.length === 0 ? (
        <p>No hay tareas, añadir tareas</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TodoItem key={task.id} task={task} onDelete={deleteTask} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;