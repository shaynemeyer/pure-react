import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Footer = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Body = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Title = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

var Dialog = React.createClass({
  render: function () {
    return (
      <div>
        <Title>
          This is Important
        </Title>
        <Body>
          Here is some important text or error or something.
        </Body>
        <Footer>
          <button className="pull-right">Close</button>
        </Footer>
      </div>
    );
  }
});

ReactDOM.render(
  <Dialog />,
  document.getElementById('root')
);
