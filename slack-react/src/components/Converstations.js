import React from 'react';
import {channels} from "../data/channel_data";

function Conversations(){
  return (
    <div className="channel">
      <ul>
        {channels.map(item =>
          <li className="list-item" key={item.user_id}>
            <div>{item.user_name} {item.date} </div>
            <div>{item.message}</div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Conversations;