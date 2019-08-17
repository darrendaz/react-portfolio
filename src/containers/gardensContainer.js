import React, { Component } from 'react'
import GardenInput from '../components/gardens/gardenInput'
import GardensList from '../components/gardens/gardensList'

export default class
  GardensContainer extends Component {
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
        <GardenInput />
        <GardensList gardens={this.state.gardens} />
      </div>
    )
  }
}