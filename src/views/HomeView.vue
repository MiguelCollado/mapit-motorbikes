<script lang="ts" setup>
import MapitBikeList from "@/components/MapitBikeList.vue";
import {useBikeService} from "@/services/bikes";
import {ref} from "vue";

const {fetchUserBikes} = useBikeService();
const userBikes = ref(await fetchUserBikes())

</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl mt-8">Tus motos</h1>
    <h2 class="text-base mb-4">Aquí puedes ver todas las motos que has adquirido</h2>

    <MapitBikeList :bikes="userBikes"/>
  </div>

</template>
