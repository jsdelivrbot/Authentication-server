import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

class Feature extends Component{
  componentWillMount() {
    this.props.fetchMessage();
  }
  render(){
    return(
      <div className="">this is a feature</div>
    );
  }
}

export default connect(null,actions)(Feature);
