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
        <nav>
          <Link to="/">Home</Link>
          <Link to="/gardens">Gardens</Link>
          <Link to="/plants">Plants</Link>
        </nav>
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
