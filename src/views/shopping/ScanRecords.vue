<!--扫描记录-->
<template>
  <div class="px-4">
    <a-alert
      class="mb-4"
      message="使用批量续费时，请将无需续费的数据提前隐藏掉，并预充足够的余额！"
      type="error"
      closable
    />
    <a-card :bordered="false" class="w-full">
        <a-row class="mb-4" type="flex" justify="space-between">
          <a-col :span="12">
            <a-radio-group v-model="type" @change="handleTypeChange">
              <a-radio-button value="NormalDataGrid"> 正常数据 </a-radio-button>
              <a-radio-button value="HiddenDataGrid"> 隐藏数据 </a-radio-button>
            </a-radio-group>
          </a-col>
          <a-col :span="12" class="text-right">
            <a-button type="primary ">批量续费[0条数据:0元]</a-button>
          </a-col>
        </a-row>

        <a-row class="mb-4" :gutter="16">
          <a-col :xs="24" :sm="12" :md="6">
            <a-card class="transition duration-500 ease-in-out transform hover:-translate-y-1 bg-red-500" :bordered="false">
              <a-statistic
                class="card-statistic"
                title="购买数据a"
                :value="12"
              >
              </a-statistic>
            </a-card>  
          </a-col>
          <a-col :xs="24" :sm="12" :md="6">
            <a-card class="transition duration-500 ease-in-out transform hover:-translate-y-1  bg-blue-500" :bordered="false">
              <a-statistic
                class="card-statistic"
                title="购买数据"
                :value="12"
              >
              </a-statistic>
            </a-card>  
          </a-col>
          <a-col :xs="24" :sm="12" :md="6">
            <a-card class="transition duration-500 ease-in-out transform hover:-translate-y-1  bg-orange-500" :bordered="false">
              <a-statistic
                class="card-statistic"
                title="购买数据"
                :value="12"
              >
              </a-statistic>
            </a-card>  
          </a-col>
          <a-col :xs="24" :sm="12" :md="6">
            <a-card class="transition duration-500 ease-in-out transform hover:-translate-y-1  bg-teal-500" :bordered="false">
              <a-statistic
                class="card-statistic"
                title="购买数据"
                :value="12"
              >
              </a-statistic>
            </a-card>  
          </a-col>
        </a-row>

        <keep-alive>
          <component v-bind:is="currentTabComponent"></component>
        </keep-alive>

    </a-card>
  </div>
</template>

<script>
import NormalDataGrid from './NormalDataGrid'
import HiddenDataGrid from './HiddenDataGrid'

export default {
  name: 'ScanRecords',
  components: {
    NormalDataGrid,
    HiddenDataGrid
  },
  data() {
    return {
      type: this.$route.query.type || 'NormalDataGrid'
    }
  },
  methods: {
    handleTypeChange() {
      this.$router.push({ query: {type: this.type }})
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
.card-statistic {
  text-align: center;

  /deep/ .ant-statistic-title, /deep/ .ant-statistic-content{
    color: #ffffff !important
  }
}
</style>