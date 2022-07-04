<script  lang="ts" setup="">

type ButtonType = 'primary' | 'success' | 'error'

interface Props {
  text: string
  type: ButtonType
}

const props = defineProps<Props>()

</script>

<template>
  <button type="button" :class="props.type">{{ props.text }}</button>
</template>

<style>
.primary {
  @apply bg-blue-400 text-white;
  @apply p-3 rounded-lg shadow-lg;
  @apply hover:bg-blue-700;

  transition: all 0.2s ease-in-out;
}
</style>
