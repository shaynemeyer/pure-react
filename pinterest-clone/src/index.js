import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import GroupList from './components/GroupList';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Logo logoText="Avaition Explorer" />
        <NavBar/>
        <GroupList />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
