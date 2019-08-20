import React from 'react';
import PlantCommentsList from './plantComments'

const PlantCard = (props) => {
  return (
    <div>
      <hr />
      <h1>name: {props.plant.name}</h1>
      <p>id: {props.plant.id}</p>
      <p>species: {props.plant.species}</p>
      <p>strain: {props.plant.strain}</p>
      <h4>Comments:</h4>
      <PlantCommentsList comments={props.plant.comments} />
      <hr />
    </div>
  )
}

export default PlantCard