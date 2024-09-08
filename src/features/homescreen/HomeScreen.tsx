import React, { useState } from 'react'
import '../../styles/navbar.styles.css';
import '../../styles/homescren.style.css';
import { ReactComponent as NoCityLogo } from '../../assets/no-city.svg';
import { ReactComponent as InvalidLogo } from '../../assets/invalid-logo.svg';
import { ReactComponent as InputIcon } from '../../assets/input-icon.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getCityName } from '../../redux/reducer/city-name';
import WeatherTable from './components/WeatherTable';
import WeatherDetails from './components/WeatherDetails';
import DetailContainer from './components/DetailContainer';
import { RootState } from '../../redux/store/store';
import { WeatherData } from '../../types/WeatherData';

type Props = {
    data: WeatherData,
}

export default function HomeScreen({data}: Props) {

  const dispatch = useAppDispatch();
  
  const [city, setCity] = useState<string>('')

  function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);   
    dispatch(getCityName(e.target.value)); 
  }

  const cityName = useAppSelector((state: RootState) => state.city.value)

  return (
    <div>
    <div className='body'>
    {
            data && cityName  ? 
            <WeatherTable data={data} />
            :
            data === null && cityName ? 
            <InvalidLogo className='no-city-logo' /> 
            : 
            <NoCityLogo className='no-city-logo' /> 
          }    
      
      <div className='container'>
        <div className='input-container'>
          <input 
            name="myInput" 
            id='input' 
            placeholder='Search a City' 
            onChange={handleChangeText}
            value={city}
          />
          <InputIcon id='input-icon'/>
        </div>
        <div className="select-city-container">
          {
            data && cityName ? 
             <WeatherDetails data={data} /> 
            :
            data === null && cityName ? 
            <DetailContainer title='Does not Exist' description='Type a valid city name to get weekly forecast data.' />
            :
            <DetailContainer title='Select a City' description='Search and select a city to see results. Try typing the first letters of the city you want.' />
          }            
        </div>
      </div>
    </div>
  </div>
  )
}