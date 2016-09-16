import React, {Component} from 'react';
import Child from './Child';

class CountingParent extends Component {
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
	};

	resetCount = () => {
		this.setState({
			actionCount: 0
		});
	}

	render() {
		return (
			<div className="Parent">
				<Child onAction={this.handleAction} /><button onClick={this.resetCount}>Reset Count</button>
				<p>
					Clicked <strong>{this.state.actionCount}</strong> times
				</p>

			</div>
		);
	}
}

export default CountingParent;