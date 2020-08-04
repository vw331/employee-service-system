<!--api接口地址-->
<template>
  <div class="px-4">
     <a-card :title="title" :bordered="false" class="w-full">
      <div v-html="content"></div> 
      <a-button type="primary" class="mt-4">查看文档</a-button>
     </a-card>
  </div>
</template>

<script>
export default {
  name: 'ApiDoc',
  data() {
    return {
      title: '权利的游戏API接口',
      content: `
        <p>权利的游戏接口地址：</p>
        <p>新增数据：http://www.95mn.com/api/task/qrcode/pid/29/rid/6195 </p>
        <p>补扫数据：http://www.95mn.com/api/task/budan/pid/29/rid/6195 </p>
        <p>反馈人脸：http://www.95mn.com/api/task/face/pid/29/rid/6195 </p>
      `
    }
  }
}
</script>>