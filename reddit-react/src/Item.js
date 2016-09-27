import React from 'react';
import './Item.css';
import moment from 'moment';

function computeTimeString(time) {
	return moment(time*1000).fromNow();
}

let Item = ({itemData, children}) => (
	<div className="item">
		<div className="item-arrows">
			<div>
				<i className="fa fa-arrow-up"></i>
			</div>
			<div>
				<i className="fa fa-circle"></i>
			</div>
			<div>
				<i className="fa fa-arrow-down"></i>
			</div>
		</div>
		<div>
			{itemData.thumbnail}
		</div>
		<div className="item-title">{itemData.title}</div>


		<div className="item-subtitle">
			created date: {computeTimeString(itemData.created)}

			<span className="item-author">{itemData.author}</span>
		</div>
		<div className="item-comment-row">
			<a href="">comment</a> <a href="#">share</a> <a href="#">save</a> <a href="#">hide</a> <a href="#">report</a> <a href="#">pocket</a>
		</div>
	</div>
);

Item.propTypes = {
	itemData: React.PropTypes.object.isRequired
};

export default Item;

/*

 ups: {item.data.ups} <br />

 num of comments: {item.data.num_comments} <br />

 */