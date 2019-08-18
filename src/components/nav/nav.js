import React, { Component } from 'react'
import GardensContainer from "../../containers/gardensContainer";
import PlantsContainer from "../../containers/plantsContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../home'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/gardens">Gardens</Link>
              <Link to="/plants">Plants</Link>
              <Route exact path="/" component={Home} />
              <Route exact path="/gardens" component={GardensContainer} />
              <Route exact path="/plants" component={PlantsContainer} />
            </nav>
          </div>
        </Router>
      </div>
    )
  }
}
