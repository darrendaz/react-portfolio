import React, { Component } from 'react'

export default class PlantsList extends Component {
  listHTML = () => {
    return this.props.plants.map((plant, index) => <li key={index}>Name: {plant.name}</li>)
  }

  render() {
    return (
      <div>
        {this.listHTML()}
      </div>
    )
  }
}