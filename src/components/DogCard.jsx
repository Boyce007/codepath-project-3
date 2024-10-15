import React from 'react'

const DogCard = ({picture,breedName,ls,bf,onNameClick}) => {
  return (
    <div className='dog-card-container'>
        <div className='attr-container'>
            <button onClick={onNameClick}>{breedName}</button>
            <button>{ls}</button>
            <button>{bf}</button>
      </div>
      <img src={picture} alt="" />
    </div>
  )
}

export default DogCard
