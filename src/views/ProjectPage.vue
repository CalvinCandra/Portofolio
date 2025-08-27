<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { useProject } from '@/composables/useProject'
import { useSwiper } from '@/composables/useSwiper'

const { project, projectSkills } = useProject()
const { thumbsSwiper, setThumbsSwiper, modules } = useSwiper()
</script>

<template>
  <section class="pt-16 px-2 md:px-10 overflow-hidden" v-if="project">
    <div class="py-5">
      <!-- judul -->
      <div class="my-5">
        <h1 class="text-3xl md:text-5xl text-primary font-semibold">{{ project.nama_project }}</h1>
        <p class="text-sm md:text-lg text-gray-400 mt-1">{{ project.dibuat }}</p>
      </div>

      <!-- tampilkan gambar -->
      <div class="">
        <h3 class="text-2xl font-semibold text-primary">Preview</h3>
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :loop="true"
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="mySwiper2"
        >
          <swiper-slide v-for="(img, index) in project.img_lis" :key="index">
            <img :src="img.gambar" class="w-full h-[13rem] md:h-[45rem] object-contain" />
          </swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          :loop="true"
          :breakpoints="{
            300: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
          }"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(img, index) in project.img_lis" :key="index" class="mt-2 md:mt-0.5">
            <img :src="img.gambar" class="w-full object-contain" />
          </swiper-slide>
        </swiper>
      </div>

      <!-- deskripsi -->
      <div class="mt-8">
        <h3 class="text-2xl mb-1 md:mb-0 font-semibold text-primary">Deskripsi Project</h3>
        <p class="text-sm md:text-base dark:text-gray-300">
          {{ project.deskripsi }}. Yang dikerjakan secara
          <span class="text-primary">{{ project.dikerjakan }}.</span>
        </p>
      </div>

      <!-- fitur -->
      <div class="mt-8">
        <h3 class="text-2xl font-semibold text-primary">Fitur Project</h3>
        <ol class="list-decimal pl-5 dark:text-gray-300">
          <li v-for="(item, index) in project.fitur" :key="index" class="py-1 text-sm md:text-base">
            {{ item }}
          </li>
        </ol>
      </div>

      <!-- tools -->
      <div class="my-8">
        <h3 class="text-2xl font-semibold mb-2 text-primary">Tools yang Digunakan</h3>
        <div class="flex items-center gap-8 dark:text-gray-300">
          <div
            v-for="(skill, index) in projectSkills"
            :key="index"
            class="flex flex-col items-center"
          >
            <img :src="skill.image" class="w-16 h-16 object-contain" :alt="skill.name" />
            <span class="mt-2 text-sm capitalize">{{ skill.name }}</span>
          </div>
        </div>
      </div>

      <!-- tombol back -->
      <div class="mb-5">
        <router-link
          to="/#project"
          class="px-6 py-1.5 rounded bg-primary border-2 border-primary hover:border-primary-hover hover:bg-primary-hover text-white transition-all duration-300"
          >Kembali</router-link
        >
      </div>
    </div>
  </section>
</template>
