import { createRouter, createWebHistory } from 'vue-router'
import Adjective from '../views/Adjective.vue'

// Vue.use(Router)

const routes = [

  { path: '/', redirect: '/adjective' },

  {
    path: '/adjective',
    name: 'Adjective for Noun',
    component: Adjective
  },
  {
    path: '/rhymesaurus',
    name: 'Rhymesaurus',
    component: () => import('../views/Rhymesaurus.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
