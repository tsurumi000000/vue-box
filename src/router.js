import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import createroom from './views/Createroom.vue'
import roomindex from './views/roomindex'
import show from './views/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/createroom',
      name: 'createroom',
      component: createroom
    },
    {
      path: '/index',
      component: roomindex
    },
    {
      path: '/index/show',
      component: show,
      meta: {
        requiresAuth: 'true'
      }
    }
  ]
})
