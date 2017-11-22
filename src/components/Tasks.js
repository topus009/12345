import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tasksActions from '../actions/TasksActions';

class Calendar extends Component {
  constructor(props) {
    super(props);
      // this.onDayClick = this.onDayClick.bind(this);
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

  render() {

    


    return (
      <div>

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