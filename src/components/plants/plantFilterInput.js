import React from 'react';

class PlantFilterInput extends React.Component {
  state = {
    filter: ""
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.setState({
      filter: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='plantFilterInput'>filter input:</label>
          <input id='plantFilterInput' name='filter' type="text" onChange={this.handleOnChange} value={this.state.filter} />
          <button type="submit">Filter</button>
        </form>
      </div>
    );
  }
}

export default PlantFilterInput