import React from 'react';
import Time from './time';
import FileIcon from './fileIcon';
import CommitMessage from './commitMessage';

function getFileName(file) {
	return (
		<div className="col-sm-4 file-name" key={1}>
			<FileIcon
				file={file}
				key={0} />
			<span>
				{file.name}
			</span>
		</div>
	);
}

let FileListItem = React.createClass({
	propTypes: {
		file: React.PropTypes.object.isRequired
	},
	render() {
		var {file} = this.props;
		return (
			<div className="row file-list-item">
				{getFileName(file)}
				<CommitMessage commit={file.latestCommit} />
				<div className="col-sm-4 age">
					<Time time={file.updated_at}/>
				</div>
			</div>
		);
	}
});

export default FileListItem;
