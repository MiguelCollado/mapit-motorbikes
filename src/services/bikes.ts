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

function fetchBike(id: string): Promise<Motorbike> {
  try {
    return fetch(`${import.meta.env.VITE_MAPIT_MOTORBIKE_ENDPOINT}/motos/${id}`)
      .then(response => response.json())
      .then(json => json as Motorbike)
  } catch (error) {
    console.error(error);
    return Promise.resolve({} as Motorbike);
  }
}

export const useBikeService = () => {
  return {
    fetchUserBikes,
    fetchBike
  }
}
