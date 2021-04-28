const someDonut = {
  dough: "plain",
  glazing: "chocolate",
  holeInTheMiddle: false
}

const listOfKeys = Object.keys(someDonut)

const aReallyNewDonut = {}
for (const key of listOfKeys) {
  aReallyNewDonut[key] = someDonut[key]
}

const superCoolDonut = { ...someDonut } // Spread operator


const anotherDonut = someDonut

anotherDonut.dough = "chocolate"
anotherDonut.glazing = "raspberry"

console.log(anotherDonut)
console.log(someDonut)
console.log(aReallyNewDonut)