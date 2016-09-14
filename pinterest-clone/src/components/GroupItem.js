import React from 'react';

let GroupItem = React.createClass({
	render: function () {
		function getImage(imageName) {
			console.log(imageName)
			return require("../images/imgSrc/"+imageName);
		}

		let imgSrc = getImage(this.props.imgSrc);

		return (
			<div className="well well-sm group-item">
				<div className="item-title">
					{this.props.itemText}
				</div>
				<img src={imgSrc} alt={this.props.itemText} />
				<div className="follow">
					<button className="btn btn-default btn-block">Follow</button>
				</div>
			</div>
		);
	}
});

export default GroupItem;
