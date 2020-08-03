<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template slot="remark" slot-scope="text">{{ text }}<a-tag class="float-right" color="blue">消费</a-tag></template>
  </a-table>
</template>
<script>
const columns = [
  { title: '消费ID', dataIndex: 'id', key: 'id' },
  { title: '金额', dataIndex: 'money' },
  { title: '发生时间 ', dataIndex: 'createTime' },
  { title: '备注信息', dataIndex: 'remark', scopedSlots: { customRender: 'remark' }, }
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
  name: 'ConsumptionGrid',
  data() {
    return {
      columns,
      data
    }
  }
}
</script>>