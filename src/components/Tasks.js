import React, { Component } from 'react';

class Tasks extends Component {
  constructor(props) {
    super(props);
      this.delete = this.delete.bind(this);
      this.state = {
        // selectedDay: null,
        // currYear: d.getFullYear();
        // currMonth:
      }
    }

  componentWillMount() {
    // calendarCore();
  }

  componentDidMount() {
    // this.props.PageActions.preload_List();
  }

  delete(i) {
    console.warn(i);
  }

  render() {
    const {
      selectedDay,
      tasks,
    } = this.props;
    const day = selectedDay && selectedDay.toLocaleDateString('ru').split('.').reverse().join('.');

    const tasksToRender = tasks && tasks[day] && tasks[day].map((t,i) => {
      return (
        <li key={'task_' + i} className='task'>{t}
          <span className='delete' onClick={() => this.delete(i)}>X</span>
        </li>
    )});

    return (
      <div className='tasks'>
        <div className='header'>{`Задачи на ${day}`}</div>
        {tasksToRender &&
          <ul className='taskListWrapper'>
             {tasksToRender}
          </ul>}
        <div className='form'>
          <label htmlFor='input'>Создать задачу: </label>
          <input id='input' type='text'/>
        </div>
      </div>
    )
  }
}

export default Tasks;