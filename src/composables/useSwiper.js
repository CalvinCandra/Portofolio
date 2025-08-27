import { ref } from 'vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export function useSwiper() {
  const thumbsSwiper = ref(null)

  const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
  }

  const modules = [FreeMode, Navigation, Thumbs]

  return {
    thumbsSwiper,
    setThumbsSwiper,
    modules,
  }
}
