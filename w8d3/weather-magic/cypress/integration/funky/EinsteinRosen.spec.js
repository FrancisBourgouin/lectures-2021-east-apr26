/// <reference types="cypress" />

describe("Physics!", () => {
  it("shows a result about Wormholes if we search for Einstein Rosen Bridges", () => {
    cy.visit("https://google.com")

    cy.get('.gLFyf').type("Einstein-Rosen Bridge{enter}")

    cy.contains("wormhole").should("be.visible")
  })

})