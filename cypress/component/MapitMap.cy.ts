import MapitMap from "@/components/MapitMap.vue"

describe("MapitMap", () => {
  it("renders correctly", () => {
    cy.mount(MapitMap, { props: { latitude: 0, longitude: 0 } })
  })
})
