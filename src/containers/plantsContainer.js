import React, { Component } from 'react'
import PlantsList from '../components/plants/plantsList';
import FilterInput from '../components/gardens/filterInput'

export default class
  PlantsContainer extends Component {
  render() {
    return (
      <div>
        plants container
        <FilterInput />
        <PlantsList />
      </div>
    )
  }
}



