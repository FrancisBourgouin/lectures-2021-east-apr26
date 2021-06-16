/// <reference types="cypress" />

describe("Weather App User Stories", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("not load any weather information unless a city is specified", () => {

    cy.get("header h1").should("have.text", "Weather fetcher buttons & stuff!")
    cy.get("input").should("have.length", 1)
    cy.get("div > button").should("have.length", 0)
  })

  it("should show the weather for a specific city if a city was searched for", () => {
    cy
      .get("input[name=\"cityName\"]")
      .type("Wuhan")
      .should("have.value", "Wuhan")
      .type("{enter}")

    cy.get(".Weather h1").should("have.text", "Wuhan")
    // cy.get(".Weather p:first-of-type").should("have.text", /The temperature is/i)
    cy.contains("p", 'The temperature is').should("be.visible")
    cy.contains("p", 'The weather is').should("be.visible")

  })

  it("should show a button with the name of the city that was searched", () => {
    cy
      .get("input[name=\"cityName\"]")
      .type("Oslo")
      .should("have.value", "Oslo")
      .type("{enter}")

    cy.get("div > button").should("have.text", "Oslo")
  })


  it("should not add a button to the list if the city is already there", () => {
    cy
      .get("input[name=\"cityName\"]")
      .type("Sylhet")
      .should("have.value", "Sylhet")
      .type("{enter}")
    cy
      .get("input[name=\"cityName\"]")
      .type("Rio")
      .should("have.value", "Rio")
      .type("{enter}")
    cy
      .get("input[name=\"cityName\"]")
      .type("New Delhi")
      .should("have.value", "New Delhi")
      .type("{enter}")
    cy
      .get("input[name=\"cityName\"]")
      .type("New Delhi")
      .should("have.value", "New Delhi")
      .type("{enter}")

    cy.get("div > button").should("have.length", 3)
  })

  it("should show the weather of the button that we clicked", () => {
    cy
      .get("input[name=\"cityName\"]")
      .type("Puvirnituq")
      .should("have.value", "Puvirnituq")
      .type("{enter}")

    cy
      .get("input[name=\"cityName\"]")
      .type("Pripyat")
      .should("have.value", "Pripyat")
      .type("{enter}")

    cy.contains("button", "Puvirnituq").click()

    cy.get(".Weather h1").should("have.text", "Puvirnituq")

  })
})