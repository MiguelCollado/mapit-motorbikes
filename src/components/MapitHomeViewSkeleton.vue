<script  lang="ts" setup="">
import MapitLoadingSkeleton from "@/components/MapitLoadingSkeleton.vue";
</script>

<template>
  <div class="flex flex-col mt-8">
    <MapitLoadingSkeleton class="w-[50vw] h-[2rem] mb-2" />
    <MapitLoadingSkeleton class="w-[50vw] h-[1.5rem]  mb-4" />
    <MapitLoadingSkeleton class="w-100% h-[400px]" />
  </div>
</template>
