import React, { Component } from 'react'
import { connect } from 'react-redux'
import StrainsList from '../components/strains/strainsList'
import { fetchStrains, setName, createStrain } from '../redux/actions/strainsActions'

class StrainsContainer extends Component {
  componentDidMount() {
    this.props.fetchStrains()
  }

  handleStrainNameChange = (event) => {
    this.props.setName(event.target.value)
  }

  handleStrainNameSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.createStrain(this.props.name)
  }

  render() {
    return (
      <div>
        <div>
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
        </div>
        <StrainsList strains={this.props.strains} />
      </div>
    )
  }
}

const mapStateToProps = ({ strains }) => (strains)

export default connect(mapStateToProps, { fetchStrains, setName, createStrain })(StrainsContainer)