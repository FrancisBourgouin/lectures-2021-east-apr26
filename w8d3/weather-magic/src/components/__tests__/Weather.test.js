import { render, fireEvent } from '@testing-library/react'

import Weather from "../Weather";
const weatherResponse = {
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Montréal",
  "cod": 200
}

describe("Weather component functionality", () => {
  it("should show the city name, temperature and weather when given good data", () => {
    const renderedComponent = render(<Weather cityName="Montréal" data={weatherResponse} />)

    const cityName = renderedComponent.getByText("Montréal")
    expect(cityName).toBeInTheDocument()

    const temperature = renderedComponent.getByText(/9°C/i)
    expect(temperature).toBeInTheDocument()

    const weather = renderedComponent.getByText(/clear sky/i)
    expect(weather).toBeInTheDocument()

  })
  it("should show only the city name if part of the data is invalid", () => {
    const renderedComponent = render(<Weather cityName="Montréal" data={null} />)

    const cityName = renderedComponent.getByText("Montréal")
    expect(cityName).toBeInTheDocument()

    const temperature = renderedComponent.queryByTestId("temperature")
    const weather = renderedComponent.queryByTestId("weather")

    expect(temperature).not.toBeInTheDocument()
    expect(weather).not.toBeInTheDocument()
  })
  it("should show nothing if given nothing", () => {
    const renderedComponent = render(<Weather cityName={null} data={null} />)

    const cityName = renderedComponent.queryByTestId("cityName")
    expect(cityName).not.toBeInTheDocument()

    const temperature = renderedComponent.queryByTestId("temperature")
    const weather = renderedComponent.queryByTestId("weather")

    expect(temperature).not.toBeInTheDocument()
    expect(weather).not.toBeInTheDocument()
  })
})