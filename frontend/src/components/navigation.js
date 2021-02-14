import React from 'react';
import '../styles/navigation.scss';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


const Navigation = ({...props}) => {
    return (
    <nav className="nav-wrapper">
        <img src="/assets/cctv-assets/circle-squared.jpg" width="100px" height="100px"/>
        <h1>Generation</h1>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div to="/about" onClick={() => props.hasClicked(true)}>about</div>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
            </li>
          </ul>    
      <div className="basket-style">
      <Link to="/basket"><img height="20px" width="20px" src="/assets/shopping-cart.png"/></Link>
        {props.items.length} items {props.total === 0 ? '' : `£${props.total}` }
      </div>
    </nav>
    )
}

const mapStateToProps = ( state ) => {
  return {
    total: state.total,
    items: state.addedItems
  }
}

export default connect(mapStateToProps)(Navigation);