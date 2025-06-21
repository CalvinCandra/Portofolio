import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import NotFound from '@/views/Errors/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
    meta: { showLayout: true },
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: ProjectPage,
    meta: { showLayout: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { showLayout: false },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Selalu scroll ke atas kecuali ada hash
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
