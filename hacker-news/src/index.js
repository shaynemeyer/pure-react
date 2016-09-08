import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar';
import Articles from './components/Articles';
import './index.css';

let HackerNews = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar/>
        <Articles/>
      </div>

    )
  }
});

ReactDOM.render(
  <HackerNews />,
  document.getElementById('root')
);
