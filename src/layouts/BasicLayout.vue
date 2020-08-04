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
                <h3 class="brand text-white">{{title}}</h3>
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
            <a href="javascript:;" class="px-4"><a-avatar :src="user.avatar" /></a>
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
        <transition>
          <router-view/>
        </transition>
      </div>
    </a-layout-content>
    <a-layout-footer style="textAlign: center">
      Copyright by {{title}}
    </a-layout-footer>
    <a-drawer
      placement="left"
      :closable="false"
      :visible="visibleSidebar"
      :maskClosable="true"
      @close="closeSidebar"
      :bodyStyle="{padding: 0}"
    >
      <left-menu
        :menuInfo="menu"
        :onSelect="onSelectKey"
        @change="onMenuChange"
      ></left-menu>
    </a-drawer>
  </a-layout>
</template>

<script>

import { mapState } from 'vuex'
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'
import menu from './menu'

const title = process.env.VUE_APP_TITLE;

export default {
  name: 'BasicLayout',
  components: {
    'top-menu': TopMenu,
    'left-menu': LeftMenu
  },
  data() {
    return {
      title,
      menu,
      visibleSidebar: false,
      user: {
        avatar: require('@/assets/d3.jpg')
      }
    }
  },
  computed: {
    ...mapState({
      routerPathNames: state => state.routerPath.map(item => item.meta.title ).filter(item => item) 
    }),
    onSelectKey: function(){
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
      if( this.$route.path !== path ){
        this.$router.push(path)
      }
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