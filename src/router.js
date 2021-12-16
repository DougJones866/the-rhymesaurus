import { createRouter, createWebHistory } from 'vue-router'
const Adjective = () => import ('./views/Adjective.vue')
const Rhymesaurus = () => import ('./views/Rhymesaurus.vue')

// Vue.use(Router)

const router = createRouter({
  history: createWebHistory(),
  routes: [

  { 
    path: '/', component: Adjective,  alias: '/adjective' 
  },

  {
    path: '/home',
    component: Adjective,
    
  },
  {
    path: '/rhymesaurus',
    component: Rhymesaurus,
    
  }
]

})

export default router;
