<!--移动端 已购列表-->
<template>
  <div>
     <a-list
      class="demo-loadmore-list"
      item-layout="horizontal"
      :data-source="data"
    >
      <a-list-item class="list-item" slot="renderItem" slot-scope="item" @click="handleItemClick(item)">
        <a-list-item-meta>
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
          <a-avatar
            size="large"
            slot="avatar"
            :src="item.img"
          />
          <div slot="description">
            <p class="text-xs" style="line-height: 1.4">
              数量: {{ item.progress }}<br/>
              订单时间: {{ item.createTime }}<br/>
              备注: {{ item.remark }}
            </p>
          </div>
        </a-list-item-meta>
      </a-list-item>
     </a-list>
  </div>
</template>

<script>

const data = new Array(10).fill({
  img: require('@/assets/project/9e9f04796c1a61ee56452d5a7941e0a7.png'),
  title: '权利的游戏',
  createTime: '2020-03-12 12:32:12',
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
      data
    }
  },
  methods: {
    handleItemClick(record) {
      console.log( record )
      this.$router.push({ name: 'MobileScanRecords', params: { id: record.id }})
    }
  }
}
</script>

<style lang="less" scoped>
.list-item {
  /deep/ .ant-list-item-meta {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>