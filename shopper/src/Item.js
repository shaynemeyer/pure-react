import React from 'react';
import './Item.css';

let Item = ({item, onAddToCart}) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-image"></div>
      <div className="Item-title">
        {item.name}
      </div>
      <div className="Item-description">
        {item.description}
      </div>
    </div>
    <div className="Item-right">
      <div className="Item-price">
        ${item.price}
      </div>
      <button
        className="Item-addToCart"
        onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  </div>
);

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
  onAddToCart: React.PropTypes.func.isRequired
};

export default Item;