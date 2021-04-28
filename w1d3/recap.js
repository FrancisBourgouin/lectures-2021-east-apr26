// Primitive data types

// - Boolean
// - String
// - Number
// - Null & Undefined
// - NaN
// - Symbol

// Structural type
// - Object
// - Array

// Objects -> Key-Value pair system (order is not important)
// Arrays -> Index-Value pair system (order is important)

const someDonut = {
  dough: "plain",
  glazing: "chocolate",
  holeInTheMiddle: false
}

console.log(someDonut["glazing"])
console.log(someDonut.glazing)

// Dot notation : 

const key = 'dough'

// someDonut.key => undefined
// someDonut[key] => 'plain'

// weatherData.main.temp.metric.max
// weatherData["main"]["temp"]["metric"]["max"]


const listOfKeys = ["dough", "glazing", "holeInTheMiddle"]

// Output all of the values in my object at the specified keys above
// Iterate over the values of the array
for (let i = 0; i < listOfKeys.length; i++) {
  const currentKey = listOfKeys[i]
  const currentValue = someDonut[currentKey]
  // I want to output to the console using the value as a key
  console.log(someDonut[currentKey])
}

for (const currentKey of listOfKeys) {
  console.log(someDonut[currentKey])
}