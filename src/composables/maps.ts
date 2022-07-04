import {Loader, type LoaderOptions, type google} from 'google-maps';

let googleInstance: google | undefined = undefined

async function init() {
  if (!googleInstance) {
    const options: LoaderOptions = {
      language: 'es'
    };
    const loader = new Loader(import.meta.env.VITE_GOOGLE_MAPS_API_KEY, options);
    googleInstance = await loader.load();
  }
}

function addMarker(element: HTMLElement | undefined, position: google.maps.LatLngLiteral) {
  if (!!element && !!googleInstance) {
    const map = new googleInstance.maps.Map(element, {
      center: position,
      zoom: 8,
    });
    return new googleInstance.maps.Marker({
      position,
      map,
    });
  }
}

export const useGoogleMaps = async () => {
  await init();

  return {
    addMarker,
  }
}
