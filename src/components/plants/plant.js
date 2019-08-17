import React from 'react';

const Plant = (props) => {
  return (
    <div>
      <p>{props.plant.name}</p>
      <p>{props.plant.id}</p>
      <p>{props.plant.species}</p>
      <p>{props.plant.strain}</p>
    </div>

  )
}

export default Plant