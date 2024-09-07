import React from 'react';
import NoCity from './features/no-city/NoCity';
import { useGetWeatherQuery } from './services/weather-api';

function App() {
  const { data, error, isLoading } = useGetWeatherQuery('')
  console.log("data: ", data);
  
  return (
    <div  >
      <NoCity/>
    </div>
  );
}

export default App;
