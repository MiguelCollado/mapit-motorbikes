import MapitButton from "@/components/MapitButton.vue"

describe('MapitButton', () => {
  it("renders primary button", () => {
    // Arrange
    cy.mount(MapitButton, {props: {type: "primary", text: "Mapit"}})

    // Assert
    cy.contains("button", "Mapit").should("have.class", "primary")
  })

  it("renders success button", () => {
    // Arrange
    cy.mount(MapitButton, {props: {type: "success", text: "Mapit success"}})

    // Assert
    cy.contains("button", "Mapit success").should("have.class", "success")
  })

  it("render error button", () => {
    // Arrange
    cy.mount(MapitButton, {props: {type: "error", text: "Mapit error"}})

    // Assert
    cy.contains("button", "Mapit error").should("have.class", "error")
  })
})
