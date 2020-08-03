<!--购买列表-->
<template>
  <div class="px-4">
    <a-card :bordered="false" class="w-full">
      <a-table :columns="columns" :data-source="data">
      </a-table>
    </a-card>
  </div>
</template>

<script>

const columns = [
  { title: '任务ID', dataIndex: 'id', key: 'id' },
  { title: '项目名称', dataIndex: 'name' },
  { title: '任务进度', dataIndex: 'progress' },
  { title: '扫码'},
  { title: '详情' },
  { title: '备注' }
]

export default {
  name: 'ShoppingList',
  data() {
    return {
      data: [],
      columns,
    }
  }
}
</script>

<style lang="less" scoped>

</style>