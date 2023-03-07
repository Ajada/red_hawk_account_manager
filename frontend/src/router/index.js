import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from '@/modules/auth/routes/index.js'
import dashRoutes from '@/modules/dashboard/routes/index.js'
import settRoutes from '@/modules/settings/routes/index.js'

Vue.use(VueRouter)

const routes = [...authRoutes, ...dashRoutes, ...settRoutes]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
