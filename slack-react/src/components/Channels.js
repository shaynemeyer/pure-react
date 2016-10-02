import React from 'react';
import {channels} from "../data/channels";

let Channel = ({onChannelChange, selectedChannel}) => {
  return (
    <div>
      <h2>CHANNELS</h2>
      <ul>
      {channels.map(item =>
        <li key={item.id} className={`list-item${selectedChannel === item.id ? ' selected' : ''}`}>
          # <a onClick={onChannelChange.bind(this, item.id)}>{item.name}</a>
        </li>
      )}
      </ul>
    </div>
  )
}

export default Channel;
