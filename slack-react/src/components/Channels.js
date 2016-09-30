import React from 'react';
import {channels} from "../data/channels";

function Channel() {
  return (
    <div>
      <h2>CHANNELS</h2>
      <ul>
      {channels.map(item =>
        <li className="list-item" key={item.id}>
          # {item.name}
        </li>
      )}
      </ul>
    </div>
  )
}

export default Channel;
