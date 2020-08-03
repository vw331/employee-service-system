<!--顶部菜单-->
<template>
  <a-menu mode="horizontal" class="custom-menu"  @click="handleMenuItemClick" :default-selected-keys="[onSelect]">
    <template v-for="item in menuInfo">
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

const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.name" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.name">
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
.custom-menu {
  display: flex;
  flex-direction: row;
  border-bottom: 0;

  > li {
    flex: 1;
    line-height: 56px;
    border-bottom: 0
  }

  > .ant-menu-item , .ant-menu-submenu {
    border-right: 1px solid #f2f2f2;
    padding: 0 30px;
  }
}
</style>