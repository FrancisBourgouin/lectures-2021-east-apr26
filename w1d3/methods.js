// A method is a function, but inside an object

// log()
// console.log()

// console.log(console)

const eat = function () {
  // console.log(this)
  console.log('miam miam')
  console.log(`That ${this.glazing} glazing is awesome 🔥🔥🔥🔥`)
}

const arrow = () => {
  console.log(this)
}

let amount = 5

// const someDonut = {
//   amount,
//   dough: "plain",
//   glazing: "chocolate",
//   holeInTheMiddle: false,
//   eat: function () {
//     console.log('miam miam')
//   }
// }

const someDonut = {
  dough: "plain",
  glazing: "chocolate",
  holeInTheMiddle: false,
  eat,
  arrow
}

const naanBread = {
  dough: "homemade",
  glazing: "garlic butter",
  eat
}
someDonut.eat()
naanBread.eat()
// eat()

someDonut.arrow()