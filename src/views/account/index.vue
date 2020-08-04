<!--帐号-->
<template>
  <div class="page-account">
    <a-card :bordered="false" class="shadow-md account-wrap">
      <h3 class="text-2xl font-bold text-gray-800 mb-8" v-html="title"></h3>
      <router-view/>
      <p v-if="this.$route.name === 'Login'"> 还没有账号? 点击 <router-link to="/account/reg">注册</router-link></p>
      <p v-else> 已有帐号? 点击 <router-link to="/account/login">登录</router-link></p>
    </a-card>
  </div>
</template>

<script>
  const title = process.env.VUE_APP_TITLE;
  export default {
    name: 'Account',
    data() {
      return {
        title 
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url('../../assets/auth-bg.jpg') center center no-repeat #F0F5F9;
  }
  .account-wrap {
    width: calc(100% - 15px);
    max-width: 400px;
  }
</style>