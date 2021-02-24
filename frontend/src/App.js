import React, { useState } from 'react'
import './App.scss'
import Home from './screens/home'
import Navigation from './components/navigation'
import Store from './screens/store'
import Contact from './components/contact'
import Basket from './screens/basket'
import ProductScreen from './screens/productscreen'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import ShippingAddress from './screens/shippingaddress'
import PaymentScreen from './screens/paymentscreen'

function App () {
  const [hasScrolled, setScroll] = useState(false)
  return (
    <div className="App">
      <Router>
        <Navigation hasClicked={setScroll}/>
        <Switch>
          <Route exact path="/">
              <Home hasScrolled={hasScrolled}/>
          </Route>
          <Route path="/store">
              <Store />
          </Route>
          <Route path="/products/:id">
            <ProductScreen />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route path="/basket/:id?">
              <Basket />
          </Route>
          <Route path="/shipping">
            <ShippingAddress />
          </Route>
          <Route path="/payment">
            <PaymentScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
