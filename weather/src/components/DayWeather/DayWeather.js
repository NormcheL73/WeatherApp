import React from 'react';
import './index.css';

function DayWeather({tempDay, tempNight, dt, icon, test}) {
  console.log(test)

  var myDate = new Date(dt * 1000)

  const correctIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`
  const toDay = `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`

  return (
  <div className="DayWeather">
    <span className='DayWeather_title'>{toDay}</span>
    <img src={correctIcon}></img>
    <div className='DayWeather_temp'>
      <span className='Day_temp'>{Math.round(tempDay)}°   </span>
      <span className='Night_temp'>{Math.round(tempNight)}°</span>
    </div> 
  </div>
  )
}

export default DayWeather;