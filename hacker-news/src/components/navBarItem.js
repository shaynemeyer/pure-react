import React from 'react';

let NavBarItem = React.createClass({
	render: function () {
		return (
			<span className="nav-item">
				<span>{this.props.navText}</span>
				<span className="nav-seperator">|</span>
			</span>
		);
	}
});

export default NavBarItem;