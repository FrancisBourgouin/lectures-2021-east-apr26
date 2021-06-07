import { timeAgo } from '../helpers/dateHelper'

export default function Plant(props) {
  const { name, dateWatered, waterInterval } = props
  const daysAgo = timeAgo(dateWatered)
  const wateredClass = daysAgo < waterInterval ? 'good' : 'bad'
  return (
    <article className={wateredClass}>
      <h1>{name}</h1>
      <p>Watered {daysAgo} days ago</p>
    </article>
  )
}

// const someFunction = () => {}
// export default someFunction