<script  lang="ts" setup="">

import type Motorbike from "@/domain/motorbike";

interface Props {
  bikes: Motorbike[]
}

const props = defineProps<Props>()

</script>

<template>
  <ul class="border-2">
    <li v-for="bike in props.bikes">
      <RouterLink :to="`/bikes/${bike.id}`">{{ bike.modelo }}</RouterLink>
    </li>
  </ul>
</template>
