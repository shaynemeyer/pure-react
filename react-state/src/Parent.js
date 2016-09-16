import React, { Component } from 'react';
import './Parent.css';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);

    // Setup initial state
    this.state = {
      actionCount: 0
    }
  };

  handleAction = () => {
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  render() {
    return (
      <div className="Parent">
        <Child onAction={this.handleAction} count={this.state.actionCount}></Child>
        <Child onAction={this.handleAction} count={this.state.actionCount}></Child>
        <Child onAction={this.handleAction} count={this.state.actionCount}></Child>
        <Child onAction={this.handleAction} count={this.state.actionCount}></Child>
      </div>
    );
  }
}

export default Parent;
