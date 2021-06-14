export default function CityButtons(props) {
  const { cities } = props
  const parsedCities = cities && cities.map((city) => <li data-testid="city" key={city}>{city}</li>)
  return (
    <div>
      <ul>
        {parsedCities}
      </ul>
    </div>
  )
}