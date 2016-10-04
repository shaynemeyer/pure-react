import React from 'react';
import {channels} from "../data/channel_data";
import './Converstations.css';

let Conversations = ({selectedChannel, selectedPerson}) =>{

  function getDefaultChannel() {
    return channels.filter(item => item.channel === 1)
  }

  function getChannels() {
    return channels.filter(item => item.channel === selectedChannel);
  }

  function getPeople() {
    return channels.filter(item => item.user_id === selectedPerson);
  }

  function renderContent() {
    if  (selectedChannel === 1) {
      return (
        <ul>
          {getDefaultChannel().map(item =>
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
      let channelArray = getChannels();

      if (channelArray.length > 0) {
        return (
          <ul>
            {channelArray.map(item =>
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
      } else {
        return <div>No converstations for this channel. Start one now.</div>
      }
    } else if (selectedPerson > 0) {
      let peopleArray = getPeople();

      if(peopleArray.length > 0) {
        return (
          <ul>
            {peopleArray.map(item =>
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
      }
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