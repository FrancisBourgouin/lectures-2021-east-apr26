import Plant from "./Plant"

export default function PlantList(props) {
  const { plants } = props

  const parsedPlants = Array.isArray(plants) && plants.map(plant => <Plant key={plant.name} {...plant} />)
  return (
    <main>
      {parsedPlants}
      {!parsedPlants && <h1>HEY NO PLANTS WTH</h1>}
    </main>
  )
}