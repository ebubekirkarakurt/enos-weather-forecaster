import React from 'react'
import '../../../styles/weather.details.styles.css'

type Props = {
    data: any
}

export default function WeatherDetails({data}: Props) {


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',   
      year: 'numeric',
      month: 'long',     
      day: 'numeric'    
    };
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.toLocaleDateString('en-US', { day: 'numeric' });

    return `${month} ${day}, ${dayOfWeek}`;
  };

  const iconSrc = data.data[0].weather.icon
    ? require(`../../../assets/icons/${data.data[0]?.weather.icon}.png`) 
    : '';

  return (
    <div className='main' >
        <h2 id='temp-txt' >{data.data[0].temp} °C</h2>
        <p id='cityname-txt' >{data.city_name}</p>
        <p id='datetime-txt' >{formatDate(data.data[0].datetime)}</p>
        <div className='label' >
            <img id='icon' src={iconSrc} alt={'weather-icon'} />
            <p id='description-txt' >{data.data[0].weather.description}</p>
        </div>
    </div>
  )
}
