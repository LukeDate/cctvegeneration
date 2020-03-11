import React from 'react';
import './App.css';
import Home from './components/home';
import Navigation from './components/navigation';
import Store from './components/store';
import Contact from './components/contact';
import Basket from './components/basket';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/store">
              <Store />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route path="/basket">
              <Basket />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
