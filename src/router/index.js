import { createRouter, createWebHistory } from 'vue-router'
import PaginaHome from '@/views/PaginaHome'
import PaginaAboutMe from '@/views/PaginaAboutMe'
import PaginaPortfolio from '@/views/PaginaPortfolio'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PaginaHome
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: PaginaAboutMe
  },
  {
    path: '/portfolio',
    name:'portfolio',
    component: PaginaPortfolio
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
