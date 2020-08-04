<!--购买列表-->
<template>
  <div class="px-4">
    <a-card :bordered="false" class="w-full">
      <a-table :columns="columns" :data-source="data" bordered>
        <template slot="progress" slot-scope="text, record">当前用量:{{text}}/{{record.total}}</template>
        <template slot="scan" slot-scope="text, record">
          <a-button @click="handleToApiDoc(record)" type="danger" size="small" ghost>API/手动</a-button>
        </template>
        <template slot="info" slot-scope="text, record">
          <a-button @click="handleToInfo(record)" type="primary" size="small" >查看详情</a-button>
        </template>
        <template slot="remark" slot-scope="text, record">
          {{text}} |
          <a-button @click="handleEditRemark(record)" type="link" icon="edit" size="small"/>
        </template>
      </a-table>
    </a-card>

    <a-modal
      title="修改备注"
      :visible="editModal1Visible"
      @ok="() => saveEditModal"
      @cancel="() => setEditModal1Visible(false)"
    >
      <a-textarea placeholder="请输入备注信息" :default-value="defaultRemark"  :rows="4" />
    </a-modal>
  </div>
</template>

<script>

const columns = [
  { title: '任务ID', dataIndex: 'id', key: 'id' },
  { title: '项目名称', dataIndex: 'title' },
  { title: '任务进度', dataIndex: 'progress', scopedSlots: { customRender: 'progress' }},
  { title: '扫码', scopedSlots: { customRender: 'scan'}, width: 140 },
  { title: '详情', scopedSlots: { customRender: 'info'}, width: 140 },
  { title: '备注', dataIndex: 'remark', scopedSlots: { customRender: 'remark'}, width: 200}
]

const data = new Array(10).fill({
  title: '权利的游戏',
  progress: 1,
  total: 5,
  remark: '测试'
}).map((item, index) => ({
  ...item,
  id: 1000+index
}))

export default {
  name: 'ShoppingList',
  data() {
    return {
      data,
      columns,
      editModal1Visible: false,
      defaultRemark: '',
    }
  },
  methods: {
    handleToApiDoc(record) { //查看api文档
      this.$router.push({ name: 'ApiDoc', params: {id: record.id }})
    },
    handleToInfo(record) { //查看详情
      this.$router.push({ name: 'ScanRecords', params: {id: record.id }})
    },
    handleEditRemark(record) {
      this.defaultRemark = record.remark
      console.log(this.defaultRemark)
      this.editModal1Visible = true
    },
    saveEditModal() {
      
    },
    setEditModal1Visible(isModalVisible = false) {
      this.editModal1Visible = isModalVisible
    }
  }
}
</script>

<style lang="less" scoped>

</style>