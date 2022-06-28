import React from 'react';
import DayWeather from '../DayWeather/DayWeather';
import './index.css';

function DailyWeather({dailyWeather}) {
    const firstDay = dailyWeather[0]
    if (firstDay === undefined) {
        return null
    }

    return (
      <div className="DailyWeather">
        <h2 className='DailyWeather_title'>По дням</h2>
        <div className='DayWeatherList'>
            {dailyWeather.map((day) => {
                return <DayWeather 
                            key={day.dt} 
                            tempDay={day.temp.day} 
                            tempNight={day.temp.night} 
                            dt={day.dt}
                            icon={day.weather[0].icon}
                            test={day.weather} />
            })}
        </div>
      </div>
    )
}

export default DailyWeather;

/*{
    "dt": 1656403200, // Дата
    "temp": {
        "day": 16.99,
        "night": 9.05,
    },
    "weather": [
        {
            "icon": "01d"
        }
    ],
    daily[0].weather[0].icon
    <img src={currentTempIcon}></img>
    'http://openweathermap.org/img/wn/' + json.current.weather[0].icon + '@2x.png'
} */