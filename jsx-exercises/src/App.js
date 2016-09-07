import React from 'react';
import ReactDOM from 'react-dom';

var MyThing = React.createClass({
  render: function () {
    return (
      <div className="book">
        <div className="title">
          The Title
        </div>
        <div className="author">
          The Author
        </div>
        <ul className="stats">
          <li className="rating">
            5 stars
          </li>
          <li className="isbn">
            12-345678-910
          </li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <MyThing/>,
  document.getElementById('#root')
);
