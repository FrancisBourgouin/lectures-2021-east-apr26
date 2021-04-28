// Objects!

const pizza = {
  style: "Napoli",
  garnish: "Basil, Cheese, Prosciutto"
}

pizza.style // because we know the name of the key at the time of writing

const someKey = "garnish"
pizza[someKey] // When using a variable, also, when you don't know the key yet


// Key battle royale
console.log(pizza.price)

pizza.price = 1.99
pizza.price = 2.99
pizza.price = 6.99
pizza.price = 9.99
pizza.price = 9999.99 // last key standing

// Eradicate a key?

pizza.price = undefined // Bad
delete pizza.price // Good


// How can we iterate over an object?

// For..in loops (key in object)
// Object.keys(obj) -> array of keys -> for (classic), for..of (value of array)


// Copying an object ?

// Simple object -> Spread it, or do a loop

// const someObject = new Object()
