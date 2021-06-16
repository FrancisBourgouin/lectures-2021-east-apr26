import { useEffect, useState } from 'react';
import axios from 'axios'

export default function useOpenWeather() {
  const [weatherData, setWeatherData] = useState(null)
  const [currentCity, setCurrentCity] = useState(null)

  useEffect(() => {

    if (currentCity) {
      const API = "09fd719b4b698ec0260e424f83378e3d"
      axios
        .get(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API}`)
        .then(res => setWeatherData(res.data))
        .catch(err => {
          console.log(err)
          setWeatherData(null)
        })
    }
  }, [currentCity])

  return { weatherData, currentCity, setCurrentCity }
}