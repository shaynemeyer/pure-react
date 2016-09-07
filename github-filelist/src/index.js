import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let FileList = React.createClass({
  propTypes: {
    files: React.PropTypes.array
  },
  render() {
    let files = this.props.files;
    return (
      <table className="file-list">
        <tbody>
        {files.map(file => (
          <tr className="file-list-item" key={file.id}>
            <td className="file-name">
              {file.name}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
});

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 2,
    name: 'test',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];


ReactDOM.render(
  <FileList files={testFiles}/>,
  document.getElementById('root')
);
