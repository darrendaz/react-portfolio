import React from 'react';

class PlantFilterInput extends React.Component {
  state = {
    text: ""
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (
      <div>
        <form>
          <label htmlFor='plantFilterInput'>filter input:</label>
          <input id='plantFilterInput' name='text' type="text" onChange={this.handleOnChange} value={this.state.filter} />
          <button type="submit">Filter</button>
        </form>
      </div>
    );
  }
}

export default PlantFilterInput