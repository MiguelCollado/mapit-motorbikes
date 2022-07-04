import MapitBikeList from "@/components/MapitBikeList.vue";
import type Motorbike from "@/domain/motorbike";

describe('MapitBikeList', () => {
  it('renders correctly', () => {
    const motorbikes = [
      {
        id: "MOTO_1",
        modelo: "BMX",
        precioCompra: 100,
        fechaCompra: "2020-01-01",
      },
      {
        id: "MOTO_2",
        modelo: "YAMAHA",
        precioCompra: 200,
        fechaCompra: "2010-01-01",
      }
    ] as Motorbike[]

    cy.mount(MapitBikeList, {props: {bikes: motorbikes}})
  })
})
