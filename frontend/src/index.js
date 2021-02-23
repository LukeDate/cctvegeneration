import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { productDetailsReducer, productListReducer } from './redux/reducers/productReducer'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie';
import { cartReducer } from './redux/reducers/cartReducer'

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
// let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
