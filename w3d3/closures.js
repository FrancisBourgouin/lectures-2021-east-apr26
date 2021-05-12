const countdownGenerator = (startingPoint) => {
  let currentValue = startingPoint

  const removeOneFromCurrentValue = () => currentValue--
  const seeValue = () => console.log(currentValue)

  return { seeValue, removeOneFromCurrentValue }
}

const fromFive = countdownGenerator(5)
const fromTen = countdownGenerator(10)

fromFive.seeValue()
fromTen.seeValue()

fromFive.removeOneFromCurrentValue()
fromFive.removeOneFromCurrentValue()
fromFive.seeValue()