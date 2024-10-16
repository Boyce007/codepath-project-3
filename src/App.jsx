import { useState,use } from 'react'
import './App.css'
import DogCard from './components/DogCard';
import History from './components/History';

function App() {
  const [image,setImage] = useState('');
  const [name,setName] = useState("");
  const [lifeSpan,setLifeSpan] = useState("");
  const [bredFor,setBredFor] = useState("");
  const [isCliked,setIsCliked] = useState(false);
  const [banned,setBanned] =  useState([]);
  const [previouslyShown,setPreviouslyShown] = useState([
    {
      dogImage:"",
      dogBreed:""
    
    }
  ])

  //https://api.thedogapi.com/v1/images/search?api_key=live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN
  const url = 'https://api.thedogapi.com/v1/images/search'
  const apiKey = 'live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN'
  const urlWKey = `${url}?limit=1&api_key=${apiKey}`
 
  const callAPI = async () => {
    const response = await fetch(urlWKey);
    const json = await response.json();
    setImage(json[0].url);
    console.log(json[0].breeds)
    setName(json[0].breeds[0].name)
    setLifeSpan(json[0].breeds[0].life_span);
    setBredFor(json[0].breeds[0].bred_for);
    setIsCliked(true)
    setPreviouslyShown([...previouslyShown,{dogImage:image,dogBreed:name}]);
    console.log(previouslyShown);
    console.log(name)

  }

  

  const handleClick = (attr) => {
    setBanned([...banned,attr])

  }

  const handleRemoveFromBanned = (attrToRemove) => {
    setBanned(banned.filter(attr =>attr != attrToRemove));
  }
  


  const isBannedEmpty = banned.length == 0;
  const bannedList = banned.map((item, index) => (
    <button onClick={()=>handleRemoveFromBanned(item)} key={index}>{item}</button>
  ));
  const historyComponentList = previouslyShown.map((item,index) => (
    
    <History picture={item.dogImage} dogName={item.dogBreed}/>
  ))
  return (

    <div className='container'>
      <div>
        <p>What have we seen so Far</p>
        { previouslyShown.length > 0 ? historyComponentList:null}
        </div>
      <div className="card-container">
        <h1>Learn some more about dogs</h1>
        <h2>Discover Dogs from your wildest dreams</h2>
        

        {isCliked && 
        <DogCard
         picture={image}
         breedName={name}
         ls={lifeSpan} 
         bf={bredFor}
         onNameClick={()=>handleClick(name)}
         onLifeSpanClick= {()=>handleClick(lifeSpan)}
         oneBreedClick = {()=>handleClick(bredFor)}

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
