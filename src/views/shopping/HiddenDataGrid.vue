<!--隐藏数据-->
<template>
  <a-table :columns="columns" :data-source="data" bordered>
    
  </a-table>
</template>
<script>
const columns = [
  { title: '码ID', dataIndex: 'id', key: 'id' },
  { title: '上传时间', dataIndex: 'createTime' },
  { title: '来源', dataIndex: 'source' },
  { title: '备注信息', dataIndex: 'remark' },
  { title: '隐藏' }
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
  name: 'HiddenDataGrid',
  data() {
    return {
      columns,
      data
    }
  }
}
</script>>