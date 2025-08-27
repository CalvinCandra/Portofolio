import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DataProject from '@/data/project/DataProject'
import DataBahasa from '@/data/skill/DataBahasa'
import DataFramework from '@/data/skill/DataFramework'
import DataDatabase from '@/data/skill/DataDatabase'
import DataTools from '@/data/skill/DataTools'

export function useProject() {
  const route = useRoute()
  const router = useRouter()
  const project = ref(null)
  let DaftarSkill = [...DataBahasa, ...DataFramework, ...DataDatabase, ...DataTools]

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
    return DaftarSkill.filter((skill) =>
      project.value.tools.map((tool) => tool.toLowerCase()).includes(skill.name.toLowerCase()),
    )
  })

  onMounted(fetchProject)
  watch(() => route.params.id, fetchProject)

  return {
    project,
    projectSkills,
  }
}
