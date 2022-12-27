import { createRouter, createWebHistory } from 'vue-router'
import PaginaHome from '@/views/PaginaHome'
import PaginaAboutMe from '@/views/PaginaAboutMe'
import PaginaPortfolio from '@/views/PaginaPortfolio'
import PaginaBlog from '@/views/PaginaBlog'
import PaginaContato from '@/views/PaginaContato'

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
  {
    path: '/blog',
    name: 'blog',
    component: PaginaBlog
  },
  {
    path: '/contato',
    name: 'contato',
    component: PaginaContato
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
