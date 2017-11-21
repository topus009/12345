import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as calendarActions from '../actions/CalendarActions';

class Calendar extends Component {
  // constructor(props) {
  //   super(props);
  //     this.add = this.add.bind(this);
  //     this.remove = this.remove.bind(this);
    
  //     this.state = {
  //     }
  //   }
  
  componentDidMount() {
    // this.props.PageActions.preload_List();
  }

  render() {

    return (
      <div>
        <div className='calendar'>
          
        </div>
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