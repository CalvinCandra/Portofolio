<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'
import { ImageAssets } from '@/data/ImageAssets.js'
import ButtonBg from '@/components/button/ButtonBg.vue'
import DataSkill from '@/data/skill/DataSkill.js'
import DataProject from '@/data/project/DataProject.js'

// set Image
const image = ImageAssets

// set animasi typing
const el = ref(null)
onMounted(() => {
  new Typed(el.value, {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  })
})
</script>

<template>
  <div class="pt-16 md:px-16 overflow-hidden relative">
    <!-- ornamen -->
    <img :src="ImageAssets.desain" class="absolute top-0 left-0 -z-10" alt="" />

    <!-- hero section -->
    <section class="p-2" id="home">
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
            Jadi <span class="text-primary">Fullstack Developer </span> itu kayak jadi tukang serba
            bisa, kadang pusing mikirin database yang rewel, kadang keteteran bikin UI yang enak
            diliat. Tapi serunya, kita bisa ngeliat ide jadi nyata dari nol sampai jalan. Kodenya
            mungkin kadang berantakan, tapi yang penting jalan dulu, beresin belakangan. Pokoknya
            prinsipku: <span class="font-bold">‘Coding now, crying later’!</span> 😆
          </p>
          <div class="flex items-center gap-x-2">
            <ButtonBg
              text="Lihat Cv"
              href="/src/assets/cv/CV_WILLY CALVIN CANDRA LAY.pdf"
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
    <section class="p-2 md:pt-10 mt-8" id="about">
      <div class="flex flex-col md:flex-row items-center justify-between gap-y-2 md:gap-x-3">
        <!-- kiri -->
        <div class="md:w-1/2 p-1 flex items-center justify-center">
          <div class="overflow-hidden md:w-[78%]">
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
              class="mb-2 md:mb-6 leading-relaxed text-sm md:text-base bg-forbodylight dark:bg-gray-900 dark:text-gray-300 transition-all duration-300"
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
          <h5 class="text-primary text-base">Skill</h5>
          <div class="w-full bg-forbodylight dark:bg-gray-900 transition-all duration-300">
            <div class="mt-1 md:mt-5 flex items-stretch flex-wrap gap-5">
              <!-- card -->
              <div
                v-for="item in DataSkill"
                :key="item.id"
                class="w-[15%] md:w-[9%] border-2 border-primary rounded p-0.5"
              >
                <!-- if status 0 -->
                <div class="aspect-square w-full flex items-center justify-center">
                  <!-- gambar -->
                  <div class="overflow-hidden p-0.5">
                    <img :src="item.image" class="" alt="" />
                  </div>
                </div>
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

      <!-- bagian body project -->
      <div class="mx-auto flex items-center gap-6 md:g-2 lg:gap-6.5 flex-wrap my-5">
        <!-- card -->
        <div
          v-for="item in DataProject"
          class="w-full md:w-[48%] bg-forbodylight dark:bg-gray-900 dark:text-gray-300 transition-all duration-300 p-4 rounded-lg border-2 border-primary"
          :key="item.id"
        >
          <div class="mb-7">
            <!-- gambar -->
            <div class="overflow-hidden">
              <img
                :src="item.gambar"
                alt=""
                class="w-full md:object-fill rounded-lg h-48 md:h-72"
              />
            </div>

            <!-- header -->
            <div class="my-5">
              <h3 class="text-2xl md:text-4xl font-semibold text-primary">
                {{ item.nama_project }}
              </h3>
              <p class="text-sm text-gray-400">{{ item.dibuat }}</p>
            </div>

            <!-- deskirpsi -->
            <p class="text-base line-clamp-2">{{ item.deskripsi }}</p>
          </div>

          <!-- button card -->
          <div class="">
            <ButtonBg text="Lihat Detail" :href="`/project/${item.id}`" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
