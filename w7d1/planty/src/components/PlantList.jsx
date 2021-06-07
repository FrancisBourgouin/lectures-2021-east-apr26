import Plant from './Plant'

export default function PlantList(props) {
  const { plants } = props

  // const parsedPlants = []
  // for (const plant of plants) {
  //   // parsedPlants.push(<Plant key={plant.name} name={plant.name} dateWatered={plant.dateWatered} waterInterval={plant.waterInterval} />)
  //   parsedPlants.push(<Plant key={plant.name} {...plant} />)
  // }

  const coolParsedPlants = Array.isArray(plants) && plants.map(plant => <Plant key={plant.name} {...plant} />)



  return (
    <main>
      {coolParsedPlants}
    </main>
  )
}