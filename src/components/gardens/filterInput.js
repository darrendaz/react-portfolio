import React from 'react';

const FilterInput = () => {
  return (
    <div>
      <form>
        <label htmlFor='filterInput'>filter input:</label>
        <input id='filterInput' name='filterInput' type="text" />
        <button type="submit">Filter</button>
      </form>
    </div>
  );
}

export default FilterInput