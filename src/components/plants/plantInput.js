import React from 'react';

const PlantInput = () => {
  return (
    <div>
      <form>
        <label htmlFor='plantInput'>filter input:</label>
        <input id='plantInput' name='plantInput' type="text" />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default PlantInput