import React from 'react';

function CommitMessage({commit}) {
	return (
		<td className="commit-message">
			{commit.message}
		</td>
	);
}

CommitMessage.propTypes = {
	commit: React.PropTypes.object.isRequired
};

export default CommitMessage;