import React from 'react';
import {channels} from "../data/channel_data";
import './Converstations.css';

function Conversations(){
  return (
    <div className="channel">
      <ul>
        {channels.map(item =>
          <li className="list-item" key={item.user_id}>
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
    </div>
  );
}

export default Conversations;