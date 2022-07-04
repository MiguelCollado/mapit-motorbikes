<script  lang="ts" setup="">
import {computed} from "vue";
import type Motorbike from "@/domain/motorbike";

interface Props {
  bike: Motorbike
}

const props = defineProps<Props>()

const yearsFromBuyDate = computed(() => {
  const {fechaCompra} = props.bike;

  return new Date().getFullYear() - new Date(fechaCompra ?? "2022-01-01").getFullYear();
})

const buybackMotorbikePrice = computed(() => {
  const {precioCompra} = props.bike;

  const buybackPrice = (precioCompra ?? 0) / Math.max(1, 2 * yearsFromBuyDate.value);
  return buybackPrice.toFixed(2)
})
</script>

<template>
  <p>
    El valor mostrado a continuación es una estimación de precio de recompra aproximado, es necesario realizar una
    tasación en un taller. Por favor, consulta con tu concesionario para obtener una oferta en firme.
    <br>
    El valor calculado de recompra de su motociclieta {{ props.bike.modelo }} es de:
  </p>
  <h1>{{buybackMotorbikePrice}}€</h1>
  <details>
    <summary>Mostrar detalles</summary>
    <p>
      El valor de compra de tu motocicleta fue de {{ props.bike.precioCompra }}€ y la fecha de compra fue el {{ props.bike.fechaCompra }}.
      Por lo tanto, su valor de venta se ha reducido a 1/{{2 * yearsFromBuyDate}} de su valor ({{buybackMotorbikePrice}}€).
    </p>
  </details>
</template>
