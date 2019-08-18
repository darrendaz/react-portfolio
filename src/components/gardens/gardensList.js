import React, { Component } from 'react'
import Garden from '../gardens/garden'

class GardensList extends Component {
  render() {
    return (
      this.props.gardens.map((garden, index) => {
        return (
          <Garden key={index} garden={garden} />
        )
      })
    )
  }
}

export default GardensList
