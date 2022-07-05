import MapitBikeList from "@/components/MapitBikeList.vue"
import type { Motorbike } from "@/domain/motorbike"

const motorbikes = [
  {
    id: "MOTO_1",
    modelo: "BMX",
    nombre: "Nombre 1",
    precioCompra: 100,
    fechaCompra: "2020-01-01",
  },
  {
    id: "MOTO_2",
    modelo: "YAMAHA",
    nombre: "Nombre 2",
    precioCompra: 200,
    fechaCompra: "2010-01-01",
  },
] as Motorbike[]

describe("MapitBikeList", () => {
  it("renders correctly", () => {
    cy.mount(MapitBikeList, { props: { bikes: motorbikes } })
  })

  it("should render all motorbikes", () => {
    // Arrange
    cy.mount(MapitBikeList, { props: { bikes: motorbikes } })

    // Assert
    cy.get("ul li").should("have.length", 2)
  })

  it("should render empty list", () => {
    // Arrange
    cy.mount(MapitBikeList, { props: { bikes: [] } })

    // Assert
    cy.get("ul li").should("have.length", 0)
  })

  it("should contain the motorbike's name", () => {
    // Arrange
    cy.mount(MapitBikeList, { props: { bikes: motorbikes } })

    // Assert
    cy.get('[aria-label="MOTO_1"] [aria-label="motorbike-name"]')
      .should("contain", "Nombre 1")

    cy.get('[aria-label="MOTO_2"] [aria-label="motorbike-name"]')
      .should("contain", "Nombre 2")
  })
  it("should contain the motorbike's model", () => {
    // Arrange
    cy.mount(MapitBikeList, { props: { bikes: motorbikes } })

    // Assert
    cy.get('[aria-label="MOTO_1"] [aria-label="motorbike-model"]')
      .should("contain", "BMX")
    cy.get('[aria-label="MOTO_2"] [aria-label="motorbike-model"]')
      .should("contain", "YAMAHA")
  })
})
