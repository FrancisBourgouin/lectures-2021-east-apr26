import * as tempHelpers from '../tempHelpers'


describe("Temperature helpers", () => {
  it("converts 300.15K to 27C", () => {
    const tempInK = 300.15
    const result = tempHelpers.convertKtoC(tempInK)

    expect(result).toBe(27)
  })
  it("returns null if given an invalid temp", () => {
    const tempInK = -1
    const result = tempHelpers.convertKtoC(tempInK)

    expect(result).toBeNull()
  })
  it("returns null if given an invalid type", () => {
    const tempInK = "Wiggle"
    const result = tempHelpers.convertKtoC(tempInK)

    expect(result).toBeNull()
  })
})