<script  lang="ts" setup="">

import type Motorbike from "@/domain/motorbike";
import {useRouter} from "vue-router";

interface Props {
  bikes: Motorbike[]
}

const router = useRouter();

const props = defineProps<Props>()

function goToBike(bike: Motorbike) {
  router.push({name: "bike-detail", params: {id: bike.id}})
}

</script>

<template>
  <ul>
    <li @click="goToBike(bike)" class="bg-blue-500/10 dark:bg-blue-500/30 p-5 mb-2 rounded-lg hover:translate-y-[-3px] transition-all hover:bg-blue-200 shadow-md hover:shadow-lg dark:shadow-transparent" v-for="bike in props.bikes">
        <div class="flex flex-row items-center">
          <span>{{ bike.id }}</span>
          <span class="ml-4 bg-gray-400 px-3 rounded-lg text-white font-medium">{{ bike.modelo }}</span>
        </div>
    </li>
  </ul>
</template>
