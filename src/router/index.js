import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/account',
    component: () => import('@/views/account'),
    redirect: '/account/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/account/Login'),
        meta: {
          title: '登录'
        },
      },
      {
        path: 'reg',
        name: 'Reg',
        component: () => import('@/views/account/Register'),
        meta: {
          title: '注册'
        },
      }
    ]
  },
  {
    path: '/',
    name: 'Base',
    component: BasicLayout,
    redirect: '/main',
    meta: { title: '首页'},
    children: [
      {
        path: '/main',
        name: 'MainIndex',
        component: () => import('@/views/main'),
        children: [
          {
            path: '/',
            name: 'Main',
            component: () => import('@/views/main/Main')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const baseTitle = document.title

router.afterEach((to) => {
  const { title } = to.meta
  if( title ) {
    document.title = `${title} - ${baseTitle}` 
  }else {
    document.title = baseTitle
  } 
})

export default router
