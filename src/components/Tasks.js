import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Tasks extends Component {
  constructor(props) {
    super(props);
      this.saveTask = this.saveTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
    }

  saveTask(e, day) {
    const { saveTask } = this.props;
    const { value } = e.target;
    if (e.keyCode === 13 && value.trim().length > 0) {
      saveTask(day, value);
      this.refs.textInput.value = '';
      this.forceUpdate();
    }
  }

  deleteTask(day, i) {
    const { deleteTask } = this.props;
    deleteTask(day, i);
    this.forceUpdate();
  }

  render() {
    const {
      selectedDay,
      tasks,
      deleteTask,
      saveTask,
    } = this.props;

    return (
      <div className='tasks'>
        <div className='header'>{`Задачи на ${selectedDay}`}</div>
        {tasks && tasks[selectedDay] && 
          <ul className='taskListWrapper'>
          {tasks[selectedDay].map((t,i) => {
              return (
                <TaskItem 
                  key={i} t={t} i={i} selectedDay={selectedDay} deleteTask={deleteTask}
                />
              )}
            )
          }
          </ul>  
        }
        <div className='form'>
          <label htmlFor='input'>Создать задачу: </label>
          <input 
            id='input' 
            type='text'
            onKeyDown={e => this.saveTask(e, selectedDay)}
            ref='textInput'
          />
        </div>
      </div>
    )
  }
}

export default Tasks;