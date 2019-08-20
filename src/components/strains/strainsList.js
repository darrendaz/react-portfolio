import React from 'react'
import Strain from './strain'

const StrainsList = (props) => {
  return props.strains.map((strain, index) => {
    return (
      <Strain key={index} strain={strain} />
    )
  })
}

export default StrainsList