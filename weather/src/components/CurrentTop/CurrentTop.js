import React from 'react';
import './index.css';

function CurrentTop({details}) {

    if (details.weather === undefined) { // Можно переписать условие с 11 строчки
        return null
    }

    function ucFirst(str) { // Если назвать эту функцию toUpperFirstLetter() Думаю будет понятнее
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    const cloudDescription = ucFirst(details.weather[0].description)
    const currentTemp = Math.round(details.temp) + '°'
    const currentTempIcon = 'http://openweathermap.org/img/wn/' + details.weather[0].icon + '@2x.png' // Название переменной обманывает. Это иконка погоды, а не температуры
    // Разметка плохо читается почитай про Prittier
    return (
        <div className = "currentTop">
        <span className="currentTop_city">Димитровград</span>
        {/* Зачем тут id="currentTop1" */}
        <div id="currentTop1">
        {/* <img src={currentTempIcon} /> */}
        <img src={currentTempIcon}></img> 
          <span className="currentTemp">{currentTemp}</span>
        </div>
        <span className='currentTop_description'>{cloudDescription}</span>
        </div>
    )
}

export default CurrentTop;