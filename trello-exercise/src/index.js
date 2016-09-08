import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Trello = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <div className="well well-large trello-box">
          <div className="box-wrapper">
            <div className="row">
              <div className="swimlane-title col-sm-8">Phone Features</div>
              <div className="pull-right">
                <a href="" className="more-actions">...</a>
              </div>
            </div>
            <button className="btn btn-default btn-block">Subwoofer</button>

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
