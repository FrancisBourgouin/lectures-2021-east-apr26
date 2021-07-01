import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Url from './components/Url'
import Urls from './components/Urls'

import './App.css';

function App() {
  const [user, setUser] = useState(null)

  const login = () => {
    axios.post('/api/login').then(res => setUser(res.data))
    // setUser({ name: "Lil Chicken" })
  }

  useEffect(() => {
    axios.post('/api/authenticate').then(res => setUser(res.data))
  }, [])
  return (
    <Router>
      <div className="App">
        {user && <h1>{user.name}</h1>}
        <button onClick={login}>LOG IN</button>
        <Switch>
          <Route path="/" exact>
            <Home />

          </Route>
          <Route path="/login">
            <Login />

          </Route>
          <Route path="/register">
            <Register />

          </Route>
          <Route path="/urls">
            <Urls />
            <Url />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
