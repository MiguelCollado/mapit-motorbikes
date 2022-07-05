import MapitModal from "@/components/MapitModal.vue"

describe("MapitModal", () => {
  it("renders correctly", () => {
    // Arrange
    cy.mount(MapitModal, {
      props: { open: true, title: "test", description: "test description" },
    })
  })

  it("sends close emit when closes", () => {
    // Arrange
    const closeModalSpy = cy.spy().as("closeModalSpy")
    cy.mount(MapitModal, {
      props: {
        open: true,
        title: "test",
        description: "test description",
        closeModal: closeModalSpy,
      },
    })

    // Act
    cy.get('[aria-label="close-button"]').click()

    // Assert
    cy.get("@closeModalSpy").should("have.been.calledOnce")
  })
})
