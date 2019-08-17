import React, { Component } from 'react'
import { connect } from 'react-redux'
import GardenFilterInput from '../components/gardens/gardenFilterInput'
import GardensList from '../components/gardens/gardensList'
import { fetchGardens } from '../redux/actions/gardensActions'

class GardensContainer extends Component {
  state = {
    gardens: []
  }

  componentDidMount() {
    this.props.fetchGardens()
  }

  render() {
    return (
      <div>
        gardens container
        <GardenFilterInput />
        <GardensList gardens={this.props.gardens} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    gardens: state.gardens
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGardens: () => dispatch(fetchGardens())
})

export default connect(mapStateToProps, mapDispatchToProps)(GardensContainer)