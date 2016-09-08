import React from 'react';

function Card({card}) {
	return (
		<div className="panel panel-default panel-small">
			<div className="panel-body">
				{card}
			</div>
		</div>
	);
}

Card.propTypes = {
	card: React.PropTypes.string.isRequired
};

export default Card;