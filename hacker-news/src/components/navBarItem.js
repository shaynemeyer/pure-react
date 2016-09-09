import React from 'react';

let NavBarItem = React.createClass({
	render: function () {
		let {navText,isLast} = this.props;

		return (
			<span className="nav-item">
				<span>{navText}</span>

				{(!isLast) ? '<span className="nav-seperator">|</span>' : ''}

			</span>
		);
	}
});

export default NavBarItem;