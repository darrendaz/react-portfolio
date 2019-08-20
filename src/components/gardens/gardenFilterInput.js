import React from 'react';

class GardenFilterInput extends React.Component {
  state = {
    filter: ""
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = () => {

  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='gardenFilterInput'>filter input:</label>
          <input
            id='gardenFilterInput'
            name='filter'
            type="text"
            onChange={this.handleOnChange}
            value={this.state.filter} />
          <button type="submit">Filter</button>
        </form>
      </div >
    );
  }
}

export default GardenFilterInput