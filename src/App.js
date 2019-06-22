import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import * as actions from './actions';

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