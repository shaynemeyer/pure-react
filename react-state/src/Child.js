import React, { Component } from 'react';

class Child extends Component {

	alertParent = () => {
		this.props.onAction(
			'button was clicked'
		);
	}

	render() {
		return (
			<div className="Child">
				<button onClick={this.alertParent}>
					Click Me
				</button>
			</div>
		);
	}
}

export default Child;