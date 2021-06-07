import Header from './components/Header';
import PlantList from './components/PlantList';

import './App.css';

function App() {
  const plants = [
    { name: "Aloe Vera", dateWatered: "2021-06-01", waterInterval: 15 },
    { name: "Money tree", dateWatered: "2021-06-05", waterInterval: 8 },
    { name: "Spider plant", dateWatered: "2021-04-01", waterInterval: 9000 },
    { name: "Bonzai tree", dateWatered: "2021-04-01", waterInterval: 60 },
    { name: "Staghorn fern", dateWatered: "2021-06-05", waterInterval: 6 }
  ]

  return (
    <div className="App">
      <Header />
      <PlantList plants={plants} />
      {['a', 'l', 'l', 'o']}
    </div>
  );
}

export default App;
