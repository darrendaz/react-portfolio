import React, { Component } from 'react'
import Plant from './plant'

class PlantsList extends Component {
  plantList = () => {
    return this.props.plants.map((plant, index) => {
      return (
        <Plant
          key={index}
          plant={plant} />
      )
    })
  }

  render() {
    return (
      <div>
        {this.plantList()}
      </div>
    )
  }
}

export default PlantsList