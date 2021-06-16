import logo from './logo.svg';
import './App.css';
import City from './components/City'
import Weather from './components/Weather'
import useOpenWeather from './hooks/useOpenWeather';
// 09fd719b4b698ec0260e424f83378e3d
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function App() {

  const { weatherData, currentCity, setCurrentCity } = useOpenWeather()
  return (
    <div className="App">
      <header>
        <h1>Weather fetcher buttons & stuff!</h1>
      </header>
      <City setCurrentCity={setCurrentCity} />
      <Weather cityName={currentCity} data={weatherData} />
    </div>
  );
}

export default App;
