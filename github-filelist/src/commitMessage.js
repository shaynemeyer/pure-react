import React from 'react';

function CommitMessage({commit}) {
	return (
		<div className="col-sm-4 commit-message">
			{commit.message}
		</div>
	);
}

CommitMessage.propTypes = {
	commit: React.PropTypes.object.isRequired
};

export default CommitMessage;