import React from 'react';
import NavBarItem from './NavBarItem';
import logo from '../images/y18.gif';

let NavBar = React.createClass({
  render: function () {
    return (
      <div className="head-nav">
        <img src={logo} alt="Y combinator" />
        <div className="nav-item-group">
          <span className="navbar-title">Hacker News</span>
          <NavBarItem navText="new" isLast="false"/>
          <NavBarItem navText="threads" isLast="false"/>
          <NavBarItem navText="comments" isLast="false"/>
          <NavBarItem navText="show" isLast="false"/>
          <NavBarItem navText="ask" isLast="false"/>
          <NavBarItem navText="jobs" isLast="false"/>
          <NavBarItem navText="submit" isLast="true"/>
        </div>
      </div>
    )
  }
});

export default NavBar;