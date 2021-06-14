const KELVIN = 273.15

const rounder = (value, units) => {
  const round = Math.pow(10, units)
  return Math.round(value * round) / round
}

export const convertKtoC = (tempInK) => {
  const parsedTemp = Number(tempInK)
  if (parsedTemp < 0 || Number.isNaN(parsedTemp)) {
    return null
  }
  return rounder(parsedTemp - KELVIN, 0)
}