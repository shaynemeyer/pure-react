import React from 'react';
import NavBarItem from './NavBarItem';

let NavBar = React.createClass({
	render: function () {
		return (
			<div className="nav-wrapper">
				<div className="main-nav">
					<NavBarItem itemText="Boards" itemCount="37"/>
					<NavBarItem itemText="Pins" itemCount="8.9k"/>
					<NavBarItem itemText="Likes" itemCount="186"/>
					<NavBarItem itemText="Followers" itemCount="8.9k"/>
					<NavBarItem itemText="Following" itemCount="1.8k"/>
				</div>
			</div>
		);
	}
});

export default NavBar;