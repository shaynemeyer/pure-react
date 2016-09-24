import React, {Component} from 'react';

class Nav extends Component {
  render() {
    // Add this line:
    let {
      selectedTab,
      onTabChange,
      itemCount,
      cartTotal
    } = this.props;
    return (
      <nav className="App-nav">
        <ul>
          <li className={`App-nav-item ${selectedTab === 0 && 'selected'}`}>
            <a onClick={onTabChange.bind(this, 0)}>Items</a>
          </li>
          <li className={`App-nav-item ${selectedTab === 1 && 'selected'}`}>
            <a onClick={onTabChange.bind(this, 1)}>Cart</a>
          </li>
        </ul>
        <div className="CartCount">
          <a className="cart-nav" onClick={onTabChange.bind(this, 1)}>
            <i className="fa fa-shopping-cart"></i> {itemCount} items (${cartTotal})
          </a>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  selectedTab: React.PropTypes.number.isRequired,
  onTabChange: React.PropTypes.func.isRequired,
  itemCount: React.PropTypes.number.isRequired,
  cartTotal: React.PropTypes.number.isRequired
}

export default Nav;
