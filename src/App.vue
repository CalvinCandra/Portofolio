<script setup>
import { useRoute } from 'vue-router'
import NavbarWeb from './components/NavbarWeb.vue'
import FooterWeb from './components/FooterWeb.vue'

const router = useRoute()
</script>

<template>
  <!-- Navbar -->
  <NavbarWeb v-if="router.meta.showLayout" />

  <!-- Main Konten -->
  <router-view></router-view>

  <!-- footer -->
  <FooterWeb v-if="router.meta.showLayout" />
</template>
