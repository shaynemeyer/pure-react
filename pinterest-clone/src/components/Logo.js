import React from 'react';
import logo from '../images/aviationhd-logo.jpg';

let Logo = React.createClass({
	render: function () {
		return (
			<div className="logo-container">
				<div className="logo">
					<img src={logo} alt="Aviation HD" className="img-circle" />
				</div>
				<div className="logo-text">
					{this.props.logoText}
				</div>
			</div>
		);
	}
});

export default Logo;