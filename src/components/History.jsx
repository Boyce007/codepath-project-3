import React from 'react'

const History = ({picture,dogName}) => {
  return (
      <span>
        <p>{dogName}</p>
        <img src={picture} alt="" className='history-dog-image' />
      </span>
    
  )
}

export default History
