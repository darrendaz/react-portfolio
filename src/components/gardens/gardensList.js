import React from 'react'
import GardenCard from './gardenCard'

const GardensList = (props) => {
  return props.gardens.map((garden, index) => {
    return (
      <GardenCard key={index} garden={garden} />
    )
  })
}

export default GardensList
