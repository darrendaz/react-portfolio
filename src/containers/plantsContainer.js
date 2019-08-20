import React, { Component } from 'react'
import PlantsList from '../components/plants/plantsList';
import { connect } from 'react-redux'
import { fetchPlants } from '../redux/actions/plantsActions'

class PlantsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.fetchPlants()
  }

  handleFilterChange = (event) => {
    event.preventDefault()
    this.setState({
      filter: event.target.value
    })
  }

  filterPlants = () => {
    const filteredPlants = this.props.plants.filter(plant => plant.name === this.state.filter)
    if (this.state.filter.length > 0) {
      return filteredPlants
    } else {
      return this.props.plants
    }
  }

  render() {
    return (
      <div className="plantsContainer">
        <label htmlFor='plantsFilterInput'>Find by name: </label>
        <input
          id='plantFilterInput'
          name='filter'
          type="text"
          onChange={e => this.handleFilterChange(e)}
          value={this.state.filter} />
        <PlantsList plants={this.filterPlants()} />
      </div>
    )
  }
}

const mapStateToProps = ({ plants }) => (plants)

export default connect(mapStateToProps, { fetchPlants })(PlantsContainer)