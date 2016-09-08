import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';

let Trello = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <div className="well well-large trello-box">
          <div className="box-wrapper">
            <div className="row">
              <div className="swimlane-title col-xs-7">Phone Features</div>
              <div className="more-actions pull-right">
                <a href="#">...</a>
              </div>
            </div>

            <Card card="Subwoofer" />
            <Card card="Non-porous, washable" />
            <Card card="Wings" />
            <Card card="Beveled Bezel" />
            <Card card="Beveled Bezel" />
            <Card card="Seedless" />

            <div className="box-footer">
              Add a card...
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Trello />,
  document.getElementById('root')
);
