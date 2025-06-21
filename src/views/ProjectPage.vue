<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DataProject from '@/data/project/DataProject'
import DataSkill from '@/data/skill/DataSkill'
import ButtonBg from '@/components/button/ButtonBg.vue'

const route = useRoute()
const router = useRouter()
const project = ref(null)

const fetchProject = () => {
  const projectId = route.params.id
  const foundProject = DataProject.find((p) => p.id.toString() === projectId.toString())

  if (!foundProject) {
    router.push('/error')
    return
  }

  project.value = foundProject
}

const projectSkills = computed(() => {
  if (!project.value || !project.value.tools) return []

  return DataSkill.filter((skill) =>
    project.value.tools.map((tool) => tool.toLowerCase()).includes(skill.name.toLowerCase()),
  )
})

onMounted(fetchProject)
watch(() => route.params.id, fetchProject)
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
      <div class="w-full h-[15rem] md:h-[40rem] overflow-hidden">
        <img :src="project.gambar" class="w-full h-full object-fill rounded" alt="Gambar Awal" />
      </div>

      <!-- deskripsi -->
      <div class="my-3">
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
