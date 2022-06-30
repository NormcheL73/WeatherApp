import './App.css';
import { useEffect, useState } from 'react';
import DailyWeather from './components/DailyWeather/DailyWeather';
import Details from './components/Details/Details';


const lat = '54.217515'
const lon = '49.623924'

const API_key = 'ab4d7fea3cfeb4f9f1800dbc62c831ec'

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru&units=metric`


function App(props) {

  const [cloudDescription, setcloudDescription] = useState('Пусто')
  const [currentTemp, setcurrentTemp] = useState('-')
  const [currentTempIcon, setcurrentTempIcon] = useState('|')

  const [dailyWeather, setdailyWeather] = useState([])
  const [details, setdetails] = useState('Пусто')


  function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }


  useEffect(() => {

    const fetchData = async () => { 
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        setcloudDescription(ucFirst(json.current.weather[0].description))
        setcurrentTemp(Math.round(json.current.temp) + '°')
        setcurrentTempIcon('http://openweathermap.org/img/wn/' + json.current.weather[0].icon + '@2x.png')
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
    <div className = "currentTop">
      <span className="currentTop_city">Димитровград</span>
      <div id="currentTop1">
        <img src={currentTempIcon}></img>
        <span className="currentTemp">{currentTemp}</span>
      </div>
      <span className='currentTop_description'>{cloudDescription}</span>
    </div>
    <DailyWeather dailyWeather={dailyWeather}/>
    <Details details={details}/>
    {/*<div className = "details">
      <span className="details_Title">Подробности</span>
      <div className = "detailsUnderText">
        <div className ="feelsLike">
          <div id="feelsLikePart">
          По ощущениям
          </div>
          <div id="feelsLikePart">
          Влажность
          </div>
          <div  id="feelsLikePart">
          Видимость
          </div>
          <div id="feelsLikePart">
          Давление
          </div>
          <div id="feelsLikePart">
          Ветер
          </div>

        </div>
        <div className="sunPosition">
          <div id="sunPositionPart">
          Восход
          </div>
          <div id="sunPositionPart">
          Закат
          </div>

        </div>
      </div>  
  </div> */}
  </div>
  )
}

export default App;
