<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {useGoogleMaps} from "@/composables/maps";

interface Props {
  latitude: number;
  longitude: number;
}

const props = withDefaults(defineProps<Props>(), {
  latitude: 0,
  longitude: 0,
})

const map = ref<HTMLElement>();

onMounted(async () => {
  const {addMarker} = await useGoogleMaps();
  addMarker(map.value as HTMLElement, {lat: props.latitude, lng: props.longitude})
})

</script>

<template>
  <div ref="map" class="mapit-map w-100 h-[50vh]">
  </div>
</template>

<style>
.mapit-map {
  min-width: 100px;
  min-height: 100px;
}
</style>
