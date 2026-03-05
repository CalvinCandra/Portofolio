import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js'

export function useTyping(strings = []) {
  const el = ref(null)
  let typedInstance = null

  onMounted(() => {
    typedInstance = new Typed(el.value, {
      strings,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    })
  })

  onUnmounted(() => {
    typedInstance?.destroy()
  })

  return { el }
}
