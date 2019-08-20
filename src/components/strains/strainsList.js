import React from 'react'

const StrainsList = (props) => {
  return props.strains.map((strain, index) => {
    return (
      <p key={index}>{strain.name}</p>
    )
  })
}

export default StrainsList