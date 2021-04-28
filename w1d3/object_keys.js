const someDonut = {
  dough: "plain",
  glazing: "chocolate",
  holeInTheMiddle: false
}

const listOfKeys = ["dough", "glazing", "holeInTheMiddle"] // Kinda bad

const anotherListOfKeys = Object.keys(someDonut)

const yetAnotherListOfKeys = []

for (const currentKey in someDonut) {
  yetAnotherListOfKeys.push(currentKey)
}


// for(key in object)
// for(value of iterableElement)

// for(let i = 0; i < Object.keys(someDonut).length)