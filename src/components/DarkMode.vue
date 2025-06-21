<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  const html = document.documentElement

  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Perbaiki onMounted untuk handle null localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <label class="inline-flex items-center cursor-pointer p-2" @click="toggleDarkMode">
    <input type="checkbox" class="sr-only peer" :checked="isDark" @change="toggleDarkMode" />
    <div
      class="relative w-11 h-6 bg-gray-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
    ></div>
    <span class="ms-3 text-sm font-medium">
      {{ isDark ? '☀️' : '🌙' }}
    </span>
  </label>
</template>
