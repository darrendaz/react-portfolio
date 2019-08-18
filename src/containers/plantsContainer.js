import React, { Component } from 'react'
import PlantsList from '../components/plants/plantsList';
import PlantFilterInput from '../components/plants/plantFilterInput'
import { connect } from 'react-redux'
import { fetchPlants } from '../redux/actions/plantsActions'

class PlantsContainer extends Component {

  componentDidMount() {
    this.props.fetchPlants()
  }

  render() {
    return (
      <div>
        <PlantFilterInput />
        <PlantsList plants={this.props.plants} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state.plants)

export default connect(mapStateToProps, { fetchPlants })(PlantsContainer)