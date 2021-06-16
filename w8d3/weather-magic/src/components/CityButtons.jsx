export default function CityButtons(props) {
  const { cities } = props

  const parsedCities = cities && cities.map((city) => <button onClick={() => props.setCurrentCity(city)} data-testid="city" key={city}>{city}</button>)
  return (
    <div>

      {parsedCities}

    </div>
  )
}