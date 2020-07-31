<!--主页-->
<template>
  <div class="page-main-index">
    <div class="gredient-info-bg">
      <h3 class="text-xl text-white mb-4">欢迎访问腾飞微自助平台</h3>
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <dl class="flex items-center justify-center">
            <dt><span class="text-4xl">￥9.54</span></dt>
            <dd class="px-2">
              <p class="text-xl">元</p>
              <p class="text-white text-opacity-75 ">当前账户余额</p>
            </dd>
          </dl>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <dl class="flex items-center justify-center">
            <dt>
              <a-icon class="text-5xl text-white text-opacity-75" type="account-book" />
            </dt>
            <dd class="px-2">
              <p class="text-xl">1</p>
              <p class="text-white text-opacity-75 ">我的扫描数量</p>
            </dd>
          </dl>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <dl class="flex items-center justify-center">
            <dt>
              <a-icon class="text-5xl text-white text-opacity-75" type="smile" />
            </dt>
            <dd class="px-2">
              <p class="text-xl">admin</p>
              <p class="text-white text-opacity-75 ">欢迎光临</p>
            </dd>
          </dl>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <dl class="flex items-center justify-center">
            <dt>
              <a-icon class="text-5xl text-white text-opacity-75" type="alipay-circle" />
            </dt>
            <dd class="px-2">
              <a-button type="default">点击充值</a-button>
            </dd>
          </dl>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scope>
.gredient-info-bg {
  padding: 15px 30px;
  color: #ffffff;
  background: linear-gradient(to right,#41a6f6 0,#425be0 100%);
  border-radius: 5px;
  dl {
    height: 72px
  }
}
</style>