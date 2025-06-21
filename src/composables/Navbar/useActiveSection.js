import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection() {
  const activeSection = ref('home')

  const updateActiveSection = () => {
    const sections = document.querySelectorAll('section')
    let current = 'home'

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = section.id
      }
    })

    activeSection.value = current
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection() // langsung cek posisi saat mounted
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return {
    activeSection,
  }
}
