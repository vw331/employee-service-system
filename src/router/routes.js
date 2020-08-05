import BasicLayout from '@/layouts/BasicLayout'
import MobileLayout from '@/layouts/MobileLayout'

export const routes = [
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
  },{  //移动端
    path: '/m',  
    name: 'Mobile',
    component: MobileLayout,
    redirect: '/m/shopping-list',
    children: [
      {
        path: 'shopping-list',
        name: 'ShoppingList',
        component: () => import('@/views/m.project/ShoppingList'),
        meta: {
          title: '购买列表'
        }
      }
    ]
  },{
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
          },{
            path: ':id/scan-records',
            name: 'ScanRecords',
            component: () => import('@/views/shopping/ScanRecords'),
            meta: { title: '扫描记录' }
          },{
            path: ':id/api-doc',
            name: 'ApiDoc',
            component: () => import('@/views/shopping/ApiDoc'),
            meta: { title: 'API接口'}
          }
        ]
      },{
        path: '/user',
        component: () => import('@/views/user'),
        redirect: '/user/info',
        meta: { title: '我的信息' },
        children: [
          {
            path: 'info',
            name: 'UserInfo',
            component: () => import('@/views/user/Info'),
            meta: { title: '我的信息' }
          },{
            path: 'purchase-history',
            name: 'purchaseHistory',
            component: () => import('@/views/user/PurchaseHistory'),
            meta: { title: '消费记录' }
          }
        ]
      }
    ]
  }
]
