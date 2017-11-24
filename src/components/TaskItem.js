import React from 'react';

const TaskItem = ({ selectedDay, t, i, deleteTask }) => {
  
      return (
        <li key={'task_' + i} className='task'>{t}
          <span className='delete' onClick={() => deleteTask(selectedDay, i)}>X</span>
        </li>
      );
  }

  export default TaskItem