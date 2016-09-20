import React from 'react';
import Item from './Item';
import './ItemPage.css';

function ItemPage({items, onAddToCart}) {
  return (
    <ul className="ItemPage-items">
      {items.map(item =>
        <li className="ItemPage-item"
          key={item.id}>
          <Item item={item} onAddToCart={onAddToCart.bind(null, item)}/>
        </li>
      )}
    </ul>
  );
}

ItemPage.propTypes = {
  items: React.PropTypes.array.isRequired,
  onAddToCart: React.PropTypes.func.isRequired
};

export default ItemPage;