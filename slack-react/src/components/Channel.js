import React from 'react';

let Channel = React.createClass({
  render: function () {
    let {channel} = this.props;

    return (
      <li className="list-item" key={channel.id}>
        # {channel.name}
      </li>
    )
  }
});

export default Channel;