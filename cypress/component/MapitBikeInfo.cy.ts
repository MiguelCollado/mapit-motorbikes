import type Motorbike from "@/domain/motorbike";
import MapitBikeInfo from "@/components/MapitBikeInfo.vue";

describe('MapitBikeInfo', () => {
  it('renders correctly', () => {
    // Arrange
    const motorbike = {
        id: "MOTO_1",
        modelo: "BMX",
        precioCompra: 100,
        fechaCompra: "2020-01-01",
      } as Motorbike

    cy.mount(MapitBikeInfo, {props: {bike: motorbike}})
  })
})
