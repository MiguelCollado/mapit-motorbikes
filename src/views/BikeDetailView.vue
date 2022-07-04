<script lang="ts" setup>

import {useRoute} from "vue-router";
import {useBikeService} from "@/services/bikes";

const {params} = useRoute();
const {fetchBike} = useBikeService();

const bike = await fetchBike(params.id as string);
</script>

<template>
  <div class="flex flex-col">

  </div>
  <h1>{{ bike.id }}</h1>
  <h1>{{ bike.modelo }}</h1>
  <h1>{{ bike.fechaCompra }}</h1>
  <h1>{{ bike.precioCompra }}</h1>
</template>

<style>

</style>
