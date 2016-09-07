import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import posterImage from './images/react.png';

var posterInfo = {
  image: "./images/react.png",
  text: "The best thing since jQuery, probably."
};

var Poster = React.createClass({
  render: function () {
    var {poster} = this.props;
    return (
      <div className="poster">
        <div className="post-image">
          <img src={poster.image} alt="React" />
        </div>
        <div className="poster-text">
          {poster.text}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Poster poster={posterInfo} />,
  document.querySelector('#root')
);
