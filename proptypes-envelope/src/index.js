import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import stamp from './images/stamp.png';

var fromPerson = {
  fullname: "Mr. Sender",
  street: "123 Fake St.",
  city: "Boston",
  state: "MA",
  zip: "02118"
};

var toPerson = {
  fullname: "Mrs. Receiver",
  street: "123 Fake St.",
  city: "San Francisco",
  state: "CA",
  zip: "94101"
};

var AddressLabel = React.createClass({
  render: function () {
    var {address} = this.props;
    return (
      <div className="address-label">
        {address.fullname} <br />
        {address.street} <br />
        {address.city}, {address.state} {address.zip}
      </div>
    );
  }
});

var Envelope = React.createClass({
  render: function () {
    var {fromPerson, toPerson} = this.props;
    return (
      <div className="envelope">
        <div className="stamp">
          <img src={stamp} alt="Tomatoes"/>
        </div>
        <div className="from-address">
          <AddressLabel address={fromPerson} />
        </div>
        <div className="to-address">
          <AddressLabel address={toPerson} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Envelope fromPerson={fromPerson} toPerson={toPerson} />,
  document.querySelector('#root')
);
