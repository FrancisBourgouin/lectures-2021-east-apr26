import { storiesOf } from '@storybook/react';
import Plant from '../components/Plant'
import '../App.css'

const goodWateringData = {
  name: "Bonzai tree",
  dateWatered: "2021-06-01",
  waterInterval: 60
}

const badWateringData = {
  name: "Bonzai tree",
  dateWatered: "2021-03-01",
  waterInterval: 60
}


storiesOf('Plant component', module)
  .add("Good watering", () => <Plant {...goodWateringData} />)
  .add("Bad watering", () => <Plant {...badWateringData} />)