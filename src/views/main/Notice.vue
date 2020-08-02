<template>
  <div class="px-4">
    <a-card :title="title" :bordered="false" class="w-full">
      <p>{{ content }}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data() {
    return {
      title: '标题标题标题标题',
      content: '内容内容内容内容内容内容'
    }
  }
}
</script>
<style lang="less" scope>

</style>