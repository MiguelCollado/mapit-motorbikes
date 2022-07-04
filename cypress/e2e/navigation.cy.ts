// https://docs.cypress.io/api/introduction/api.html

describe("Dashboard navigation", () => {
  it("visits the dashboard", () => {
    cy.visit("/")
    cy.contains("a", "Dashboard")
  })
})

describe("Motorbike navigation", () => {
  it("visits a motorbike", () => {
    // Arrange
    cy.visit("/bikes/MOTO_A")

    // Assert
    cy.contains("h1", "MOTO_A")
  })
})
