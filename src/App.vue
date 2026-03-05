<script setup>
import { useRoute } from 'vue-router'
import NavbarWeb from './components/NavbarWeb.vue'
import FooterWeb from './components/FooterWeb.vue'

const route = useRoute()
</script>

<template>
  <!-- Navbar -->
  <NavbarWeb v-if="route.meta.showLayout" />

  <!-- Main Konten -->
  <router-view></router-view>

  <!-- footer -->
  <FooterWeb v-if="route.meta.showLayout" />
</template>
