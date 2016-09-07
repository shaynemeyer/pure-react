import React from 'react';
import Time from './time';
import FileIcon from './fileIcon';
import CommitMessage from './commitMessage';

function getFileName(file) {
	return [
		<FileIcon
			file={file}
			key={0} />,
		<td className="file-name" key={1}>
			{file.name}
		</td>
	];
}

let FileListItem = React.createClass({
	propTypes: {
		file: React.PropTypes.object.isRequired
	},
	render() {
		var {file} = this.props;
		return (
			<tr className="file-list-item">
				{getFileName(file)}
				<CommitMessage commit={file.latestCommit} />
				<td className="age">
					<Time time={file.updated_at}/>
				</td>
			</tr>
		);
	}
});

export default FileListItem;
