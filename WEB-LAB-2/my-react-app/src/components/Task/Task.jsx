const Task = ({ title, tasks, updateTaskState, deleteTask }) => {
    return (
      <div className="column">
        <h2>{title}</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.name}</span>
                <div>
                  {title !== 'Completadas' && (
                    <button
                      onClick={() =>
                        updateTaskState(
                          task.id,
                          title === 'Pendiente' ? 'En Progreso' : 'Completadas'
                        )
                      }
                    >
                      {title === 'Pendiente' ? 'Iniciar' : 'Completar'}
                    </button>
                  )}
                  <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay tareas en esta columna.</p>
        )}
      </div>
    );
  };
  
  export default Task;