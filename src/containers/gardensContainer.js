import React, { Component } from 'react'
import { connect } from 'react-redux'
import GardenFilterInput from '../components/gardens/gardenFilterInput'
import GardensList from '../components/gardens/gardensList'
import { fetchGardens } from '../redux/actions/gardensActions'

class GardensContainer extends Component {
  componentDidMount() {
    this.props.fetchGardens()
  }

  render() {
    return (
      <div className="gardensContainer">
        <GardenFilterInput />
        <GardensList gardens={this.props.gardens} />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state.gardens)


export default connect(mapStateToProps, { fetchGardens })(GardensContainer)