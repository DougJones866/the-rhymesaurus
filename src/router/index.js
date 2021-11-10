import { createRouter, createWebHistory } from 'vue-router'


// Vue.use(Router)

const routes = [

  { path: '/', redirect: '/Adjective' },

  {
    path: '/adjective',
    name: 'Adjective for Noun',
    component: () => import('../views/Adjective.vue')
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
