import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { Modal } from 'ant-design-vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const baseTitle = document.title
const isPhone = window.isMobile.phone

// 前置守卫
router.beforeEach((to, from, next) => {

  // 如果是手机端访问，则跳转到手机端页面上
  if( isPhone && to.name == 'Main' ){
    next({ name: 'Mobile' })
  }
  

  if( to.path == '/logout' ){
    Modal.confirm({
      title: '确定要退出?',
      onOk() {
        next({ name: 'Login' })
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  }else {
    next()
  }
})

// 后置守卫
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
