import type Motorbike from "@/domain/motorbike";

async function fetchUserBikes() {
  try {
    const response = await fetch(`${import.meta.env.VITE_MAPIT_MOTORBIKE_ENDPOINT}/motos`)
    const bikes = await response.json() as Motorbike[]

    return bikes ?? []
  } catch (error) {
    console.error(error);
    return [] as Motorbike[];
  }
}

async function fetchBike(id: string) {
  try {
    const response = await fetch(`${import.meta.env.VITE_MAPIT_MOTORBIKE_ENDPOINT}/motos/${id}`)
    const bike = await response.json() as Motorbike

    return bike ?? {} as Motorbike
  } catch (error) {
    console.error(error);
    return {} as Motorbike
  }
}

export const useBikeService = () => {
  return {
    fetchUserBikes,
    fetchBike
  }
}
