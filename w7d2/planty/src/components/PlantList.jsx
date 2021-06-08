import Plant from "./Plant"



export default function PlantList(props) {
  const { plants, powerWashAllThePlants, waterThePlant } = props

  const parsedPlants =
    Array.isArray(plants) && plants.map(plant => (
      <Plant
        key={plant.name}
        {...plant}
        waterThePlant={waterThePlant}
        powerWashAllThePlants={powerWashAllThePlants}
      />
    )
    )
  return (
    <main>
      {parsedPlants}
      {!parsedPlants && <h1>HEY NO PLANTS WTH</h1>}
    </main>
  )
}