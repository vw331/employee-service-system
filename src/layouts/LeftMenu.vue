<!--侧边菜单-->
<template>
  <a-menu mode="inline" theme="dark" class="left-menu"  @click="handleMenuItemClick" :default-selected-keys="[onSelect]">
    <template v-for="item in menuInfo">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon :type="item.icon" />
        <span class="nav-text">{{item.title}}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.name" :menu-info="item" />
    </template>
  </a-menu>
</template>

<script>
import { Menu } from 'ant-design-vue'

const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.name" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon :type="menuInfo.icon" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.name">
            <a-icon :type="item.icon" />
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
  name: 'LeftMenu',
  components: {
    'sub-menu': SubMenu,
  },
  props: {
    menuInfo: {
      type: Array
    },
    onSelect: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleMenuItemClick({ key }) {
      this.$emit('change', key)
    }
  }
}
</script>

<style lang="less" scoped>
.left-menu {
  height: 100vh
}
</style>