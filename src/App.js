import React, {useState} from 'react';
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
  const [opt,setOpt] = useState({
  "Options" : [ {
    "count" : 26,
    "isSelected" : false,
    "text" : "Found a better alternative"
  }, {
    "count" : 10,
    "isSelected" : false,
    "text" : "Do not need it anymore"
  }, {
    "count" : 13,
    "isSelected" : false,
    "text" : "Hard to understand"
  }, {
    "count" : 7,
    "isSelected" : false,
    "text" : "I was just browsing"
  } ]
}
)

  return (
    
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={() => <Admin  opt={opt} setOpt={()=>setOpt}/>} />
        <Route path='/feedback' exact component={() => <Selection  opt={opt} setOpt={()=>setOpt}/>} />
        <Route path='/feedback/end' component={End} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
