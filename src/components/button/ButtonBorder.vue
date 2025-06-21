<script setup>
const props = defineProps({
  text: String,
  target: String,
  href: {
    type: String,
    default: '#',
  },
})
</script>

<template>
  <a
    href="{{ href }}"
    target="{{ target }}"
    class="px-6 py-1.5 rounded bg-white dark:bg-gray-900 dark:text-gray-300 text-black border-2 border-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
    >{{ text }}</a
  >
</template>
