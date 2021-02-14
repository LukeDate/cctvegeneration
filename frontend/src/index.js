import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cartReducer from './redux/reducers/cartReducer'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
//   }

// const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
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
