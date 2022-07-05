export interface Motorbike {
  id: string
  nombre: string
  fechaCompra: string
  precioCompra: number
  modelo: string
  coordenadas: Coordinates
}

export interface Coordinates {
  latitud: number
  longitud: number
}
