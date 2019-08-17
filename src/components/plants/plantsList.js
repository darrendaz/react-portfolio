import React, { Component } from 'react'

export default class PlantsList extends Component {
  render() {
    return (
      <div>
        {[1, 2, 3, 4, 5].map(number => <li>{number}</li>)}
      </div>
    )
  }
}