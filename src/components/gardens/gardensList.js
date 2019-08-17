import React, { Component } from 'react'

export default class GardensList extends Component {

  listHTML = (props) => {
    return (
      props.gardens.map((garden, index) => <p key={index}>Name: {garden.name}</p>)
    )
  }

  render() {
    return (
      <div>
        {this.listHTML}
      </div>
    )
  }
}
