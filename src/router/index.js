import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import adminRouter from './admin'

Vue.use(VueRouter)

 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    movieRouter,
    cinemaRouter,
    mineRouter,
    adminRouter,
    {
      path: '/*',
      redirect:'/movie/nowplaying'
    }
  ]
})

export default router
