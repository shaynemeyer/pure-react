import React from 'react';
import NavBarItem from './navBarItem';
import logo from '../images/y18.gif';

let NavBar = React.createClass({
	render: function () {
		return (
			<div>
				<img src={logo} alt="Y combinator" />
				<span className="navbar-title">Hacker News</span>
				<NavBarItem navText="new" isLast="false"/>
				<NavBarItem navText="threads" isLast="false"/>
				<NavBarItem navText="comments" isLast="false"/>
				<NavBarItem navText="show" isLast="false"/>
				<NavBarItem navText="ask" isLast="false"/>
				<NavBarItem navText="jobs" isLast="false"/>
				<NavBarItem navText="submit" isLast="true"/>
			</div>
		)
	}
});

export default NavBar;