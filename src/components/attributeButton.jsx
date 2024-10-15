import React from 'react'

const attributeButton = ({attr,handleAttrClick}) => {
  return (
    <button onClick={handleAttrClick}>{attr}</button>
  )
}

export default attributeButton
