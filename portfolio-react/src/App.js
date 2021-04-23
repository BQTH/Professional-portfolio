import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Designs from './pages/Designs'

function App() {
  return (
    <div className="App">
     
     <div className="content">
       <Router>
          <Switch>
              <Route path="/" exact component={Home} />   
              <Route path="/designs" exact component={Designs} />     
          </Switch>
        </Router>
        </div>
    </div>
  );
}

export default App;
