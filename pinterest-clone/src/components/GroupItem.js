import React from 'react';

let GroupItem = React.createClass({
	render: function () {
		//let imgSrc = `images/${this.props.imgSrc}`;
		return (
			<div className="well well-sm group-item col-sm-4">
				<div className="item-title">
					{this.props.itemText}
				</div>
				<img src={this.props.imgSrc} alt={this.props.itemText} />

			</div>
		);
	}
});

export default GroupItem;
