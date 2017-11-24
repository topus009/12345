import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions/AppActions';
import Calendar from '../components/Calendar';
import Tasks from '../components/Tasks';


class App extends Component {
  constructor(props) {
    super(props);
      this.selectDay = this.selectDay.bind(this);
    
      this.state = {
        isTasksVisible: false,
      }
    }
  
  componentDidMount() {
    const { preload_List } = this.props.appActions; 
    preload_List();
  }

  selectDay(day, selected) {
    const { selectDay } = this.props.appActions; 
    this.setState({
      isTasksVisible: !selected,
    });
    selectDay(!selected ? day : null);
  }

  render() {
    const { 
      dates, 
      tasks,
      selectedDay,
      selectedFormattedDay,
      appActions,
    } = this.props;
    const { 
      isTasksVisible,
    } = this.state;
    const { 
      saveTask,
      deleteTask,
    } = appActions;
    // const day = selectedDay && selectedDay.toLocaleDateString('ru').split('.').reverse().join('.');

    return (
      <div className='wrapper'>
        <Calendar
          selectDay={(day, selected) => this.selectDay(day, selected)}
          selectedDay={selectedDay}
          dates={dates}
        />
        {isTasksVisible ? 
          <Tasks 
            tasks={tasks} 
            selectedDay={selectedFormattedDay}
            saveTask={saveTask}
            deleteTask={deleteTask}
          /> : <div/>
        } 
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    dates, 
    tasks,
    selectedDay,
    selectedFormattedDay,
  } = state.app;
  return {
    dates: dates,
    tasks: tasks,
    selectedDay: selectedDay,
    selectedFormattedDay: selectedFormattedDay,
  }
};

const mapDispatchToProps = dispatch => {
 return {
   appActions: bindActionCreators(appActions, dispatch),
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
