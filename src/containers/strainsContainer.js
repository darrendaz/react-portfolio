import React, { Component } from 'react'
import StrainsList from '../components/strains/strainsList'
import { connect } from 'react-redux'
import { fetchStrains, setName, createStrain } from '../redux/actions/strainsActions'

class StrainsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.fetchStrains()
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

  handleStrainNameChange = (event) => {
    this.props.setName(event.target.value)
  }

  handleStrainNameSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.createStrain(this.props.name)
  }

  handleFilterChange = (event) => {
    event.preventDefault()
    this.setState({
      filter: event.target.value
    })
  }

  filterStrains = () => {
    const filteredStrains = this.props.strains.filter(strain => strain.name === this.state.filter)
    if (this.state.filter.length > 0) {
      return filteredStrains
    } else {
      return this.props.strains
    }
  }

  render() {
    return (
      <div>
        <label htmlFor='strainFilterInput'>Find by name: </label>
        <input
          id='strainFilterInput'
          name='filter'
          type="text"
          onChange={e => this.handleFilterChange(e)}
          value={this.state.filter} />
        <form onSubmit={this.handleStrainNameSubmit}>
          <label htmlFor='strainName'>Strain Name:</label>
          <input
            id='strainName'
            name='name'
            type="text"
            onChange={this.handleStrainNameChange}
            value={this.props.name} />
          <button type="submit">Create Strain</button>
        </form>
        <StrainsList strains={this.filterStrains()} />
      </div>
    )
  }
}

const mapStateToProps = ({ strains }) => (strains)

export default connect(mapStateToProps, { fetchStrains, setName, createStrain })(StrainsContainer)