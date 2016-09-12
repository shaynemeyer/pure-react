import React from 'react';

let NavBarItem = React.createClass({
	render: function () {

		return (
			<div className="navbar-item">
				<div className="item-count">
					{this.props.itemCount}
				</div>
				<div className="item-text">
					{this.props.itemText}
				</div>
			</div>
		)
	}
});

export default NavBarItem;