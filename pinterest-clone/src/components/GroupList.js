import React from 'react';
import GroupItem from './GroupItem';

let GroupList = React.createClass({
	render: function () {
		return (
			<div className="group-list-container">
				<GroupItem itemText="DIY - Tips Tricks Ideas"
				           imgSrc="pinterest-diy.png"/>
				<GroupItem itemText="AVIATION"
				           imgSrc="pinterest-aviation.png"/>
				<GroupItem itemText="Exception Aviation"
				           imgSrc="pinterest-exceptional.png"/>
				<GroupItem itemText="AEROSPACE"
				           imgSrc="pinterest-aerospace.png"/>
				<GroupItem itemText="WHEN FLYING WAS..."
				           imgSrc="pinterest-when.png"/>
				<GroupItem itemText="Recycled into Furniture"
				           imgSrc="pinterest-recycled.png"/>
			</div>
		);
	}
});

export default GroupList;