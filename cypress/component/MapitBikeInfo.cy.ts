import type { Motorbike } from "@/domain/motorbike"
import MapitBikeInfo from "@/components/MapitBikeInfo.vue"

describe("MapitBikeInfo", () => {
  it("renders correctly", () => {
    // Arrange
    const motorbike = {
      id: "MOTO_1",
      modelo: "BMX",
      precioCompra: 10000,
      fechaCompra: "2020-01-01",
    } as Motorbike

    cy.mount(MapitBikeInfo, { props: { bike: motorbike } })
  })

  it("should contain the motorbike's model", () => {
    // Arrange
    const motorbike = {
      id: "MOTO_1",
      modelo: "BMX",
      precioCompra: 10000,
      fechaCompra: "2020-01-01",
    } as Motorbike

    cy.mount(MapitBikeInfo, { props: { bike: motorbike } })

    cy.get('[aria-label="motorbike-model"]').should("contain", "BMX")
  })

  it("calculates prices for motorbike from same year", () => {
    // Arrange
    const today = new Date().toISOString().split("T")[0]

    const motorbike = {
      id: "MOTO_1",
      modelo: "BMX",
      precioCompra: 10000,
      fechaCompra: today,
    } as Motorbike

    cy.mount(MapitBikeInfo, { props: { bike: motorbike } })

    // Assert
    cy.get('[aria-label="buyback-price"]').contains("10.000,00 €")
  })

  it("calculates prices for motorbike from 1 year", () => {
    // Arrange
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    const motorbike = {
      id: "MOTO_1",
      modelo: "BMX",
      precioCompra: 10000,
      fechaCompra: oneYearAgo.toISOString().split("T")[0],
    } as Motorbike

    cy.mount(MapitBikeInfo, { props: { bike: motorbike } })

    // Assert
    cy.get('[aria-label="buyback-price"]').contains("5000,00 €")
  })

  it("calculates prices for motorbike from 2 years", () => {
    // Arrange
    const twoYearsAgo = new Date()
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2)

    const motorbike = {
      id: "MOTO_1",
      modelo: "BMX",
      precioCompra: 10000,
      fechaCompra: twoYearsAgo.toISOString().split("T")[0],
    } as Motorbike

    cy.mount(MapitBikeInfo, { props: { bike: motorbike } })

    // Assert
    cy.get('[aria-label="buyback-price"]').contains("2500,00 €")
  })

  it("calculates prices for motorbike from 3 years", () => {
    // Arrange
    const threeYearsAgo = new Date()
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3)

    const motorbike = {
      id: "MOTO_1",
      modelo: "BMX",
      precioCompra: 10000,
      fechaCompra: threeYearsAgo.toISOString().split("T")[0],
    } as Motorbike

    cy.mount(MapitBikeInfo, { props: { bike: motorbike } })

    // Assert
    cy.get('[aria-label="buyback-price"]').contains("1250,00 €")
  })

  it("calculates prices for motorbike from 10 years", () => {
    // Arrange
    const tenYearsAgo = new Date()
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10)

    const motorbike = {
      id: "MOTO_1",
      modelo: "BMX",
      precioCompra: 10000,
      fechaCompra: tenYearsAgo.toISOString().split("T")[0],
    } as Motorbike

    cy.mount(MapitBikeInfo, { props: { bike: motorbike } })

    // Assert
    cy.get('[aria-label="buyback-price"]').contains("9,77 €")
  })
})
