import React from 'react';
import './index.css';

function Details({details}) {

    const feelsLike = Math.round(details.feels_like) + '°'
    const humidity = details.humidity + '%'
    const visibility = (details.visibility / 1000) + ' км'
    const pressure =  ((details.pressure * 0.750064).toFixed(2)) + ' мм'
    const wind = Math.round(details.wind_speed) + ' м/с'

    let sunriseDate = new Date(details.sunrise * 1000)
    let sunDateRise = sunriseDate.getHours() + ':' + sunriseDate.getMinutes()

    let sunsetDate = new Date(details.sunset * 1000)
    let sunDateSet = sunsetDate.getHours() + ':' + sunsetDate.getMinutes()

    return (
        <div className = "details">
        <span className="details_Title">Подробности</span>
        <div className='details_Lines'>
            <span className='details_Line1'> </span>
            <span className='details_Line2'> </span>
        </div>
        <div className = "detailsUnderText">
          <div className ="feelsLike">
            <div id="feelsLikePart">
            <span className='feelsLikePart_title'>По ощущениям</span>
            <span className='feelsLikePart_info'>{feelsLike}</span>
            </div>
            <div id="feelsLikePart">
            <span className='feelsLikePart_title'>Влажность</span>
            <span className='feelsLikePart_info'>{humidity}</span>
            </div>
            <div id="feelsLikePart">
            <span className='feelsLikePart_title'>Видимость</span>
            <span className='feelsLikePart_info'>{visibility}</span>
            </div>
            <div id="feelsLikePart">
            <span className='feelsLikePart_title'>Давление</span>
            <span className='feelsLikePart_info'>{pressure}</span>
            </div>
            <div id="feelsLikePart">
            <span className='feelsLikePart_title'>Ветер</span>
            <span className='feelsLikePart_info'>{wind}</span>
            </div>
          </div>
          <div className="sunPosition">
            <div id="sunPositionPart">
            <span className='sunPosition_title'>Восход</span>
            <span className='sunPosition_info'>{sunDateRise}</span>
            </div>
            <div id="sunPositionPart">
            <span className='sunPosition_title'>Закат</span>
            <span className='sunPosition_info'>{sunDateSet}</span>
            </div>
          </div>
        </div>  
        </div>
    )
}

export default Details;

/*
{
    "dt": 1656604361,
    "sunrise": 1656547882,
    "sunset": 1656609514,
    "temp": 15.66,
    "feels_like": 15.08,
    "pressure": 1009,
    "humidity": 69,
    "dew_point": 10,
    "uvi": 0.15,
    "clouds": 63,
    "visibility": 10000,
    "wind_speed": 2.62,
    "wind_deg": 323,
    "wind_gust": 5.48,
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "облачно с прояснениями",
            "icon": "04d"
        }
    ]
} */