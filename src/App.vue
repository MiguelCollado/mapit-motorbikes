<script lang="ts" setup>
import {RouterView} from "vue-router"
import Navbar from "@/components/Navbar.vue";</script>

<template>
  <Suspense>
    <template #default>
      <main>
        <Navbar/>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </main>
    </template>

    <template #fallback>
      <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <div class="spinner"></div>
      </div>
    </template>
  </Suspense>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top: 4px solid #000;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
