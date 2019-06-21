import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import * as actions from './actions';

class Component2 extends Component {

  render() {
    const data = this.props.data;
    return (
      <div>
        Component2: {this.props.data}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.ProductInfo.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component2);