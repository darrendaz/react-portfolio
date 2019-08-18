import React, { Component } from 'react'
import PlantsList from '../components/plants/plantsList';
import PlantFilterInput from '../components/plants/plantFilterInput'
import { connect } from 'react-redux'

class PlantsContainer extends Component {
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
        <PlantFilterInput />
        <PlantsList plants={this.state.plants} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state.plants)

const mapDispatchToProps = () => {

}


export default connect(mapStateToProps)(PlantsContainer)