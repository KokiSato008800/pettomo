import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import ListPage from '@/pages/ListPage.vue'
import DetailPage from '@/pages/DetailPage.vue'
import ChatPage from '@/pages/ChatPage.vue'
import IndexPage from '@/pages/IndexPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/chat',
      name: 'ChatPage',
      component: ChatPage
    },
  ]
})