import { timeAgo } from '../helpers/dateHelper'

export default function Plant(props) {
  const { name, dateWatered, waterInterval, waterThePlant, powerWashAllThePlants } = props
  const daysAgo = timeAgo(dateWatered)
  const wateredClass = daysAgo < waterInterval ? 'good' : 'bad'
  return (
    <article className={wateredClass}>
      <h1>{name}</h1>
      <button onClick={() => waterThePlant(name)}>🌊</button>
      <button onClick={powerWashAllThePlants}>🌊🌊🌊</button>
      <p>Watered {daysAgo} days ago</p>
    </article>
  )
}

// const someFunction = () => {}
// export default someFunction