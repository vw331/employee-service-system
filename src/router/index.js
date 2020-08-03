import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'
import store from '../store'

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
    children: [
      {
        path: '/main',
        component: () => import('@/views/main'),
        meta: { title: '首页'},
        children: [
          {
            path: '/',
            name: 'Main',
            component: () => import('@/views/main/Main'),
            meta: { keepAlive: true }
          },{
            path: 'notice/:id',
            name: 'Notice',
            component: () => import('@/views/main/Notice'),
            meta: { title: '公告' }
          },{
            path: 'recharge',
            name: 'Recharge',
            component: () => import('@/views/main/Recharge'),
            meta: { title: '充值' }
          }
        ]
      },{
        path: '/project',
        component: () => import('@/views/project'),
        meta: { title: '项目'},
        children: [
          {
            path: '/',
            name: 'Project',
            component: () => import('@/views/project/Project'),
            meta: { title: '项目中心', keepAlive: true }
          },{
            path: 'buy/:id',
            name: 'Buy',
            component: () => import('@/views/project/Buy'),
            meta: { title: '下单' }
          }
        ]
      },{
        path: '/shopping', 
        component: () => import('@/views/shopping'),
        meta: { title: '购买列表' },
        children: [
          {
            path: '/',
            name: 'Shopping',
            component: () => import('@/views/shopping/List'),
            meta: { title: '购买列表', keepAlive: true }
          }
        ]
      },{
        path: '/user',
        component: () => import('@/views/user'),
        redirect: '/user/info',
        children: [
          {
            path: 'info',
            name: 'UserInfo',
            component: () => import('@/views/user/Info'),
            meta: { title: '我的信息' }
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
  store.commit('updateRoute', to.matched)
  if( title ) {
    document.title = `${title} - ${baseTitle}` 
  }else {
    document.title = baseTitle
  } 
})

export default router
