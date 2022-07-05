<script lang="ts" setup="">
import { computed } from "vue"
import type { ButtonType } from "@/types"

interface Props {
  text: string
  type: ButtonType
  loading: boolean
}

const props = defineProps<Props>()

const btnClasses = computed(() => {
  return [props.type, props.loading ? "loader" : ""]
})
</script>

<template>
  <button type="button" :class="btnClasses" :disabled="props.loading">
    {{ props.text }}
  </button>
</template>

<style scoped>
button:before {
  content: "";
  position: absolute;
  opacity: 0;
}

.primary {
  @apply bg-blue-400 text-white;
  @apply py-2 rounded-lg shadow-lg;
  @apply hover:bg-blue-900;
  @apply select-none;

  transition: all 0.2s ease-in-out;

  padding-left: 12px;
  padding-right: 12px;
}

.success {
  @apply bg-emerald-500 text-white;
  @apply py-2 rounded-lg shadow-lg;
  @apply hover:bg-emerald-700;

  transition: all 0.2s ease-in-out;

  padding-left: 12px;
  padding-right: 12px;
}

.error {
  @apply bg-red-400 text-white;
  @apply py-2 rounded-lg shadow-lg;
  @apply hover:bg-red-700;
  transition: all 0.2s ease-in-out;
  padding-left: 12px;
  padding-right: 12px;
}
.loader {
  position: relative;
  padding-left: 48px;
}

.loader:before {
  content: "";
  position: absolute;
  opacity: 1;
  left: 12px;
  top: 50%;
  width: 24px;
  height: 24px;
  border: 3px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  transform: translate(0, -50%);
  transition: opacity 0.2s ease-in-out;
}

@keyframes rotation {
  0% {
    transform: translate(0, -50%) rotate(0deg);
  }
  100% {
    transform: translate(0, -50%) rotate(360deg);
  }
}
</style>
