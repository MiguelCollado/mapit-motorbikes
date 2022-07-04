<script lang="ts" setup="">
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
  <div class="flex flex-col">
    <p class="mt-3 bg-gray-100 p-4 rounded-lg">
      El valor mostrado a continuación es una estimación de precio de recompra aproximado, es necesario realizar una
      tasación en un taller. Por favor, consulta con tu concesionario para obtener una oferta en firme.
      <br><br>
      El valor calculado de recompra de su motociclieta <strong>{{ props.bike.modelo }} </strong> es de:
      <span class=" text-base  bg-blue-500/10 w-max m-auto px-3 py-2 rounded-lg">{{ buybackMotorbikePrice }}€</span>
    </p>
  </div>
</template>
