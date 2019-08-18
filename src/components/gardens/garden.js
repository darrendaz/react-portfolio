import React from 'react';

const Garden = (props) => {
  return (
    <div>
      <p>name: {props.garden.name}</p>
      <p>id: {props.garden.id}</p>
      <p>Number of plants:{props.garden.plants.length}</p>
    </div>

  )
}

export default Garden