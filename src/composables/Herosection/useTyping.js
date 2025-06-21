import { onMounted, onUnmounted, ref } from 'vue'
import Typed from 'typed.js'

export function useTyped() {
  const el = ref(null)
  const typedInstance = ref(null)

  onMounted(() => {
    if (!el.value) return

    typedInstance.value = new Typed(el.value, {
      strings: ['Halo dari Typed.js!', 'Vue 3 Manual Setup'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })
  })

  onUnmounted(() => {
    if (typedInstance.value) {
      typedInstance.value.destroy()
    }
  })

  return { el }
}
