import NavBar from "@/components/NavBar.vue"

describe("NavBar", () => {
  it("renders correctly", () => {
    cy.mount(NavBar)
  })

  it("renders all links correctly", () => {
    // Arrange
    cy.mount(NavBar)

    // Assert
    cy.get("nav a").should("have.length", 2)
  })

  it("renders dashboard link", () => {
    // Arrange
    cy.mount(NavBar)

    // Assert
    cy.get("[aria-label='dashboard-link']").should("have.attr", "href", "/")
  })

  it("renders dashboard link with logo", () => {
    // Arrange
    cy.mount(NavBar)

    // Assert
    cy.get("[aria-label='dashboard-link']")
      .contains("img")
      .should("have.attr", "src", "/images/logo.png")
  })
})
