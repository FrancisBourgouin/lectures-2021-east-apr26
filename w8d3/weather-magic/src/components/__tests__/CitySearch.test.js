import { render, fireEvent } from '@testing-library/react'
import CitySearch from '../CitySearch'

describe("CitySearch component funcitonality", () => {
  it("should trigger the submit action when form is complete", () => {
    const onSubmitMock = jest.fn()

    const renderedComponent = render(<CitySearch onSubmit={onSubmitMock} />)

    const input = renderedComponent.queryByPlaceholderText("Enter the city")

    fireEvent.change(input, { target: { value: 'Montréal' } })

    const button = renderedComponent.queryByText("Search for weather!")
    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    expect(onSubmitMock).toHaveBeenCalled()
  })
})