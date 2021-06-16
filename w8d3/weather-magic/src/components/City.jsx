import { useState } from "react"

import { isItInTheArray, addToNewArray } from "../helpers/searchHelpers"

import CitySearch from "./CitySearch"
import CityButtons from "./CityButtons"


export default function City(props) {
  const [cities, setCities] = useState([])

  const addCity = (formData) => {
    props.setCurrentCity(formData.cityName)
    if (!isItInTheArray(cities, formData.cityName)) {
      const newCities = addToNewArray(cities, formData.cityName)
      setCities(newCities)
    }
  }
  return (
    <div>
      <CitySearch onSubmit={addCity} />
      <CityButtons cities={cities} setCurrentCity={props.setCurrentCity} />
    </div>
  )
}