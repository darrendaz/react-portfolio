import React, { Component } from 'react'
import GardenFilterInput from '../components/gardens/gardenFilterInput'
import GardensList from '../components/gardens/gardensList'

class GardensContainer extends Component {
  state = {
    gardens: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/gardens")
      .then(res => res.json())
      .then(gardens => this.setState({ gardens }))
  }
  render() {
    return (
      <div>
        gardens container
        <GardenFilterInput />
        <GardensList gardens={this.state.gardens} />
      </div>
    )
  }
}

export default GardensContainer