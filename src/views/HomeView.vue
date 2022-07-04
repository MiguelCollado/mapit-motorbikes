<script lang="ts" setup>
import MapitBikeList from "@/components/MapitBikeList.vue";
import {useBikeService} from "@/services/bikes";

const {fetchUserBikes} = useBikeService();

const userBikes = await fetchUserBikes();

</script>

<template>
  <div class="flex flex-col">
    <h1>Tus motos</h1>
    <h2>Aquí puedes ver todas las motos que has adquirido</h2>

    <MapitBikeList :bikes="userBikes" />
  </div>

</template>

<style scoped>
h1 {
  @apply text-2xl;
}

h2 {
  @apply text-base mb-8;
}
</style>
