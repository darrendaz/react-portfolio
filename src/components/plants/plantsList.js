import React, { Component } from 'react'

class PlantsList extends Component {
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

export default PlantsList