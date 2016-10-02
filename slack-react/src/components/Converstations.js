import React from 'react';
import {channels} from "../data/channel_data";
import './Converstations.css';

let Conversations = ({selectedChannel, selectedPerson}) =>{
  function renderContent() {
    if  (selectedChannel === 1) {
      return (
        <ul>
          {channels.map(item =>
          <li className="list-item" key={item.id}>
            <div className="pick-placeholder">

            </div>
            <div className="item-data">
              <div>
                <span className="user-name">{item.user_name}</span> <span className="date-created">{item.date}</span> </div>
              <div>{item.message}</div>
            </div>

          </li>
        )}
        </ul>
      )
    } else if (selectedChannel > 1) {
      return (
        <ul>
          {channels.map(item =>
            <li className="list-item" key={item.id}>
              <div className="pick-placeholder">

              </div>
              <div className="item-data">
                <div>
                  <span className="user-name">{item.user_name}</span> <span className="date-created">{item.date}</span> </div>
                <div>{item.message}</div>
              </div>

            </li>
          ).filter(item => item.channel===selectedChannel)}
        </ul>
      )
    } else if (selectedPerson > 0) {
      return (
        <div>Selected Person ${selectedPerson}</div>
      )
    } else {
      return (
        <div>
          No results available
        </div>
      )
    }
  }
  return (
    <div className="channel">
      {renderContent()}
    </div>
  );
}

export default Conversations;