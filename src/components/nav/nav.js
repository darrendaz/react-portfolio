import React from 'react'
import GardensContainer from "../../containers/gardensContainer";
import PlantsContainer from "../../containers/plantsContainer";
import StrainsContainer from '../../containers/strainsContainer'
import Home from '../home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Router>
        <div className="nav-container">
          <nav>
            <Link to="/" >Home</Link>
            <Link to="/gardens">Gardens</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/strains">Create a Strain</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/gardens" component={GardensContainer} />
          <Route exact path="/plants" component={PlantsContainer} />
          <Route exact path="/strains" component={StrainsContainer} />
        </div>
      </Router>
    </div>
  )
}
