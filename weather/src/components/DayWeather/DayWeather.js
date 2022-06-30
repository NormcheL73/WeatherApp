import React from 'react';
import './index.css';

function DayWeather({tempDay, tempNight, dt, icon}) {

  let myDate = new Date(dt * 1000)
  let checkDate = new Date()
  let toDay = `${myDate.getDate()}.${myDate.getMonth() + 1}.${myDate.getFullYear()}`
  let dayName = myDate.getDay()

  const correctIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

  switch (dayName) {
    case 0:
      dayName = 'Вс'
      break;
    case 1:
      dayName = 'Пн'
      break;
    case 2:
      dayName = 'Вт'
      break;
    case 3:
      dayName = 'Ср'
      break;
    case 4:
      dayName = 'Чт'
      break;
    case 5:
      dayName = 'Пт'
      break;
    case 6:
      dayName = 'Сб'
      break;   
  }


  if (checkDate.getDate() == myDate.getDate()) {
    toDay = 'Сегодня'
  }

  if ((checkDate.getDate() + 1 == myDate.getDate()) || 
      (checkDate.getDate() == 30 && (checkDate.getMonth()+1) % 2 == 0 && myDate.getDate() == 1) ||
      (checkDate.getDate() == 31 && myDate.getDate() == 1)) {
    toDay = 'Завтра'
  }

  return (
  <div className="DayWeather">
    <div className='DayWeather_TopInfo'>
      <span className='DayWeather_title'>{toDay}</span>
      <span className='DayWeather_dayName'>{dayName}</span>
    </div>
    <img src={correctIcon}></img>
    <div className='DayWeather_temp'>
      <span className='Day_temp'>{Math.round(tempDay)}°</span>
      <span className='Night_temp'>{Math.round(tempNight)}°</span>
    </div> 
  </div>
  )
}

export default DayWeather;