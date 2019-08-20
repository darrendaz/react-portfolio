import React from 'react';

const GardenCard = (props) => {
  return (
    <div>
      <hr />
      <p>name: {props.garden.name}</p>
      <p>id: {props.garden.id}</p>
      <p>Number of plants:{props.garden.plants.length}</p>
      <hr />
    </div>

  )
}

export default GardenCard