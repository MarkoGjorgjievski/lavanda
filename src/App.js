import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route exact to="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    )
}

export default App;