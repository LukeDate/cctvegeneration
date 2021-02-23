import React, { useState } from 'react'
import './App.scss'
import Home from './components/home'
import Navigation from './components/navigation'
import Store from './components/store'
import Contact from './components/contact'
import Basket from './components/basket'
import ProductScreen from './components/productscreen'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

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
        </Switch>
      </Router>
    </div>
  )
}

export default App
