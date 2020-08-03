<!--消费记录-->
<template>
  <div class="px-4">
    <a-card :bordered="false" class="w-full">
      <a-radio-group class="mb-2" v-model="type" @change="onTypeChange">
        <a-radio-button value="ConsumptionGrid">消费记录</a-radio-button>
        <a-radio-button value="RechargeGrid">充值记录</a-radio-button>
      </a-radio-group>
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </a-card>
  </div>
</template>

<script>
import ConsumptionGrid from './Consumption'
import RechargeGrid from './Recharge'


export default {
  name: 'purchaseHistory',
  components: {
    ConsumptionGrid,
    RechargeGrid
  },
  data() {
    return {
      type: this.$route.query.type || 'ConsumptionGrid',
    }
  },
  methods: {
    onTypeChange() {
      
    }
  },
  computed: {
    currentTabComponent() {
      return this.type
    }
  }
}
</script>

<style lang="less" scoped>

</style>