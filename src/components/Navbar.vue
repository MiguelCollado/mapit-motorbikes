<script lang="ts" setup>
import {RouterLink} from "vue-router"
import MapitButton from "@/components/MapitButton.vue";

</script>

<template>
  <nav class="flex flex-row items-center p-4 mb-4 bg-gray-100 dark:bg-gray-100/10 rounded-lg w-max shadow-lg dark:shadow-white/30">
    <RouterLink to="/" class="text-black dark:text-white flex items-center">
      <img src="/images/logo.png" class="w-[100px] mr-4">
      <span>Dashboard</span>
    </RouterLink>
    <RouterLink to="/credits" class="ml-4">Créditos</RouterLink>
  </nav>
</template>
