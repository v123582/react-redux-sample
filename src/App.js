import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import * as actions from './actions';

import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class App extends Component {

  create = (event) => {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    console.log(newItemValue)
    this.props.dispatch(actions.create(newItemValue));
  }

  remove = (i) => {
    console.log(i)
    this.props.dispatch(actions.remove(i));
  }

  render() {

    const todoItems = this.props.todoItems;
    console.log(todoItems)

    return (
      <div>
        <div className="todoapp">
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
          <button onClick={this.create}>Add</button>
          {todoItems.map((d, i) => (
            <li key={i}>{d} <button onClick={() => this.remove(i)}>remove</button></li>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoItems: state.TaskReducer.todoItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);