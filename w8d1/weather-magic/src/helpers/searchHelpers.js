export const isItInTheArray = (array, element) => {
  if (!Array.isArray(array)) {
    return null
  }
  return array.includes(element)
}

// const addItToTheArrayButCreateANewOneBecauseMutationBad

export const addToNewArray = (array, element) => {
  return [...array, element]
}