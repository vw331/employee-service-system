<!--顶部菜单-->
<template>
  <a-menu mode="horizontal" class="custom-menu"  @click="handleMenuItemClick" :default-selected-keys="['4']">
    <template v-for="item in menu">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon type="user" />
        <span class="nav-text">{{item.title}}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :menu-info="item" />
    </template>
  </a-menu>
</template>
<script>
import { Menu } from 'ant-design-vue'

const menu = [
  {  title: '首页',  name: 'Main', children: null },
  {  title: '扫描项目',  name: 'Project', children: null },
  {  title: '购买列表',  name: 'Shopping', children: null },
  {  title: '充值余额',  name: 'Projectabc', children: null },
  {  title: '个人信息', name: 'User', children: [
    { title: '修改密码', name: 'abc' },
    { title: '消费记录', name: 'efg' }
  ]},
  {  title: '退出', name: 'exit', children: null },
]

const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.name" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <a-icon type="pie-chart" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.name" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};

export default {
  name: 'TopMenu',
  components: {
    'sub-menu': SubMenu,
  },
  data() {
    return {
      menu
    }
  },
  methods: {
    handleMenuItemClick({ key }) {
      this.$router.push({ name: key })
    }
  }
}
</script>>