import React from 'react';

let ArticleItem = React.createClass({
	render: function () {
		let {id, headline, points, author, time_added, comment_count} = this.props;
		return (
			<div className="article-item">
				<span className="title">{id}.</span> <span></span> <span className="title"><a href="#">{headline}</a></span>

				<div className="subtext">{points} points by {author} {time_added} | hide | {comment_count} comments</div>
			</div>
		)
	}
});

export default ArticleItem;