<script lang="ts" setup="">
import { computed } from "vue"
import type { Motorbike } from "@/domain/motorbike"

interface Props {
  bike: Motorbike
}

const props = defineProps<Props>()

const yearsFromBuyDate = computed(() => {
  const { fechaCompra } = props.bike

  let diff = (new Date().getTime() - new Date(fechaCompra).getTime()) / 1000
  diff /= 60 * 60 * 24
  return Math.abs(Math.round(diff / 365.25))
})

const buybackMotorbikePrice = computed(() => {
  const { precioCompra } = props.bike

  const buybackPrice = (precioCompra ?? 0) / Math.max(1, 2 ** yearsFromBuyDate.value)

  const formatter = new Intl.NumberFormat('es', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(buybackPrice)
})
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col mt-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <p>
        El valor mostrado a continuación es una estimación de precio de recompra
        aproximado, es necesario realizar una tasación en un taller. Por favor,
        consulta con tu concesionario para obtener una oferta en firme.
        <br /><br />
        El valor calculado de recompra de su motociclieta
        <strong aria-label="motorbike-model">{{ props.bike.modelo }} </strong> es de:
      </p>
      <span
        class="text-2xl bg-blue-500/10 dark:bg-blue-200/30 w-max m-auto px-3 py-2 rounded-lg mt-3"
        aria-label="buyback-price"
      >
        {{ buybackMotorbikePrice }} €
      </span>
    </div>
  </div>
</template>
