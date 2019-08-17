import React from 'react';
import './App.css';
import GardensContainer from "./containers/gardensContainer";
import PlantsContainer from "./containers/plantsContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home'

const navigation = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/gardens">gardens</Link>
          </li>
          <li>
            <Link to="/plants">plants</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/gardens" component={GardensContainer} />
        <Route exact path="/plants" component={PlantsContainer} />
      </div>
    </Router>
  )
}


function App() {
  return (
    <div className="App">
      {navigation()}
    </div>
  );
}

export default App;
