import axios from "axios"
import Cookie from "js-cookie";
import { ADD_TO_CART, ADD_TO_CART_FAILED, REMOVE_FROM_CART } from "../constants/constants";

// ACTION CREATORS ARE HERE
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + id);
    dispatch ({ type: ADD_TO_CART, payload: {
      product: data,
      quantity: qty,
    }})
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch(error) {
    dispatch({ type: ADD_TO_CART_FAILED, payload: error.message })
  }
}

export const removeFromCart = (id) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  } catch (error) {
    
  }
}