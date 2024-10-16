import React from 'react'

const DogCard = ({picture,breedName,ls,bf,onNameClick,onLifeSpanClick,oneBreedClick}) => {
  return (
    <div className='dog-card-container'>
        <div className='attr-container'>
            <button onClick={onNameClick}>{breedName}</button>
            <button onClick={onLifeSpanClick}>{ls}</button>
            <button onClick={oneBreedClick}>{bf}</button>
      </div>
      <img src={picture} alt="" />
    </div>
  )
}

export default DogCard
