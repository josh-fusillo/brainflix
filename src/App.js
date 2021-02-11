import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import UploadsPage from './components/UploadsPage/UploadsPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" exact component={UploadsPage} />                
          <Route path="/:id" exact component={Home} />  
        </Switch>
      </Router>
     </div>
  );
}

export default App;
