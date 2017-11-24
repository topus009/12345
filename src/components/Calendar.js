import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { 
  localeUtils,
  styleData,
  datesArr,
} from '../helpers/calendarCore';

class Calendar extends Component {
  constructor(props) {
    super(props);
      this.onDayClick = this.onDayClick.bind(this);
    }

  onDayClick(day, { selected }) {
    const { selectDay } = this.props;
    selectDay(day, selected);
  }

  render() {
    const { 
      dates, 
      selectedDay,
    } = this.props;
    let modifiers = dates[0] && dates[0].length ? {highlighted: datesArr(dates)} : {};

    return (
      <div className='calendar'>
        <style>{styleData}</style>
        <DayPicker
          onDayClick={this.onDayClick}
          selectedDays={selectedDay}
          locale="ru"
          localeUtils={localeUtils}
          modifiers={modifiers}
          // className="calendar"
          // renderDay={this.renderDay}
        />
      </div>
    )
  }
}

export default Calendar;