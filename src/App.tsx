import Navbar from './components/Navbar';
import { useAppSelector } from './redux/hooks/hooks';
import { RootState } from './redux/store/store';
import HomeScreen from './features/homescreen/HomeScreen';
import { useGetWeatherQuery } from './services/weather-api';

function App() {
  const cityName = useAppSelector((state: RootState) => state.city.value)
  
  const { data, error, isLoading } = useGetWeatherQuery(cityName)
  
  return (
    <div  >
      <nav>
        <Navbar />
      </nav>
      {
        <HomeScreen data={data} isLoading={isLoading} />
      }
    </div>
  );
}

export default App;
