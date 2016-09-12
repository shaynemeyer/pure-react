import React from 'react';
import diyPic from '../images/pinterest-diy.png';

let GroupItem = React.createClass({
	render: function () {
		return (
			<div className="well well-sm group-item col-sm-4">

				<img src={diyPic} alt="DIY" />

			</div>
		);
	}
});

export default GroupItem;
