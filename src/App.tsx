import React from 'react';
import NoCity from './features/no-city/NoCity';
import { useGetWeatherQuery } from './services/weather-api';
import Navbar from './components/Navbar';
import Result from './features/search-results/Result';

function App() {
  const { data, error, isLoading } = useGetWeatherQuery('')
  
  return (
    <div  >
      <nav>
        <Navbar />
      </nav>
      {
        data && data.lenght === 0 ? <NoCity/> : <Result data={data} />
      }
    </div>
  );
}

export default App;
