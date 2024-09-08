import React, { useState } from 'react'
import '../../styles/navbar.styles.css';
import '../../styles/no.city.styles.css';
import { ReactComponent as NoCityLogo } from '../../assets/no-city.svg';
import { ReactComponent as InvalidLogo } from '../../assets/invalid-logo.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getCityName } from '../../redux/reducer/city-name';
import WeatherTable from './components/WeatherTable';
import WeatherDetails from './components/WeatherDetails';
import DetailContainer from './components/DetailContainer';
import { RootState } from '../../redux/store/store';


type Props = {
    data: any,
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
            data === null ? 
            <InvalidLogo className='no-city-logo' /> 
            : 
            <NoCityLogo className='no-city-logo' /> 
          }    
      
      <div className='container'>
        <input 
          name="myInput" 
          id='input' 
          placeholder='Search a City' 
          onChange={handleChangeText}
          value={city}
        />
        <div className="select-city-container">
          {
            data && cityName ? 
             <WeatherDetails data={data} /> 
            :
            data === null ? 
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