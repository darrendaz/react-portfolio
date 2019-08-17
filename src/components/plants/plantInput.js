import React from 'react';

class PlantInput extends React.Component {
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
          <label htmlFor='plantInput'>filter input:</label>
          <input id='plantInput' name='text' type="text" onChange={this.handleOnChange} value={this.state.text} />
          <button type="submit">Filter</button>
        </form>
      </div>
    );
  }
}

export default PlantInput