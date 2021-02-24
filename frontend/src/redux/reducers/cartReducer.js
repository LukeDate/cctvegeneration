import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_PAYMENT_METHOD, SAVE_SHIPPING_ADDRESS } from "../constants/constants";

const cartReducer = ( state = { cartItems: [] }, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const itemExists = state.cartItems.find((x) => x.product.product._id === item.product.product._id);
      console.log(state.cartItems);
        if(itemExists) {
          return {...state, cartItems: state.cartItems.map(x => x.product === itemExists.product ? item : x)};
        } else {
          return {...state, cartItems: [...state.cartItems, item]}
        }
      case REMOVE_FROM_CART:
        console.log(state.cartItems[0].product);
        return { ...state, cartItems: state.cartItems.filter(x => x.product.product._id !== action.payload )}
      case SAVE_SHIPPING_ADDRESS:
        return { ...state, shippingAddress: action.payload }
      case SAVE_PAYMENT_METHOD:
        return { ...state, paymentMethod: action.payload } 
     default: 
     return state;
  }
}

export { cartReducer };