<script lang="ts" setup>
import {RouterLink} from "vue-router"</script>

<template>
  <nav class="flex flex-row items-center p-4 mb-4 bg-blue-100 dark:bg-blue-100/20 rounded-xl w-full md:w-max">
    <RouterLink to="/" class="text-black dark:text-white flex items-center">
      <img src="/images/logo.png" class="w-[100px] mr-4">
      <span>Dashboard</span>
    </RouterLink>
    <RouterLink to="/credits" class="ml-4">Créditos</RouterLink>
  </nav>
</template>
