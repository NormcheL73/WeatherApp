import React from 'react';
import DayWeather from '../DayWeather/DayWeather';
import './index.css';

function DailyWeather({dailyWeather}) {
  
    
    if (!dailyWeather.length) {
        return null
    }

    return (
      <div className="DailyWeather">
        <span className='DailyWeather_title'>По дням</span>
        <div className='DayWeatherList'>
            {dailyWeather.map((day) => {
                return <DayWeather 
                            key={day.dt} 
                            tempDay={day.temp.day} 
                            tempNight={day.temp.night} 
                            dt={day.dt}
                            icon={day.weather[0].icon} />
            })}
        </div>
      </div>
    )
}

export default DailyWeather;