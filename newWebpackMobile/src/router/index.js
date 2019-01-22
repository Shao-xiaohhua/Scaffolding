import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Video from '@/pages/video'
import Scroll from '@/pages/scroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }
  ]
})
