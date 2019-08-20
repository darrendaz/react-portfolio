import React from 'react'
import Plant from './plantCard'

const PlantsList = (props) => {
  return props.plants.map((plant, index) => {
    return (
      <Plant
        key={index}
        plant={plant} />
    )
  })
}

export default PlantsList