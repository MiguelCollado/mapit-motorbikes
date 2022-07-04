import MapitMap from "@/components/MapitMap.vue"

describe('MapitMap', () => {
  it('renders correctly', () => {
    cy.mount(MapitMap, {props: { latitude: 0, longitude: 0}})
  })

  it('renders the map', () => {
    // Arrange
    cy.mount(MapitMap, {props: { latitude: 41.39715905370612, longitude: 2.181240404125038}})

    // Assert
    cy.get('.gm-style').should('exist')
  })
})
