import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import MovieDetail from '@/view/movie/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: MovieDetail
    }
  ]
})
