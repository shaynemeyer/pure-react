import React from 'react';
import './Item.css';

let Item = ({item, children}) => (
	<div className="Item">
		<div className="Item-left">
			<div className="Item-image"></div>
			<div className="Item-title">

			</div>
			<div className="Item-description">

			</div>
		</div>
		<div className="Item-right">
			<div className="Item-price">

			</div>

		</div>
	</div>
);

Item.propTypes = {
	item: React.PropTypes.object.isRequired
};

export default Item;