<script setup>
import { useDropmenuNavbar } from '../composables/Navbar/useDropmenuNavbar.js'
import { ref, onMounted, onUnmounted } from 'vue'
import DarkMode from '../components/DarkMode.vue'

const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useDropmenuNavbar()

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-50 w-full px-4 py-3 transition-all duration-300 bg-forbodylight md:bg-transparent shadow-none dark:!bg-gray-900"
    :class="{ 'md:!bg-forbodylight md:!shadow-sm': scrolled }"
  >
    <div class="flex item-center justify-between">
      <!-- logo -->
      <router-link to="/#home" href="#home" class="flex items-center gap-1">
        <img src="/Logo.png" alt="" class="md:w-12 md:h-12 w-12 h-12" />
        <span class="text-primary text-xl md:text-2xl flex items-center">Willy Candra </span>
      </router-link>

      <!-- menu web -->
      <div class>
        <ul class="hidden md:flex items-stretch gap-x-4">
          <li>
            <router-link
              to="/#home"
              class="inline-block transition-transform duration-300 p-2 hover:scale-95 text-gray-900 hover:text-primary dark:text-gray-300"
              >Beranda</router-link
            >
          </li>
          <li>
            <router-link
              to="/#about"
              class="inline-block transition-transform duration-300 p-2 hover:scale-95 text-gray-900 hover:text-primary dark:text-gray-300"
              >Tentang Saya</router-link
            >
          </li>
          <li>
            <router-link
              to="/#project"
              class="inline-block transition-transform duration-300 p-2 hover:scale-95 text-gray-900 hover:text-primary dark:text-gray-300"
              >Project</router-link
            >
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>

      <!-- menu bagian kanan -->
      <div class="md:hidden">
        <button
          class="focus:rounded-lg focus:ring-2 p-2 dark:text-gray-300"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
        >
          <i class="ri-menu-3-line p-1 text-xl"></i>
        </button>
      </div>
    </div>

    <!-- dropdown -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMobileMenuOpen"
        class="block bg-gray-100 p-3 mt-3 rounded-xl transition-all duration-300 md:hidden dark:bg-gray-800"
        id="navbarDropdown"
      >
        <ul class="flex flex-col gap-y-3">
          <li class="p-2 rounded text-gray-900 dark:text-gray-300 transition-all duration-300">
            <router-link to="/#home" @click="closeMobileMenu" class="">Beranda</router-link>
          </li>
          <li class="p-2 rounded text-gray-900 dark:text-gray-300 transition-all duration-300">
            <router-link to="/#about" @click="closeMobileMenu">Tentang Saya</router-link>
          </li>
          <li class="p-2 rounded text-gray-900 dark:text-gray-300 transition-all duration-300">
            <router-link to="/#project  " @click="closeMobileMenu">Project</router-link>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped></style>
