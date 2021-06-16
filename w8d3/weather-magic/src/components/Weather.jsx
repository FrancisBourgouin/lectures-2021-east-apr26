import { convertKtoC } from "../helpers/tempHelpers"

export default function Weather(props) {
  const { cityName, data } = props
  return (
    <section className="Weather">
      {cityName && <h1 data-testid="cityName">{cityName}</h1>}
      {data &&
        <>
          <p data-testid="temperature">The temperature is {convertKtoC(data.main.temp)}°C</p>
          <p data-testid="weather">The weather is {data.weather[0].description}</p>
        </>
      }
    </section>
  )
}