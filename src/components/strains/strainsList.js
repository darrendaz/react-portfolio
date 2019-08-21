import React from 'react'
import Strain from './strain'

const StrainsList = (props) => {
  return props.strains.map((strain) => {
    return (
      <Strain key={strain.id} strain={strain} likes={strain.likes} />
    )
  })
}

export default StrainsList