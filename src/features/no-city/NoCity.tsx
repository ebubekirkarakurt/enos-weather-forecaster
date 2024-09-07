import React, { useState } from 'react';
import '../../styles/navbar.styles.css';
import '../../styles/no.city.styles.css';
import { ReactComponent as NoCityLogo } from '../../assets/no-city.svg';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { getCityName } from '../../redux/reducer/city-name';

export default function NoCity() {
  const [city, setCity] = useState<string>('');
  const dispatch = useAppDispatch();

  function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);   
    dispatch(getCityName(e.target.value)); 
  }
  
  return (
    <div>
      <div className='body'>
        <NoCityLogo className='no-city-logo' />
        <div className='container'>
          <input 
            name="myInput" 
            id='input' 
            placeholder='Search a City' 
            onChange={handleChangeText}
            value={city}
          />
          <div className="select-city-container">
            <h1 id='header-txt'>Select a City</h1>
            <p id='body-txt'>Search and select a city to see results. Try typing the first letters of the city you want.</p>            
          </div>
        </div>
      </div>
    </div>
  );
}
