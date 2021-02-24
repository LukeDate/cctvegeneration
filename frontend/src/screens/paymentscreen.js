import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CheckoutSteps from '../components/checkoutsteps';
import { savePaymentMethod } from '../redux/actions/cartActions';
import "../styles/paymentscreen.scss";
const PaymentScreen = () => {
    const cart = useSelector(state => state.cart);
    const { shippingAdress } = cart;
    
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = () => {
        dispatch(savePaymentMethod(paymentMethod));
        history.push("/placeorder");
    }

    if(!shippingAdress.address) {
        history.push("/shipping");
    }
return (
    <div className="payment-wrapper">
        <CheckoutSteps step1 step2 />
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Payment</h1>
            </div>
            <div>
                <div>
                    <input 
                        type="radio"
                        id="paypal"
                        value="PayPal"
                        name="paymentMethod"
                        required
                        checked
                        onChange={e => setPaymentMethod(e.target.value)}
                    >
                    </input>
                    <label htmlFor="paypal">PayPal</label>
                </div>
            </div>
            <div>
                <div>
                    <input 
                        type="radio"
                        id="stripe"
                        value="Stripe"
                        name="paymentMethod"
                        required
                        onChange={e => setPaymentMethod(e.target.value)}
                    >
                    </input>
                    <label htmlFor="stripe">Stripe</label>
                </div>
            </div>
            <div>
                <button className="primary" type="submit">Continue</button>
            </div>
        </form>
    </div>
)}

export default PaymentScreen;