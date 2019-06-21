import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import * as actions from './actions';

import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class App extends Component {

  componentWillMount(){
    console.log('===== 2 =====')
  }

  handleClick = () => {
    console.log('===== 4 =====')

    console.log(this.props.data+1)
    this.props.dispatch(actions.setData(this.props.data+1));
  }

  render() {
    console.log('===== 3 =====')

    const data = this.props.data;
    return (
      <div>
        {data}
        <button onClick={this.handleClick}>Button</button>

        <Component1 data={data}/>
        <Component2 />
        <Component3 />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);