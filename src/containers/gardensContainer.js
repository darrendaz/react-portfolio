import React, { Component } from 'react'
import FilterInput from '../components/gardens/filterInput'
import GardensList from '../components/gardens/gardensList'

export default class
  GardensContainer extends Component {
  render() {
    return (
      <div>
        gardens container
        <FilterInput />
        <GardensList />
      </div>
    )
  }
}