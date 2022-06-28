import React from 'react';
import './index.css';

function DayWeather({tempDay, tempNight, dt, icon}) {
  console.log(1)

  let myDate = new Date(dt * 1000)
  let checkDate = new Date()
  let toDay = `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`


  const correctIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`


  if (checkDate.getDate() == myDate.getDate()) {
    toDay = 'Сегодня'
  }

  if ((checkDate.getDate() + 1 == myDate.getDate()) || 
      (checkDate.getDate() == 30 && checkDate.getDate() + 1 == 1 && myDate.getDate() == 1) ||
      (checkDate.getDate() == 31 && myDate.getDate() == 1)) {
    toDay = 'Завтра'
  }

  return (
  <div className="DayWeather">
    <span className='DayWeather_title'>{toDay}</span>
    <img src={correctIcon}></img>
    <div className='DayWeather_temp'>
      <span className='Day_temp'>{Math.round(tempDay)}°</span>
      <span className='Night_temp'>{Math.round(tempNight)}°</span>
    </div> 
  </div>
  )
}

export default DayWeather;