import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementStrainLikes } from '../../redux/actions/strainsActions'

class Strain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: props.likes
    }
  }

  handleIncrementLikes = (event) => {
    event.preventDefault()
    this.props.incrementStrainLikes(this.props.strain)
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div key={this.props.id}>
        <p>
          {this.props.strain.name}
          <button
            onClick={this.handleIncrementLikes} value={this.props.likes}>
            {this.state.likes}
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (strain) => (strain)

export default connect(mapStateToProps, { incrementStrainLikes })(Strain)