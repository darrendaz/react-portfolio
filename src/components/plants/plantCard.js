import React from 'react';
import PlantCommentsList from './plantComments'

const PlantCard = (props) => {
  return (
    <div>
      <hr />
      <p>{props.plant.name}</p>
      <p>{props.plant.id}</p>
      <p>{props.plant.species}</p>
      <p>{props.plant.strain}</p>
      <PlantCommentsList comments={props.plant.comments} />
      <hr />
    </div>
  )
}

export default PlantCard