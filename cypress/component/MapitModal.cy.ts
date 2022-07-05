import MapitModal from "@/components/MapitModal.vue"

describe("MapitModal", () => {
  it("renders correctly", () => {
    // Arrange
    cy.mount(MapitModal, {
      props: { open: true, title: "test", description: "test description" },
    })
  })
})
