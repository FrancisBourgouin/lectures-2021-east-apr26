# Water plant thingy

# Info

Show a list of tiles representing plants, with their name, and the last time they were watered.

# Data

List of plants
  date watered
  water interval
  name


# Mock data

```jsx
  [
    {name:"Aloe Vera", dateWatered:"2021-06-01", waterInterval:15},
    {name:"Money tree", dateWatered:"2021-06-05", waterInterval:8},
    {name:"Spider plant", dateWatered:"2021-04-01", waterInterval:9000},
    {name:"Bonzai tree", dateWatered:"2021-04-01", waterInterval:60}
    {name:"Staghorn fern", dateWatered:"2021-06-05", waterInterval:6}
  ]
```

# HTML Structure

body
  header
    h1 title
  main
    article
      h1 name
      p lastWatered (color change on over waterinterval)

# React Components

App
  Header (?)
  PlantList
    Plant