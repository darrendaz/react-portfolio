import React, { Component } from 'react'
import GardensList from '../components/gardens/gardensList'
import { connect } from 'react-redux'
import { fetchGardens } from '../redux/actions/gardensActions'

class GardensContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.fetchGardens()
  }


  handleFilterChange = (event) => {
    event.preventDefault()
    this.setState({
      filter: event.target.value
    })
  }

  filterGardens = () => {
    const filteredGardens = this.props.gardens.filter(garden => garden.name === this.state.filter)
    if (this.state.filter.length > 0) {
      return filteredGardens
    } else {
      return this.props.gardens
    }
  }

  render() {
    return (
      <div className="gardensContainer">
        <label htmlFor='gardenFilterInput'>Find by name: </label>
        <input
          id='gardenFilterInput'
          name='filter'
          type="text"
          onChange={e => this.handleFilterChange(e)}
          value={this.state.filter} />
        <GardensList gardens={this.filterGardens()} />
      </div>
    )
  }
}

const mapStateToProps = ({ gardens }) => (gardens)


export default connect(mapStateToProps, { fetchGardens })(GardensContainer)