import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Admin from './components/admin'
import Home from './components/home'
import End from './components/end'
import Selection from './components/selection'

function App() {
  return (
    
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={Admin} />
        <Route path='/feedback' exact component={Selection} />
        <Route path='/feedback/end' component={End} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
