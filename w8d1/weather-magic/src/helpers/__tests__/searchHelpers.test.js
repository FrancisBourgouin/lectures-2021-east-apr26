import * as searchHelpers from "../searchHelpers";

describe("Search Helpers validation tests", () => {
  it("should return false when array doesn't contain an element", () => {
    const someArray = [1, 2, 3, 4, 5]
    const someElement = 6
    const result = searchHelpers.isItInTheArray(someArray, someElement)

    expect(result).toBe(false)
  })
  it("should return true when array contains an element", () => {
    const someArray = [1, 2, 3, 4, 5]
    const someElement = 5
    const result = searchHelpers.isItInTheArray(someArray, someElement)

    expect(result).toBe(true)
  })
  it("should return null when array or element is invalid", () => {
    const someArray = ""
    const someElement = 5
    const result = searchHelpers.isItInTheArray(someArray, someElement)

    expect(result).toBeNull()
  })
  it("adds the element without modifying the original", () => {
    const someArray = [1, 2, 3, 4, 5]
    const someElement = 6

    const result = searchHelpers.addToNewArray(someArray, someElement) || []

    expect(result.length).toBe(6)
    expect(someArray.length).toBe(5)
  })
})