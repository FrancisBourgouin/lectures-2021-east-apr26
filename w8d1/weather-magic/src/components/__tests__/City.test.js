import { render, fireEvent } from '@testing-library/react'
import City from '../City'

describe("City Integration", () => {
  it("should add a city button when searching for a city", () => {
    const renderedComponent = render(<City />)


    const input = renderedComponent.queryByPlaceholderText("Enter the city")

    fireEvent.change(input, { target: { value: 'Montréal' } })

    const button = renderedComponent.queryByText("Search for weather!")

    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    const cities = renderedComponent.queryAllByTestId("city")

    expect(cities.length).toBe(1)
  })

  it("should not add a city button when city already there", () => {
    const renderedComponent = render(<City />)

    const input = renderedComponent.queryByPlaceholderText("Enter the city")

    fireEvent.change(input, { target: { value: 'Montréal' } })

    const button = renderedComponent.queryByText("Search for weather!")

    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    const cities = renderedComponent.queryAllByTestId("city")

    expect(cities.length).toBe(1)

    const input2 = renderedComponent.queryByPlaceholderText("Enter the city")

    fireEvent.change(input2, { target: { value: 'Montréal' } })

    const button2 = renderedComponent.queryByText("Search for weather!")

    expect(button2).toBeInTheDocument()
    fireEvent.click(button2)

    const cities2 = renderedComponent.queryAllByTestId("city")

    expect(cities2.length).toBe(1)
  })
})