import React from 'react';
import './Item.css';
import moment from 'moment';

function computeTimeString(time) {
	return moment(time*1000).fromNow();
}

function renderUps(ups){
	if(ups>0){
		return <div className="ups-count">{ups}</div>
	} else {
		return <i className="fa fa-circle"></i>
	}
}

function renderComments(comments) {
	if(comments>0){
		return <a href="" className="comments">{comments} comments</a>
	} else {
		return <a href="" className="comments">comment</a>
	}
}

function renderImage(thumb, url, altText){
	if (thumb==='self'){
		return (<a href={url} className="thumb thumb-default"><div className="default-circle"><span><i className="fa fa-wpforms"></i></span></div></a>)
	} else if (thumb==='default') {
		return (<a href={url} className="thumb thumb-default"><div className="default-circle"><span><i className="fa fa-globe"></i></span></div></a>)
	} else {
		return <a href={url}><img className="thumb" src={thumb} alt={altText} width="64" height="64" /></a>
	}
}

let Item = ({itemData, children}) => (
	<div className="item">
		<div className="item-arrows">
			<div>
				<i className="fa fa-arrow-up"></i>
			</div>
			<div>
				{renderUps(itemData.ups)}
			</div>
			<div>
				<i className="fa fa-arrow-down"></i>
			</div>
		</div>
		<div className="item-thumb-block cell">
			{renderImage(itemData.thumbnail, itemData.url, itemData.title)}
		</div>
		<div className="item-text-block">
			<div className="item-title">
				<a href={itemData.url}>{itemData.title}</a></div>


			<div className="item-subtitle">
				Submitted {computeTimeString(itemData.created)} by

				<span className="item-author">{itemData.author}</span>
			</div>
			<div className="item-comment-row">
				{renderComments(itemData.num_comments)} <a href="#">share</a> <a href="#">save</a> <a href="#">hide</a> <a href="#">report</a> <a href="#">pocket</a>
			</div>
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