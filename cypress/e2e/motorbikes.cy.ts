describe("Motorbike operation", () => {
  it("visits a motorbike from dashboard", () => {
    cy.visit("/")
    cy.wait(500)
    // Check if at least exists one motorbike
    cy.get("ul").should("have.length.at.least", 1)

    cy
      .get("ul > :nth-child(1)")
      .invoke("attr", "aria-label").then((label) => {
          cy.get("ul > :nth-child(1)").click()

          cy.url().should("include", `/bikes/${label}`)
      })
  })

  it("visits a motorbike from dashboard and return", () => {
    cy.visit("/")
    cy.wait(500)
    // Check if at least exists one motorbike
    cy.get("ul").should("have.length.at.least", 1)

    cy
      .get("ul > :nth-child(1)")
      .invoke("attr", "aria-label").then((label) => {

        cy.get("ul > :nth-child(1)").click()

        cy.url().should("include", `/bikes/${label}`)

        cy.get("[aria-label='return-button']").click()
        cy.url().should("include", "/")

        cy.get("ul").should("have.length.at.least", 1)
    })
  })

  it("visits a motorbike and sets an appointment", () => {
    cy.visit("/")
    cy.wait(500)

    // Check if at least exists one motorbike
    cy.get("ul").should("have.length.at.least", 1)

    cy
      .get("ul > :nth-child(1)")
      .invoke("attr", "aria-label").then((label) => {

      cy.get("ul > :nth-child(1)").click()

      cy.url().should("include", `/bikes/${label}`)

      cy.get("[aria-label='appointment-button']").click()
      cy.wait(1600)

      cy.get("[aria-label='mapit-modal']").should("be.visible")
      cy.get("[aria-label='close-button']").click()

      cy.get("[aria-label='mapit-modal']").should("not.exist")
    })
  })
})
