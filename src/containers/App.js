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
  //     this.remove = this.remove.bind(this);
    
      this.state = {
        isTasksVisible: false,
      }
    }
  
  componentDidMount() {
    // this.props.PageActions.preload_List();
  }

  selectDay() {
    const { isTasksVisible } = this.state;
    this.setState({
      isTasksVisible: !isTasksVisible,
    });
  }


  render() {
    return (
      <div className='wrapper'>
        <Calendar
          selectDay={() => this.selectDay()}
        />
        <Tasks/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  }
};

const mapDispatchToProps = dispatch => {
 return {
   appActions: bindActionCreators(appActions, dispatch)
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)