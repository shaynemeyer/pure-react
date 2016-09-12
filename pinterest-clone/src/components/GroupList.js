import React from 'react';
import GroupItem from './GroupItem';

let GroupList = React.createClass({
	render: function () {
		return (
			<div className="group-list-container">
				<GroupItem />
				<GroupItem />
				<GroupItem />
				<GroupItem />
				<GroupItem />
				<GroupItem />
			</div>
		);
	}
});

export default GroupList;