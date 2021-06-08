import { useState } from 'react'
import './App.css';
// import PlantList from './components/PlantList';
import PlantList from './components/PlantList';
import Header from './components/Header';
import PlantForm from './components/PlantForm';
const plantsOriginal = [
  { name: "Aloe Vera", dateWatered: "2021-06-01", waterInterval: 15 },
  { name: "Money tree", dateWatered: "2021-06-05", waterInterval: 8 },
  { name: "Spider plant", dateWatered: "2021-04-01", waterInterval: 9000 },
  { name: "Bonzai tree", dateWatered: "2021-04-01", waterInterval: 60 },
  { name: "Staghorn fern", dateWatered: "2021-06-05", waterInterval: 6 }
]

function App() {
  const [plants, setPlants] = useState(plantsOriginal)

  const oldWaterThePlant = (name) => {
    const wateredPlant = plants.find(plant => plant.name === name)
    const wateredPlantIndex = plants.findIndex(plant => plant.name === name)
    const today = new Date()

    const newWateredPlant = { ...wateredPlant, dateWatered: today.toDateString() }
    const newPlants = [...plants]
    newPlants[wateredPlantIndex] = newWateredPlant
    setPlants(newPlants)
  }

  const waterThePlant = (name) => {
    setPlants(prevState => {
      const wateredPlant = prevState.find(plant => plant.name === name)
      const wateredPlantIndex = prevState.findIndex(plant => plant.name === name)
      const today = new Date()

      const newWateredPlant = { ...wateredPlant, dateWatered: today.toDateString() }
      const newPlants = [...prevState]
      newPlants[wateredPlantIndex] = newWateredPlant

      return newPlants
    })
  }

  const powerWashAllThePlants = () => {
    for (const plant of plants) {
      waterThePlant(plant.name)
    }
  }

  const addAPlant = formData => {
    const today = new Date()
    const newPlant = { ...formData, dateWatered: today.toDateString() }

    setPlants([...plants, newPlant])
  }

  return (
    <div className="App">
      <Header />
      <PlantForm onSubmit={addAPlant} />
      {/* {PlantForm({onSubmit:addAPlant})} */}
      {/* <PlantList
        plants={plants}
        powerWashAllThePlants={powerWashAllThePlants}
        waterThePlant={waterThePlant}
      /> */}
      <PlantList
        {...{
          plants,
          powerWashAllThePlants,
          waterThePlant,
          someRandomStuff: 5
        }}
      />
    </div>
  );
}

export default App;
