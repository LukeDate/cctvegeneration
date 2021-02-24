import React, { useEffect } from 'react';
import '../styles/basket.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import { Link, useLocation, useParams } from 'react-router-dom';

const Basket = () => {
    const cart = useSelector(state => state.cart);
    const { id } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const renderDropDown = (product) => {
        return [...Array(product.product.countInStock).keys()].map(x => <option value={x+1}>{x+1}</option>)  
      }

    // useEffect(() => {
    //     if(id) {
    //         dispatch(addToCart(id, qty))
    //     }
    // }, [dispatch, id, qty]);

    const totalPrice = () => {
        let total = [];
        cart.cartItems.map(item => {
            total.push(item.quantity * item.product.product.price);
        })
        return total.reduce((a, b) => a + b, 0);
    }
    const renderItems = () => {
        return cart.cartItems.map((item) => (
        <div key={item.product.product._id} className="basket-item-wrapper">
            <img className="basket-item" src={item.product.product.imageUrl.front} alt="Product Item"/>
            <div>{item.quantity}</div>
            <div>
                Qty: <select value={item.quantity} onChange={(e) => dispatch(addToCart(item.product.product._id, Number(e.target.value)))}>{renderDropDown(item.product)}</select>
                </div>
            <button className="button-delete" onClick={() => dispatch(removeFromCart(item.product.product._id))}>Remove from basket</button>
        </div>
        ))
    }

    return (
        <div className="basket-wrapper">
            {
                renderItems()
            }
        <div>Your total comes to: {totalPrice()} Gazzer Dollars</div>
            <Link to="/shipping" style={{ height: '20px' }}>Proceed to Checkout</Link>
        </div>
    )
}

export default Basket;