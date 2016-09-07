import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

var Message = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  render: function () {
    return (
      <div className="message">
        {this.props.text}
      </div>
    );
  }
});

var NameWithHandle = React.createClass({
  propTypes: {
    author: React.PropTypes.shape({
      name: React.PropTypes.string
        .isRequired,
      handle: React.PropTypes.string
        .isRequired
    }).isRequired
  },
  render: function () {
    var { name, handle } = this.props.author;

    return (
      <span className="name-with-handle">
        <span className="name">
          {name}
        </span>
        <span className="handle">
          @{handle}
        </span>
      </span>
    );
  }
});

var Avatar = React.createClass({
  propTypes: {
    hash: React.PropTypes.string
  },
  render: function () {
    var hash = this.props.hash;
    var url = `https://www.gravatar.com/avatar/${hash}`;

    return (
      <img src={url} className="avatar" alt="avatar"/>
    );
  }
});

var Time = React.createClass({
  propTypes: {
    time: React.PropTypes.string
  },
  computeTimeString: function () {
    return moment(this.props.time)
      .fromNow();
  },
  render: function () {
    return (
      <span className="time">
        {this.computeTimeString()}
      </span>
    );
  }
});

var ReplyButton = React.createClass({
  render: function () {
    return (
      <i className="fa fa-reply reply-button" />
    );
  }
});

var RetweetButton = React.createClass({
  propTypes: {
    count: React.PropTypes.number
  },
  getCount: function () {
    if(this.props.count > 0){
      return (
        <span className="retweet-count">
          {this.props.count}
        </span>
      );
    } else {
      return null;
    }
  },
  render: function () {
    return (
      <span className="retweet-button">
        <i className="fa fa-retweet" />
        {this.getCount()}
      </span>

    );
  }
});

var LikeButton = React.createClass({
  propTypes: {
    count: React.PropTypes.number
  },
  render: function () {
    var {count} = this.props;
    return (
      <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 ?
          <span className="like-count">
            {count}
          </span>
          : null
        }
      </span>
    );
  }
});

var MoreOptionsButton = React.createClass({
  render: function () {
    return (
      <i className="fa fa-ellipsis-h more-options-button" />
    );
  }
});

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 3,
  timestamp: "2016-08-30 21:24:37"
};

var Tweet = React.createClass({
  render: function () {
    var {tweet} = this.props;
    return (
      <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle
            author={tweet.author}
          />
          <Time
            time={tweet.timestamp}
          />
          <Message text={tweet.message}/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton count={tweet.retweets}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
);
