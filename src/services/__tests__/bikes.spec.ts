import {describe, it, expect} from "vitest";
import {useBikeService} from "@/services/bikes";
import type {Motorbike} from "@/domain/motorbike";

const bikeA = {
  "id": "MOTO_A",
  "fechaCompra": "2016-10-05",
  "precioCompra": 12000,
  "modelo": "AVR123",
  "nombre": "Favorita",
  "coordenadas": {
    "latitud": 41.7933321,
    "longitud": 2.3943012
  }
} as Motorbike;

describe("Bike Service",  () => {
  it("should return all bikes", async() => {
    const {fetchUserBikes} = useBikeService();

    expect(await fetchUserBikes()).toHaveLength(2);
  })

  it("should return a bike", async () => {
    const {fetchBike} = useBikeService()

    expect(await fetchBike("MOTO_A")).toEqual(bikeA)
  })

  it("should return an empty bike", async () => {
    const {fetchBike} = useBikeService()

    expect(await fetchBike("MOTO_C")).toEqual({})
  })
})
