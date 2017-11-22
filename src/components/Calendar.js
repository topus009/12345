import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as calendarActions from '../actions/CalendarActions';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { 
  localeUtils,
  styleData,
  modifiersData,

} from '../helpers/calendarCore';

class Calendar extends Component {
  constructor(props) {
    super(props);
      this.onDayClick = this.onDayClick.bind(this);
      this.state = {
        selectedDay: null,
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

  onDayClick(day, { selected }) {
    console.warn(day)
    console.log(selected)
    if (selected) {
      this.setState({ 
        selectedDay: null,
      });
      return;
    }
    this.setState({ 
      selectedDay: day,
    });
  }

  render() {
    const { selectedDay } = this.state;

    


    return (
      <div>
        <style>{styleData}</style>
        <DayPicker
          onDayClick={this.onDayClick}
          selectedDays={selectedDay}
          locale="ru"
          localeUtils={localeUtils}
          modifiers={modifiersData}
          // canChangeMonth={true}
          // className="calendar"
          // renderDay={this.renderDay}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    calendar: state.calendar
  }}

const mapDispatchToProps = dispatch => {
 return {
   calendarActions: bindActionCreators(calendarActions, dispatch)
 }}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);