<!--移动端layout-->
<template>
  <div class="p-4">
    <div v-show="this.$route.meta.showGlobalHeader" class="bg-indigo-200	text-center p-4 mb-2">
      <h3 class="text-md text-blue-800"><a-badge color="orange"/>欢迎使用{{title}}</h3>
      <div class="mt-4">
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item> 
              <router-link to="/logout"><a-icon type="user" /> 退出帐号</router-link>
            </a-menu-item>
          </a-menu>
          <a-button type="primary" ghost> 更多操作 <a-icon type="down" /> </a-button>
        </a-dropdown>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
const title = process.env.VUE_APP_TITLE;

export default {
  name: 'MobileLayout',
  data() {
    return {
      title
    }
  },
  mounted() {
    console.log( this.$route.meta )
  },
  methods: {
    handleMenuClick() {

    }
  }
}
</script>

<style lang="less" scoped>

</style>