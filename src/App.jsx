import { useState } from 'react'
import './App.css'

function App() {
  const [dog, setDog] = useState({});
  const [image,setImage] = useState('');
  //https://api.thedogapi.com/v1/images/search?api_key=live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN
  const url = 'https://api.thedogapi.com/v1/images/search'
  const apiKey = 'live_WIrZPhSJxXptX7hl4rxPNpqRV7shUKcnZhrJoxk4IbazhNaxQjdgDwHGYmS05eJN'
  const callAPI = async () => {
    const response = await fetch(`${url}?api_key=${apiKey}`);
    const json = await response.json();
    setImage(json[0].url)
  }


  return (
    <div>
      <div className="title-container">
        <h1>Learn some more about dogs</h1>
        <h2>Discover Dogs from your wildest dreams</h2>
      </div>
      <button onClick={callAPI} >Discover</button>
    </div>


  )
}

export default App
