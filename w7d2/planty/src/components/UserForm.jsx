import { useState } from 'react'

export default function UserForm(props) {
  // const [name, setName] = useState("")
  // const [waterInterval, setWaterInterval] = useState("")

  const [formData, setFormData] = useState({

  })

  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(formData)
  }

  const handleChange = event => {
    const { value, name } = event.target

    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of the plant"
          value={name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="waterInterval"
          placeholder="Water interval"
          value={waterInterval}
          onChange={handleChange}
        />
        <button type="submit">Add a plant!</button>
      </form>
    </div>
  )
}