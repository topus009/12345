import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tasksActions from '../actions/TasksActions';

class Calendar extends Component {
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
    const date = '22.11.2017';
    const tasks = [
      'Поесть',
      'Прибраться в комнате',
      'Поспать',
      'Попрограммировать',
      'Поехать на собеседование',
      'Почитать learn.javascript',
      'Поесть',
      'Прибраться в комнате',
      'Поспать',
      'Попрограммировать',
      'Поехать на собеседование',
      'Почитать learn.javascript',
    ];
    const tasksToRender = tasks.map((t,i) => {
      return (
      <div key={'task_' + i} className='task'>
        <span className='text'>{t}</span>
        <span className='delete' onClick={() => this.delete(i)}>X</span>
      </div>)
    });


    return (
      <div className='tasks'>
        <div className='header'>{`Задачи на ${date}`}</div>
        <div className='taskListWrapper'>
          {tasksToRender}
        </div>
        <div className='form'>
          <label htmlFor='input'>Создать задачу: </label>
          <input id='input' type='text'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  }}

const mapDispatchToProps = dispatch => {
 return {
  tasksActions: bindActionCreators(tasksActions, dispatch)
 }}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);