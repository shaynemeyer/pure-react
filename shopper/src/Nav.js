import React, {Component} from 'react';

class Nav extends Component {
  render() {
    // Add this line:
    let {
      selectedTab,
      onTabChange,
      itemCount
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
          <i className="fa fa-shopping-cart"></i> {itemCount} items ($0)
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  selectedTab: React.PropTypes.number.isRequired,
  onTabChange: React.PropTypes.func.isRequired,
  itemCount: React.PropTypes.number.isRequired
}

export default Nav;
