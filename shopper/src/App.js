import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './data/static-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      cart: []
    };
  }

  selectedTab = (index) => {
    this.setState({
      selectedTab:  index
    });
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [
        ...this.state.cart,
        item.id
      ]
    });
  }

  handleRemoveOne = (item) => {
    let {cart} = this.state;
    let idx = cart.indexOf(item.id);
    this.setState({
      cart: [
        ...cart.slice(0, idx),
        ...cart.slice(idx+1)
      ]
    });
  }

  renderContent() {
    switch (this.state.selectedTab) {
      default:
      case 0:
        return (
          <ItemPage
            items={items}
            onAddToCart={this.handleAddToCart}/>
        );
      case 1:
        return this.renderCart();
    }
  }

  renderCart() {
    // count how many of each item is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    // create an array of items
    let keys = Object.keys(itemCounts);
    let cartItems = keys.map(itemId => {
      // find the item by its id
      var item = items.find(item => item.id === parseInt(itemId, 10));

      // create a new 'item' that also has a 'count' property
      return {
        ...item,
        count: itemCounts[itemId]
      }
    });

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne}/>
    );
  }

  render() {
    let {selectedTab} = this.state;

    return (
      <div className="App">
        <Nav
          selectedTab={selectedTab}
          onTabChange={this.selectedTab}/>
        <main className="App-content">
          <div>
            {this.state.cart.length} items
          </div>
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
