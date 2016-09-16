import React, {Component} from 'react';
import CountingParent from './CountingParent';

class Page extends Component {
	render() {
		return (
			<div>
				<CountingParent/>
				<CountingParent/>
				<CountingParent/>
				<CountingParent/>
			</div>

		);
	}
};

export default Page;