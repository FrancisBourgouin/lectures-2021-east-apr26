import { storiesOf } from '@storybook/react';
import PlantList from '../components/PlantList'
import '../App.css'

const plants = [
  { name: "Aloe Vera", dateWatered: "2021-06-01", waterInterval: 15 },
  { name: "Money tree", dateWatered: "2021-06-05", waterInterval: 8 },
  { name: "Spider plant", dateWatered: "2021-04-01", waterInterval: 9000 },
  { name: "Bonzai tree", dateWatered: "2021-04-01", waterInterval: 60 },
  { name: "Staghorn fern", dateWatered: "2021-06-05", waterInterval: 6 }
]


storiesOf('PlantList component', module)
  .add("Data", () => <PlantList plants={plants} />)
  .add("No Data", () => <PlantList />)