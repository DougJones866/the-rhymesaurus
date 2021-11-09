import { createRouter, createWebHistory } from 'vue-router'
import Adjective from '../views/Adjective.vue'

// Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Adjective for Noun',
    component: Adjective
  },
  {
    path: '/rhymesaurus',
    name: 'Rhymesaurus',
   // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rhymesaurus.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
