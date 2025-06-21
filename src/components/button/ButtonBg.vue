<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  text: String,
  href: {
    type: String,
    default: '#',
    validator: (value) => !value.includes('#') // Pastikan tidak ada hash
  },
  isExternal: {
    type: Boolean,
    default: false,
  }
})

const isInternalLink = computed(() => {
  return !props.isExternal && props.href.startsWith('/')
})
</script>

<template>
  <RouterLink
    v-if="isInternalLink"
    :to="{ path: href, hash: '' }"
    class="px-6 py-1.5 rounded bg-primary border-2 border-primary hover:border-primary-hover hover:bg-primary-hover text-white transition-all duration-300"
  >
    {{ text }}
  </RouterLink>

  <a
    v-else
    :href="href"
    target="_blank"
    class="px-6 py-1.5 rounded bg-primary border-2 border-primary hover:border-primary-hover hover:bg-primary-hover text-white transition-all duration-300"
  >
    {{ text }}
  </a>
</template>