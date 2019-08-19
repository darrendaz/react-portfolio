import React, { Component } from 'react'

class StrainsList extends Component {
  plantList = () => {
    return this.props.strains.map((strain) => {
      return (
        <p>{strain.name}</p>
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

export default StrainsList