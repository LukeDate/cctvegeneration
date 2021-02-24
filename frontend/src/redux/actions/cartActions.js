import axios from "axios"
import { 
  ADD_TO_CART,
  ADD_TO_CART_FAILED,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_FAILED,
  SAVE_PAYMENT_METHOD,
  SAVE_PAYMENT_METHOD_FAILED,
  SAVE_SHIPPING_ADDRESS,
  SAVE_SHIPPING_ADDRESS_FAILED
} from "../constants/constants";

// ACTION CREATORS ARE HERE
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + id);
    dispatch ({ type: ADD_TO_CART, payload: {
      product: data,
      quantity: qty,
    }})
    const { cart: { cartItems } } = getState();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch(error) {
    dispatch({ type: ADD_TO_CART_FAILED, payload: error.message })
  }
}

export const removeFromCart = (id) => (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );  } catch (error) {
    dispatch({ type: REMOVE_FROM_CART_FAILED, payload: error.message })
  }
}

export const saveShippingAddress = (data) => (dispatch) => {
  try {
    dispatch({ type: SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: SAVE_SHIPPING_ADDRESS_FAILED, payload: error.message})
  }
}

export const savePaymentMethod = (data) => (dispatch) => {
  try {
    dispatch({ type: SAVE_PAYMENT_METHOD, payload: data });
  } catch (error) {
    dispatch({ type: SAVE_PAYMENT_METHOD_FAILED, payload: error.message })
  }
}