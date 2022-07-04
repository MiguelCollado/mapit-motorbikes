<script lang="ts" setup>
import {RouterView} from "vue-router"
import Navbar from "@/components/Navbar.vue";</script>

<template>
  <Navbar />

  <Suspense>
    <template #default>
      <main class="w-100 h-100 relative">
        <RouterView />
      </main>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
