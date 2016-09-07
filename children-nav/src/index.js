import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var NavItem = React.createClass({
  render: function () {
    return (
      <div>
        <a href={this.props.url}>{this.props.children}</a>
      </div>
    )
  }
});

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <NavItem url="/">
          Home
        </NavItem>
        <NavItem url="/about">
          About
        </NavItem>
        <NavItem url="/contact">
          Contact
        </NavItem>
      </div>
    );
  }
});

ReactDOM.render(
  <Nav />,
  document.getElementById('root')
);
