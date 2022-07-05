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
    cy.contains("h1", "Favorita")
  })

  it("redirects to 404 for a non valid motorbike", () => {
    // Arrange
    cy.visit("/bikes/MOTO_C")

    // Assert
    cy.url().should("include", "/404")
  })
})

describe("Credits navigation", () => {
  it("visits the credits", () => {
    cy.visit("/credits")

    cy.get("[aria-label='creator']").should(
      "have.attr",
      "href",
      "mailto:hi@ironmike.es"
    )
  })
})

describe("Not found navigation", () => {
  it("redirects to not found view", () => {
    cy.visit("/noexists")

    cy.url().should("include", "/404")
  })
})
