import React, { Component } from 'react'
import PlantsList from '../components/plants/plantsList';
import FilterInput from '../components/gardens/filterInput'
import { connect } from 'react-redux'

class
  PlantsContainer extends Component {
  state = {
    plants: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/plants")
      .then(res => res.json())
      .then(plants => this.setState({ plants }))
  }

  render() {
    return (
      <div>
        plants container
        <FilterInput />
        <PlantsList plants={this.state.plants} />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {

// }



export default connect(null)(PlantsContainer)