<script setup>
import { ref, computed } from 'vue'
import { useTyping } from '@/composables/Herosection/useTyping.js'
import { ImageAssets } from '@/data/ImageAssets.js'
import ButtonBg from '@/components/button/ButtonBg.vue'
import DataProject from '@/data/project/DataProject.js'
import DataBahasa from '@/data/skill/DataBahasa.js'
import DataFramework from '@/data/skill/DataFramework.js'
import DataDatabase from '@/data/skill/DataDatabase.js'
import DataTools from '@/data/skill/DataTools.js'

const { el } = useTyping(['Software Engineer', 'Backend Developer', 'Frontend Developer'])

const image = ImageAssets

const skillCategories = [
  { label: 'Bahasa Pemrograman', items: DataBahasa },
  { label: 'Framework', items: DataFramework },
  { label: 'Database', items: DataDatabase },
  { label: 'Tools', items: DataTools },
]

const activeFilter = ref('Semua')
const filters = ['Semua', 'Laravel', 'ReactJs']
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Semua') return DataProject
  return DataProject.filter((project) =>
    project.tools.map((t) => t.toLowerCase()).includes(activeFilter.value.toLowerCase()),
  )
})
</script>

<template>
  <div class="pt-16 md:px-16 overflow-hidden relative" id="home">
    <!-- ornamen -->
    <img :src="ImageAssets.desain" class="absolute top-0 left-0 -z-10" alt="" />

    <!-- hero section -->
    <section class="p-2">
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-between gap-y-2 md:gap-x-3"
      >
        <!-- kiri -->
        <div class="md:w-1/2 bg-forbodylight dark:bg-gray-900 transition-all duration-300">
          <h5 class="text-primary text-lg">Hallo, Semua 👋</h5>
          <h2
            class="font-semibold text-2xl md:text-5xl my-1 dark:text-gray-300 transition-all duration-300"
          >
            Kenalin Aku, <span class="text-primary">Willy Candra</span>
          </h2>
          <h4 class="text-xl md:text-4xl dark:text-gray-300 transition-all duration-300">
            Seorang <span ref="el" class="font-semibold text-primary"></span>
          </h4>
          <p
            class="text-justify text-sm md:text-base mt-2 mb-3 dark:text-gray-300 transition-all duration-300"
          >
            Jadi <span class="text-primary">Software Engineer</span> itu kayak jadi arsitek
            sekaligus montir digital. Kadang pusing bongkar pasang logika algoritma yang ribet,
            kadang begadang cuma demi nyari satu <em>bug</em> yang hobi sembunyi. Tapi serunya, kita
            nggak cuma bikin aplikasi jalan, tapi mastiin sistemnya kokoh, efisien, dan siap buat
            masa depan. Kodenya mungkin nggak selalu sempurna di awal, tapi eksplorasi dan perbaikan
            itu bagian dari seni. Pokoknya prinsipku:
            <span class="font-bold">‘Santai Tapi Tidak Lalai’!</span> 😎
          </p>
          <div class="flex items-center gap-x-2">
            <ButtonBg
              text="Hubungi Saya"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=willycandra850@gmail.com"
              target="_blank"
            />
          </div>
        </div>

        <!-- kanan -->
        <div class="md:w-1/2 p-1 flex items-center justify-center">
          <div class="overflow-hidden md:w-[78%]">
            <img :src="image.gambarhero" alt="" class="h-full w-full object-center object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- about -->
    <section class="p-2 md:pt-16 mt-8" id="about">
      <div class="flex flex-col md:flex-row items-center justify-between gap-y-2 md:gap-x-3">
        <!-- kiri -->
        <div class="md:w-1/2 p-1 flex items-center justify-center">
          <div class="overflow-hidden md:w-[80%]">
            <img :src="image.gambarabout" alt="" class="h-full w-full object-center object-cover" />
          </div>
        </div>

        <!-- kanan -->
        <div class="md:w-1/2">
          <!-- deskripsi -->
          <div class="">
            <h5 class="text-primary text-base">Tentang Saya</h5>
            <h2
              class="font-semibold text-2xl md:text-4xl mb-2.5 dark:text-gray-300 transition-all duration-300"
            >
              Yuk Kenalan
            </h2>
            <p
              class="mb-2 md:mb-3 leading-relaxed text-sm bg-forbodylight dark:bg-gray-900 dark:text-gray-300 transition-all duration-300"
            >
              Saya <span class="font-semibold text-primary">Willy Calvin Candra Lay</span>, Akrab
              dipanggil <span class="font-semibold text-primary">Willy</span>, Fullstack Developer
              asal Indonesia dengan latar belakang pendidikan SMK
              <span class="font-medium">Rekayasa Perangkat Lunak</span> yang kini masih menempuh
              kuliah di bidang <span class="font-medium">Teknologi Rekayasa Perangkat Lunak</span>.
              Perjalanan karir saya dimulai dari mengerjakan proyek-proyek kampus hingga berkembang
              ke proyek nyata untuk klien.
            </p>
          </div>

          <!-- skill -->
          <div v-for="category in skillCategories" :key="category.label" class="mb-6">
            <h5 class="text-primary mb-3">{{ category.label }}</h5>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="item in category.items"
                :key="item.id"
                class="group relative flex items-center justify-center p-3 rounded-xl border transition-all duration-300 bg-white border-gray-200 hover:border-primary hover:shadow-md dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-primary dark:hover:shadow-none"
              >
                <!-- Tooltip -->
                <div
                  class="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap bg-gray-800 text-white dark:bg-neutral-600 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
                >
                  {{ item.name }}
                  <!-- Arrow tooltip -->
                  <div
                    class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-neutral-600"
                  ></div>
                </div>

                <img :src="item.image" :alt="item.name" class="w-10 h-10 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- project -->
    <section class="p-2 my-10 md:pt-20" id="project">
      <div class="text-primary text-center">
        <h5 class="text-base">Project</h5>
        <h2
          class="font-semibold text-2xl md:text-4xl mb-2.5 text-black dark:text-gray-300 transition-all duration-300"
        >
          Project - Project
        </h2>
        <p>Sistem atau Website yang telah saya buat dalam berkarir di bidang Web Development.</p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex gap-3 mb-6 mt-5 flex-wrap justify-center">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          class="px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer"
          :class="
            activeFilter === filter
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary dark:bg-neutral-800 dark:text-gray-400 dark:border-neutral-700 dark:hover:border-primary dark:hover:text-primary'
          "
        >
          {{ filter }}
        </button>
      </div>

      <!-- Grid Project -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in filteredProjects"
          :key="item.id"
          class="flex flex-col rounded-2xl border-2 border-primary overflow-hidden transition-all duration-300 bg-white hover:shadow-lg hover:-translate-y-1 dark:bg-transparent dark:text-gray-300 dark:hover:shadow-none"
        >
          <!-- Thumbnail -->
          <div class="w-full h-48 overflow-hidden p-2">
            <img :src="item.thumbnail" :alt="item.projectName" class="w-full object-cover" />
          </div>

          <!-- Content -->
          <div class="flex flex-col flex-1 p-4 gap-2">
            <h3 class="text-lg font-semibold text-primary">
              {{ item.projectName }} - {{ item.role }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.createdAt }}</p>
            <p class="text-sm line-clamp-2 flex-1">{{ item.description }}</p>
            <div class="pt-2">
              <ButtonBg text="Lihat Detail" :href="`/project/${item.id}`" />
            </div>
          </div>
        </div>

        <!-- Fallback jika hasil filter kosong -->
        <div
          v-if="filteredProjects.length === 0"
          class="col-span-full text-center py-16 text-gray-400 dark:text-gray-500"
        >
          <p>Tidak ada project dengan teknologi ini.</p>
        </div>
      </div>
    </section>
  </div>
</template>
