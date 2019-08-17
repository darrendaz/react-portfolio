import React from 'react';

const GardenInput = () => {
  return (
    <div>
      <form>
        <label htmlFor='gardenInput'>filter input:</label>
        <input id='gardenInput' name='text' type="text" />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default GardenInput