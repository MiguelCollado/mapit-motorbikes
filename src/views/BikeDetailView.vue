<script lang="ts" setup>

import {useRoute} from "vue-router";
import {useBikeService} from "@/services/bikes";
import {computed, ref} from "vue";
import MapitMap from "@/components/MapitMap.vue";
import MapitBikeInfo from "@/components/MapitBikeInfo.vue";
import MapitButton from "@/components/MapitButton.vue";
import MapitModal from "@/components/MapitModal.vue";

const {params} = useRoute();
const {fetchBike} = useBikeService();

const bike = ref(await fetchBike(params.id as string));
const isModalOpen = ref(false);
const isModalLoading = ref(false);
const openModalButtonType = ref("primary");

function openModal() {

  isModalLoading.value = true;
  setTimeout(() => {
    isModalOpen.value = true;
    isModalLoading.value = false;
    openModalButtonType.value = "success";
  }, 1500);
}

function closeModal() {
  isModalOpen.value = false;
  openModalButtonType.value = "primary";
}
</script>

<template>
  <div class="flex flex-col">

    <div class="flex flex-row items-center py-3">
      <h1>{{bike.id}}</h1>
      <span class="model">{{bike.modelo}}</span>
      <RouterLink to="/"  class="ml-auto flex items-center">
        <span class="mr-2 mb-[2px]">Cerrar</span>
        <button class="close-button w-[18px] h-[18px] " />
      </RouterLink>
    </div>

    <!-- Hardcoded Mapit Iot Offices  -->
    <MapitMap :latitude="41.39715905370612" :longitude="2.181240404125038" />
    <MapitBikeInfo :bike="bike" />

    <MapitButton @click="openModal" :loading="isModalLoading" text="Solicitar cita" :type="openModalButtonType" class="ml-auto mt-2" />
  </div>
  <MapitModal
    :open="isModalOpen" @close-modal="closeModal"
    title="Cita solicitada"
    description="Su concesionario se pondrá en contacto pronto, para concertar cita."
  />
</template>

<style>
h1 {
  @apply text-2xl;
}
.model {
  @apply text-xs ml-3 px-2 bg-blue-100 dark:bg-gray-100/10 rounded-lg w-max;
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
</style>
