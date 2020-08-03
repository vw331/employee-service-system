<template>
  <a-layout>
    <a-layout-header class="layout-header">
      <div class="layout-header-top">
        <a-row>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="top">
              <div class="top-left px-2">
                <a class="text-2xl px-4" @click="toggleSidebar" href="javascript:;"><a-icon class="align-middle" type="menu-unfold" /></a> 
              </div>
              <div class="top-center">
                <h3 class="brand text-white">腾飞微自助平台</h3>
              </div>
              <div class="top-right">
                <a-dropdown>
                  <a class="text-2xl px-4" @click="e => e.preventDefault()">
                    <a-icon class="align-middle"  type="more" />
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </div>
            </div>
          </a-col>
          <a-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12" class="text-right">
            <a href="javascript:;" class="px-4"><a-avatar src="http://www.95mn.com/static/index2/assets/images/users/d3.jpg" /></a>
          </a-col>
        </a-row>
      </div>
      <div class="layout-header-menu">
        <top-menu 
          :menuInfo="menu"
          :onSelect="onSelectKey"
          @change="onMenuChange"
        ></top-menu>
      </div>
    </a-layout-header>
    <a-layout-content class="layout-body">
      <a-breadcrumb style="margin: 5px 15px">
        <a-breadcrumb-item v-for="(name, index) in routerPathNames" :key="index">{{name}}</a-breadcrumb-item>
      </a-breadcrumb>
      <div>
        <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer style="textAlign: center">
      Copyright by 腾飞微自助平台
    </a-layout-footer>
    <a-drawer
      title="Basic Drawer"
      placement="left"
      :closable="false"
      :visible="visibleSidebar"
      :maskClosable="true"
      @close="closeSidebar"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </a-layout>
</template>

<script>

import { mapState } from 'vuex'
import TopMenu from './TopMenu'

const menu = [
  {  title: '首页',  name: '/main', children: null },
  {  title: '扫描项目',  name: '/project', children: null },
  {  title: '购买列表',  name: '/shopping', children: null },
  {  title: '充值余额',  name: '/main/recharge', children: null },
  {  title: '个人信息', name: '/user', children: [
    { title: '修改密码', name: '/user/info' },
    { title: '消费记录', name: '/user/purchase-history' }
  ]},
  {  title: '退出', name: '/logout', children: null },
]

export default {
  name: 'BasicLayout',
  components: {
    'top-menu': TopMenu
  },
  data() {
    return {
      menu,
      visibleSidebar: false
    }
  },
  computed: {
    ...mapState({
      routerPathNames: state => state.routerPath.map(item => item.meta.title ).filter(item => item) 
    }),
    onSelectKey: function(){
      console.log( this.$route.path )
      return this.$route.path
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    toggleSidebar() {
      this.visibleSidebar = true
    },
    closeSidebar() {
      this.visibleSidebar = false
    },
    onMenuChange(path) {
      console.log( path )
      this.$router.push(path)
    }
  },
}
</script>

<style lang="less" scoped>
.layout-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  display: none
}
.layout-header {
  padding: 0;
  height: auto;
  background-image: linear-gradient(#2962FF 0 64px, #ffffff 64px 100%)
}
.layout-header-top {
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  //background-color: #2962FF
}
.layout-header-menu {
  height: 56px;
  max-width: 1200px;
  margin: 0 auto;
  //background-color: #ffffff
}
.layout-body {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0
}
.top {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  .top-left, .top-right {
    width: 80px;
    height: 64px;
    display: none
  }
  .top-center {
    flex: 1
  }
}
.brand {
  font-size: 22px;
  padding: 0 15px;
  font-weight: bold
}
@media (max-width: 768px){
  .layout-header-menu {
    display: none
  }
  .top {
    .top-center {
      text-align: center;
    }
    .top-left, .top-right {
      display: block
    }
  }
}
</style>