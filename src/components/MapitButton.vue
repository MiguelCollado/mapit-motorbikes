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
  @apply bg-blue-500 text-white;
  @apply transition-all duration-200 ease-in-out;
  @apply p-3 rounded-lg shadow-lg;
  @apply hover:bg-blue-700;
}
</style>
