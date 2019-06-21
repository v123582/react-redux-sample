import React, { Component } from 'react';

class Component1 extends Component {

  render() {
    const data = this.props.data;
    return (
      <div>
        Component1: {this.props.data}
      </div>
    );
  }
}

export default Component1;