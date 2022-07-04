<script lang="ts" setup>
import {RouterLink} from "vue-router"
import MapitButton from "@/components/MapitButton.vue";

</script>

<template>
  <nav class="pb-6">
    <RouterLink to="/">
      <MapitButton text="Dashboard" type="primary"></MapitButton>
    </RouterLink>
  </nav>
</template>
