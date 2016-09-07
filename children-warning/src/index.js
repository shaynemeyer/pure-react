import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var ErrorMessage = React.createClass({
  render: function () {
    return (
      <div className="error-message-box alert alert-danger">
        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {this.props.message}
      </div>
    );
  }
});

ReactDOM.render(
  <ErrorMessage message="The world is ending" />,
  document.getElementById('root')
);
