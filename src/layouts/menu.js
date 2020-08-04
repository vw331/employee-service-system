const menu = [
  {  title: '首页', icon: 'home', name: '/main', children: null },
  {  title: '扫描项目', icon: 'project',  name: '/project', children: null },
  {  title: '购买列表', icon: 'container', name: '/shopping', children: null },
  {  title: '充值余额',  icon: 'pay-circle', name: '/main/recharge', children: null },
  {  title: '个人信息', icon: 'user', name: '/user', children: [
    { title: '修改密码', icon: 'tool', name: '/user/info' },
    { title: '消费记录', icon: 'transaction' ,name: '/user/purchase-history' }
  ]},
  {  title: '退出', icon: 'logout' ,name: '/logout', children: null },
]

export default menu