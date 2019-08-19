import React from 'react';
import PlantComments from './plantComments'

const Plant = (props) => {
  return (
    <div>
      <hr />
      <p>{props.plant.name}</p>
      <p>{props.plant.id}</p>
      <p>{props.plant.species}</p>
      <p>{props.plant.strain}</p>
      <PlantComments comments={props.plant.comments} />
      <hr />
    </div>

  )
}

export default Plant