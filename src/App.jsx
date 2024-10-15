import { useState } from 'react'
import './App.css'

function App() {
  const [dog, setDog] = useState({});
  const [image,setImage] = useState('');
  const [name,setName] = useState("");
  const [isCliked,setIsCliked] = useState(false);

  //https://api.thedogapi.com/v1/images/search?api_key=live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN
  const url = 'https://api.thedogapi.com/v1/images/search'
  const apiKey = 'live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN'
  const callAPI = async () => {
    const response = await fetch(`${url}?limit=1&api_key=${apiKey}`);
    const json = await response.json();
    setImage(json[0].url);
    console.log(json[0].breeds)
    setName(json[0].breeds[0].name)
    setIsCliked(true)

  }


  return (

    <div>
      <div className="title-container">
        <h1>Learn some more about dogs</h1>
        <h2>Discover Dogs from your wildest dreams</h2>
        <p>{name}</p>
        {isCliked && <img src={image} alt='' />}
        <button onClick={callAPI} >Discover</button>
      </div>
      
      


    </div>


  )
}

export default App
