import React, { Component } from 'react'

export default class GardensList extends Component {
  listHTML = () => {
    return this.props.gardens.map((garden, index) => <li key={index}>Name: {garden.name}</li>)
  }

  render() {
    return (
      <div>
        {this.listHTML()}
      </div>
    )
  }
}
