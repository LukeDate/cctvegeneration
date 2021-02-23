import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/constants";

const cartReducer = ( state = { cartItems: []}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find(x => x.product.id === item.product.id);
      console.log("item", state);
      
        if(product) {
          return {...state, cartItems: state.cartItems.map(x => x.product.id === product.product.id ? item : x)};
        }
        return {...state, cartItems: [...state.cartItems, item]}
      case REMOVE_FROM_CART:
        return { cartItems: state.cartItems.filter(x => x.product.id !== action.payload )}
     default: 
     return state;
  }
}

export { cartReducer };