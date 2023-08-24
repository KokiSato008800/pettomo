import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import ListPage from '@/pages/ListPage.vue'
import DetailPage from '@/pages/DetailPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    },
  ]
})