import './App.css';
import { useEffect, useState } from 'react';


const lat = '54.217515'
const lon = '49.623924'

const API_key = 'ab4d7fea3cfeb4f9f1800dbc62c831ec'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${API_key}&units=metric`


function App() {

  const [cloudDescription, setcloudDescription] = useState('Пусто')


  useEffect(() => {

    const fetchData = async () => { 
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        console.log("всё норм", json)
        setcloudDescription(json.weather[0].description)
      }
      else {
        console.error('не получилось')
      }
    }
    fetchData()

  }, [])
  
  return (
  <div className="App">
   <h1>test</h1>
    {cloudDescription}
  </div>
  );
}

export default App;
