import React from 'react';

const PlantCommentsList = (props) => {
  return (
    <div>
      <ul>
        {props.comments.map((comment) => <li key={comment.id}>{comment.contents}</li>)}
      </ul>
    </div>

  )
}

export default PlantCommentsList