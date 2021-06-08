// Immutability

const poulet = { amount: 5 }
// const pollo = poulet


const pollo = {}
for (const key of Object.keys(poulet)) {
  pollo[key] = poulet[key]
}

const chicken = { ...poulet }


const pikachu =
{
  name: "Pikachu",
  level:
    { min: 5, max: 99 }
}
const otherPikachu = { ...pikachu }
otherPikachu.level = { ...pikachu.level }

otherPikachu.level.min = 10


const someArray = [1, 2, 3, 4, 5, 6]

// someArray.pop() => 6
// someArray.pop() => 5
// someArray.pop() => 4

const purePop = array => {
  const newArray = [...array]

  return newArray.pop()
}

purePop(someArray)
purePop(someArray)
purePop(someArray)
purePop(someArray)
purePop(someArray)

const someFunkyObject = {
  isBassFunky: true,
  keyboard: {
    electric: {
      old: true,
      new: true
    }
  }
}

someFunkyObject.keyboard.electric

const newFunky = { ...someFunkyObject }
newFunky.keyboard = { ...someFunkyObject.keyboard }
newFunky.keyboard.acoustic = { old: true }
newFunky.keyboard.electric = { ...newFunky.keyboard.electric, old: false }


const newNewFunky = {
  ...someFunkyObject,
  keyboard: {
    ...someFunkyObject.keyboard,
    electric: {
      ...someFunkyObject.keyboard.electric
    }
  }
}

console.log(someFunkyObject)
console.log(newFunky)