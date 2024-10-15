import { useState } from 'react'
import './App.css'
import DogCard from './components/DogCard';

function App() {
  const [image,setImage] = useState('');
  const [name,setName] = useState("");
  const [lifeSpan,setLifeSpan] = useState("");
  const [bredFor,setBredFor] = useState("");
  const [isCliked,setIsCliked] = useState(false);
  const [banned,setBanned] =  useState([]);

  //https://api.thedogapi.com/v1/images/search?api_key=live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN
  const url = 'https://api.thedogapi.com/v1/images/search'
  const apiKey = 'live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN'
  const callAPI = async () => {
    const excluded = banned.length ? `&exclude=${excluded.join(',')}` : '';
    const response = await fetch(`${url}?limit=1${excluded}&api_key=${apiKey}`);
    const json = await response.json();
    setImage(json[0].url);
    console.log(json[0].breeds)
    setName(json[0].breeds[0].name)
    setLifeSpan(json[0].breeds[0].life_span);
    setBredFor(json[0].breeds[0].bred_for);
    setIsCliked(true)

  }

  

  const handleNameClick = () => {
    setBanned([...banned,name])

  }

  const handlLifeSpanClick = () => {

  }
  const handleBredForClick = () => {

  }
  const removeFromBannedlist = () => {
    
  }



  const isBannedEmpty = banned.length == 0;
  const bannedList = banned.map((item, index) => (
    <button>{item}</button>
  ));
  return (

    <div className='container'>
      <div className="card-container">
        <h1>Learn some more about dogs</h1>
        <h2>Discover Dogs from your wildest dreams</h2>
        {isCliked && 
        <DogCard
         picture={image}
         breedName={name}
         ls={lifeSpan} 
         bf={bredFor}
         onNameClick={handleNameClick} 

         />
          }
        <button onClick={callAPI} >Discover</button>
  
      </div>
      <div className='ban-list-container'>
        <h2>Banned List</h2>
        <p>Select your list of banned attributes</p>
          {!isBannedEmpty && bannedList}
      </div>
    
    </div>


  )
}

export default App
