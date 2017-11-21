import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PageActions from '../actions/PageActions';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //     this.add = this.add.bind(this);
  //     this.remove = this.remove.bind(this);
    
  //     this.state = {
  //     }
  //   }
  
  componentDidMount() {
    this.props.PageActions.preload_List();
  }

  render() {

    return (
      <div>
        <div className=''>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }}

const mapDispatchToProps = (dispatch) => {
 return {
    PageActions: bindActionCreators(PageActions, dispatch)
 }}

export default connect(mapStateToProps, mapDispatchToProps)(App)