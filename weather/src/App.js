import './App.css';
import { useEffect, useState } from 'react';


const lat = '54.217515'
const lon = '49.623924'

const API_key = 'ab4d7fea3cfeb4f9f1800dbc62c831ec'

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${API_key}&units=metric`
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru&units=metric`


function App() {

  const [cloudDescription, setcloudDescription] = useState('Пусто')
  const [currentTemp, setcurrentTemp] = useState('-')
  const [currentTempIcon, setcurrentTempIcon] = useState('|')

  let date = new Date()

  let dateNow = date.getDay()
  let date3 = ''
  let date4 = ''
  let date5 = ''
  let date6 = ''
  let date7 = ''
  switch (dateNow) {
    case 0:
       date3 = 'Вт'
       date4 = 'Ср'
       date5 = 'Чт'
       date6 = 'Пт'
       date7 = 'Сб'
       dateNow = 'Вс'
       break;
    case 1:
       date3 = 'Ср'
       date4 = 'Чт'
       date5 = 'Пт'
       date6 = 'Сб'
       date7 = 'Вс'
       dateNow = 'Пн'
       break;
    case 2:
       date3 = 'Чт'
       date4 = 'Пт'
       date5 = 'Сб'
       date6 = 'Вс'
       date7 = 'Пн'
       dateNow = 'Вт'
       break;
    case 3:
       date3 = 'Пт'
       date4 = 'Сб'
       date5 = 'Вс'
       date6 = 'Пн'
       date7 = 'Вт'
       dateNow = 'Ср'
       break;
    case 4:
       date3 = 'Сб'
       date4 = 'Вс'
       date5 = 'Пн'
       date6 = 'Вт'
       date7 = 'Ср'
       dateNow = 'Чт'
       break;
    case 5:
       date3 = 'Вс'
       date4 = 'Пн'
       date5 = 'Вт'
       date6 = 'Ср'
       date7 = 'Чт'
       dateNow = 'Пт'
       break;
    case 6:
       date3 = 'Пн'
       date4 = 'Вт'
       date5 = 'Ср'
       date6 = 'Чт'
       date7 = 'Пт'
       dateNow = 'Сб'
       break;   
  }


  //console.log(dateNow+1)

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
      Димитровград
      <div id="currentTop1">
        <img src={currentTempIcon}></img>
        {currentTemp}
      </div>
      {cloudDescription}
    </div>
    <div className = "daily">
      По дням
      <div className = "days">
        <div id="day">
        Сегодня
        <img src={currentTempIcon}></img>
        {currentTemp}
        </div>
        <div id="day">

        </div>
        <div id="day">

        </div>
        <div id="day">

        </div>
        <div id="day">

        </div>
        <div id="day">

        </div>
        <div id="day">

        </div>
      </div>
    </div>
    <div className = "details">
      Подробности
      <div className = "detailsUnderText">
        <div className ="feelsLike">
          <div id="feelsLikePart">
          
          </div>
          <div id="feelsLikePart">

          </div>
          <div  id="feelsLikePart">

          </div>
          <div id="feelsLikePart">

          </div>
          <div id="feelsLikePart">

          </div>

        </div>
        <div className="sunPosition">
          <div id="sunPositionPart">

          </div>
          <div id="sunPositionPart">

          </div>

        </div>
      </div>  
    </div>
  </div>
  );
}

export default App;
