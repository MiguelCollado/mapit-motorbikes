<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router"
import { useBikeService } from "@/services/bikes"
import { onBeforeMount, ref } from "vue"
import MapitMap from "@/components/MapitMap.vue"
import MapitBikeInfo from "@/components/MapitBikeInfo.vue"
import MapitButton from "@/components/MapitButton.vue"
import MapitModal from "@/components/MapitModal.vue"
import type { Motorbike } from "@/domain/motorbike"
import type { ButtonType } from "@/types"

const { params } = useRoute()
const router = useRouter()
const { fetchBike } = useBikeService()

const bike = ref({} as Motorbike)
const isModalOpen = ref(false)
const isModalLoading = ref(false)
const openModalButtonType = ref("primary" as ButtonType)

const fetchedBike = await fetchBike(params.id as string)

onBeforeMount(() => {
  if (Object.entries(fetchedBike).length > 0) {
    bike.value = fetchedBike
  } else {
    router.push({ name: "not-found" })
  }
})

function openModal() {
  isModalLoading.value = true

  // Hacemos un timeout para simular una llamada API
  setTimeout(() => {
    isModalOpen.value = true
    isModalLoading.value = false
    openModalButtonType.value = "success"
  }, 1500)
}

function closeModal() {
  isModalOpen.value = false
  openModalButtonType.value = "primary"
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row items-center py-3">
      <h1>{{ bike.nombre }}</h1>
      <span class="model">{{ bike.modelo }}</span>
      <RouterLink
        to="/"
        class="ml-auto flex items-center bg-gray-100/20 px-3 py-1 rounded-full"
        aria-label="return-button"
      >
        <span class="mr-2 mb-[2px]">Cerrar</span>
        <button class="close-button w-[18px] h-[18px]" />
      </RouterLink>
    </div>

    <!-- Hardcoded Mapit Iot Offices  -->
    <MapitMap
      :latitude="bike.coordenadas.latitud"
      :longitude="bike.coordenadas.longitud"
    />
    <MapitBikeInfo :bike="bike" />

    <MapitButton
      @click="openModal"
      :loading="isModalLoading"
      text="Solicitar cita"
      :type="openModalButtonType"
      class="ml-auto mt-2"
      aria-label="appointment-button"
    />
    <MapitModal
      :open="isModalOpen"
      @close-modal="closeModal"
      title="Cita solicitada"
      description="Su concesionario se pondrá en contacto pronto, para concertar cita."
    />
  </div>
</template>

<style>
h1 {
  @apply text-2xl;
}

.model {
  @apply text-base font-medium ml-4 bg-gray-400 px-3 text-white rounded-lg w-max;
}

.close-button {
  position: relative;
}

.close-button:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  background: black;
  border-radius: 3px;

  transform: translate(0, -50%) rotate(45deg);
}

.close-button:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 3px;
  height: 100%;
  background: black;
  border-radius: 3px;

  transform: translate(-50%, 0) rotate(45deg);
}

@media (prefers-color-scheme: dark) {
  .close-button:before {
    background: white;
  }

  .close-button:after {
    background: white;
  }
}
</style>
