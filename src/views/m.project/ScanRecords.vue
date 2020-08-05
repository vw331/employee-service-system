<!--移动端扫码记录-->
<template>
  <div>
    <a-button type="primary" block @click="handleClickScan">点击扫码</a-button>
    <a-table class="mt-4" :columns="columns" :data-source="data" bordered>
    </a-table>
  </div>
</template>

<script>

const columns = [
  { title: '码ID', dataIndex: 'id', key: 'id' },
  { title: '上传时间', dataIndex: 'createTime' },
  { title: '备注信息', dataIndex: 'remark' },
]

const data = new Array(10).fill({
  money: '99.99',
  createTime: '2020-08-02 12:23:11',
  remark: '测试'
}).map((item, index) => ({
  ...item,
  id: index
}))

export default {
  name: 'ScanRecords',
  data() {
    return {
      columns,
      data
    }
  },
  methods: {
    handleClickScan() {
      alert('点击扫码')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
