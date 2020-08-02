<!--主页-->
<template>
  <div class="page-main-index">

    <div class="gredient-info-bg">
      <h3 class="text-xl text-white mb-4">欢迎访问腾飞微自助平台</h3>
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <dl class="flex items-center">
            <dt><span class="text-4xl">￥9.54</span></dt>
            <dd class="px-2">
              <p class="text-xl">元</p>
              <p class="text-white text-opacity-75 ">当前账户余额</p>
            </dd>
          </dl>
        </a-col>
        <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <dl class="flex items-center">
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
          <dl class="flex items-center">
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
          <dl class="flex items-center">
            <dt>
              <a-icon class="text-5xl text-white text-opacity-75" type="alipay-circle" />
            </dt>
            <dd class="px-2">
              <router-link :to="{name: 'Recharge'}"><a-button type="default">点击充值</a-button></router-link>
            </dd>
          </dl>
        </a-col>
      </a-row>
    </div>

    <a-row class="m-4" :gutter="16">
      <a-col :sm="24" :md="16">
        <a-card title="通知公告" :bordered="false" class="w-full">
          <a-list
            item-layout="horizontal"
            :data-source="data"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta>
                <router-link slot="title" :to="{name: 'Notice', params: { id: item.id}}">{{item.title}}</router-link>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
              <div slot="extra" class="text-xs text-gray-600">{{item.createTime}}</div>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :sm="24" :md="8">  
        <div class="bg-white">
          <div class="bg-indigo-400 text-center p-8">
            <a-icon class="text-6xl text-white" type="qrcode" />
            <h3 class="text-4xl text-white">扫码工具</h3>
            <p class="text-lg text-white">请使用钉钉软件扫描进度</p>
          </div>
          <div class="p-4">
            <canvas ref="qrcode" style="margin: 0 auto"></canvas>
          </div>
          <div class="bg-teal-400 text-center p-2 text-white">务必使用【钉钉】APP扫码进入</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import QRCode from 'qrcode'
const data = new Array(10).fill({
  title: '天龙目前是下机号，需要新号私聊客服',
  createTime: '2020-07-12 23:12:33'
}).map((item, index) => ({
  ...item,
  id: index
}))
export default {
  name: 'Main',
  data() {
    return {
      data
    }
  },
  mounted() {
    const $qrdom = this.$refs.qrcode
    QRCode.toCanvas($qrdom, 'sample text', { width: 200 },  (error) => {
      if (error) console.error(error)
    })
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