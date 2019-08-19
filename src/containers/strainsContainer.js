import React, { Component } from 'react'
import { connect } from 'react-redux'
import StrainsList from '../components/strains/strainsList'
// // import StrainForm from '../components/strains/strainForm'
import { fetchStrains } from '../redux/actions/strainsActions'

class StrainsContainer extends Component {
  componentDidMount() {
    this.props.fetchStrains()
  }

  render() {
    return (
      <div>
        <StrainsList strains={this.props.strains} />
      </div>
    )
  }
}

const mapStateToProps = ({ strains }) => (strains)

export default connect(mapStateToProps, { fetchStrains })(StrainsContainer)