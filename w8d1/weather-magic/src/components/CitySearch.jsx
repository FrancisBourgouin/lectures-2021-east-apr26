import { useState } from "react"

export default function CitySearch(props) {
  const [formData, setFormData] = useState({
    cityName: ""
  })

  const handleChange = event => {
    const { name, value } = event

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.onSubmit(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityName"
        placeholder="Enter the city"
        value={formData.cityName}
        onChange={handleChange}
      />
      <button type="submit" alt="search weather">Search for weather!</button>

    </form>
  )
}