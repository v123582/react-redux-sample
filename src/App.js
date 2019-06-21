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

  create = (event) => {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    console.log(newItemValue)
    this.props.dispatch(actions.create(newItemValue));
  }

  render() {
    console.log('===== 3 =====')

    const data = this.props.data;
    const todoItems = this.props.todoItems;

    console.log(todoItems)

    return (
      <div>
        {data}
        <button onClick={this.handleClick}>Button</button>

        <Component1 data={data}/>
        <Component2 />
        <Component3 />


        <div className="todoapp">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
          <button onClick={this.create}>Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.ProductInfo.data,
    todoItems: state.ProductInfo.todoItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);