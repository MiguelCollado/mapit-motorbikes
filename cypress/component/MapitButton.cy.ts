import MapitButton from "@/components/MapitButton.vue"

describe("Button types", () => {
  it("renders primary button", () => {
    // Arrange
    cy.mount(MapitButton, { props: { type: "primary", text: "Mapit" } })

    // Assert
    cy.contains("button", "Mapit").should("have.class", "primary")
  })

  it("renders success button", () => {
    // Arrange
    cy.mount(MapitButton, { props: { type: "success", text: "Mapit success" } })

    // Assert
    cy.contains("button", "Mapit success").should("have.class", "success")
  })

  it("render error button", () => {
    // Arrange
    cy.mount(MapitButton, { props: { type: "error", text: "Mapit error" } })

    // Assert
    cy.contains("button", "Mapit error").should("have.class", "error")
  })

  it("renders disabled when loading", () => {
    // Arrange
    cy.mount(MapitButton, {
      props: { type: "primary", loading: true, text: "Mapit disabled" },
    })

    // Assert
    cy.contains("button", "Mapit disabled")
      .should("have.class", "loader")
      .should("be.disabled")
  })
})
