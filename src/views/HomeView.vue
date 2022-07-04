<script lang="ts" setup>

import {useBikeService} from "@/services/bikes";

const { fetchUserBikes } = useBikeService();

const userBikes = await fetchUserBikes();

</script>

<template>
  <ul>
    <li v-for="bike in userBikes">
      <RouterLink :to="`/bikes/${bike.id}`">{{bike.modelo}}</RouterLink>
    </li>
  </ul>
</template>
