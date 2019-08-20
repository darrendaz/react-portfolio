import React from 'react'
import Garden from '../gardens/garden'

const GardensList = (props) => {
  return props.gardens.map((garden, index) => {
    return (
      <Garden key={index} garden={garden} />
    )
  })
}

export default GardensList
