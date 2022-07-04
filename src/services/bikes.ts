import type Motorbike from "@/domain/motorbike";

function fetchUserBikes(): Promise<Array<Motorbike>> {
  try {
    return fetch(`${import.meta.env.VITE_MAPIT_MOTORBIKE_ENDPOINT}/motos`)
      .then(response => response.json())
      .then(json => json as Array<Motorbike>)
  } catch (error) {
    console.error(error);
    return Promise.resolve([] as Array<Motorbike>);
  }
}

async function fetchBike(id: string) {
  try {
    const response = await fetch(`${import.meta.env.VITE_MAPIT_MOTORBIKE_ENDPOINT}/motos/${id}`)
    const bike = await response.json() as Motorbike

    if (bike !== null && Object.entries(bike).length > 0) {
      return bike
    } else {
      return null
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const useBikeService = () => {
  return {
    fetchUserBikes,
    fetchBike
  }
}
