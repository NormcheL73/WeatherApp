import React from 'react';
import './index.css';
import { ReactComponent as SunriseSvg } from './sunrise.svg';
import { ReactComponent as SunsetSvg } from './sunset.svg';
import { ReactComponent as WindSvg } from './wind.svg';

function Details({details}) {

    const feelsLike = Math.round(details.feels_like) + '°'
    const humidity = details.humidity + '%'
    const visibility = (details.visibility / 1000) + ' км'
    const pressure =  ((details.pressure * 0.750064).toFixed(2)) + ' мм'
    const wind = ' ' + Math.round(details.wind_speed) + ' м/с'

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
            <span className='feelsLikePart_info'><WindSvg />{wind}</span>
            </div>
          </div>
          <div className="sunPosition">
            <div id="sunPositionPart">
            <span className='sunPosition_title'>Восход</span>
            <div className='sunPosition_info'>
              <SunriseSvg />
              <span className='sunPosition_time'>{sunDateRise}</span>
            </div>
            </div>
            <div id="sunPositionPart">
            <span className='sunPosition_title'>Закат</span>
            <div className='sunPosition_info'>
              <SunsetSvg />
              <span className='sunPosition_time'>{sunDateSet}</span>
            </div>
            </div>
          </div>
        </div>  
        </div>
    )
}

export default Details;