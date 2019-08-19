import React from 'react';

const PlantComments = (props) => {
  return (
    <div>
      <ul>
        {props.comments.map(comment => <li>{comment.contents}</li>)}
      </ul>
    </div>

  )
}

export default PlantComments