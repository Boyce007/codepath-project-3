import React from 'react'

const DogCard = ({picture,name,ls,bf}) => {
  return (
    <div className='dog-card-container'>
        <div className='attr-container'>
            <button>{name}</button>
            <button>{ls}</button>
            <button>{bf}</button>
      </div>
      <img src={picture} alt="" />
    </div>
  )
}

export default DogCard
