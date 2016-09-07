import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var cardInfo = {
  company: "Big Bank, Inc.",
  cardnumber: "1234 5678 8765 4321",
  code: "1234",
  expire: "08/19",
  cardholder: "CARDHOLDER NAME"
};

var CreditCard = React.createClass({
  render: function () {
    var {cardInfo} = this.props;
    return (
      <div className="credit-card">
        <div className="company-name">
          {cardInfo.company}
        </div>
        <div className="card-number">
          {cardInfo.cardnumber}
        </div>
        <div className="code">
          {cardInfo.code}
        </div>
        <div className="expire-date">
          <span className="valid-thru">
            VALID
            THRU
          </span>
          <span className="expire">
            {cardInfo.expire}
          </span>
        </div>
        <div className="card-holder">
          {cardInfo.cardholder}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <CreditCard cardInfo={cardInfo} />,
  document.querySelector('#root')
);
