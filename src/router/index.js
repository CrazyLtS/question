import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Face' },
    component: Home,
    children: [
      {
        path: 'face',
        name: 'Face',
        component: () => import('components/Face.vue')
      },
      {
        path: 'game',
        name: 'Game',
        component: () => import('components/Game.vue')
      },
      {
        path: 'scores',
        name: 'Scores',
        component: () => import('components/Scores.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
