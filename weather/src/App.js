import './App.css';
import { useEffect, useState } from 'react';
import DailyWeather from './components/DailyWeather/DailyWeather';
import Details from './components/Details/Details';
import CurrentTop from './components/CurrentTop/CurrentTop';


const lat = '54.217515'
const lon = '49.623924'

const API_key = 'ab4d7fea3cfeb4f9f1800dbc62c831ec'

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru&units=metric`


function App(props) {

  const [dailyWeather, setdailyWeather] = useState([])
  const [details, setdetails] = useState('Пусто')

  useEffect(() => {

    const fetchData = async () => { 
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        
        setdailyWeather(json.daily)
        setdetails(json.current)
      }
      else {
        console.error('Не получилось')
      }
    }
    fetchData()
    
  }, []) 


  
  return (
  <div className="App">
    <CurrentTop details={details} />
    <DailyWeather dailyWeather={dailyWeather}/>
    <Details details={details}/>
  </div>
  )
}

export default App;
