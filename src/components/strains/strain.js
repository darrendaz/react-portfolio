import React, { Component } from 'react'

export default class strain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  handleIncrementLikes = (event) => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.strain.name} <button onClick={this.handleIncrementLikes} value={this.state.count}>{this.state.count}</button></p>
      </div>
    )
  }
}
