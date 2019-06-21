import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import * as actions from './actions';

function Component3(props) {

  return (
    <div>
      Component3: {props.data}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Component3);