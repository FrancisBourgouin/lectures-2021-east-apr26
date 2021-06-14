# Weather App!

## Pitch

Show the current weather of a city, have a search field to search the city. Create buttons for previously searched cities

## Structure

body
  header
    h1
  section search
    form
      input cityName
  section buttons
    button
  section weather
    h1 city
    p temp
    p weather


## Data structure

search
  {cityName: ""} -> User input

buttons
  {listOfCities: ["", ""]} ->  Previous search

weather
  {cityName, temp, weather} -> API

  cityName -> data.name
  temp -> data.main.temp (K) -> (C?)
  weather -> data.weather[0].description

## Components

App
  CitySearch
  CityButtons
  Weather

## Helper functions?

Convert K -> C
Store previous search in buttons mechanism something something

## Testing!.

### Unit

K to C conversion
Weather component shows weather properly

### Feature

Searching for a city adds it to button list
Searching for a city again doesn't add it to button list
