<!--修改密码-->
<template>
  <div class="px-4">
    <a-card :bordered="false" class="w-full">
      <div class="text-center">
        <a-avatar :size="120" :src="avatar" />
        <h3 class="text-gray-700 mt-2 text-xl">admin</h3>
        <p class="text-gray-500">腾飞微自助平台</p>
      </div>
      <a-form :form="form"  @submit="handleSubmit">
        <a-form-item label="新密码">
          <a-input-number
            class="w-full"
            size="large"
            autoFocus
            placeholder="新密码"
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="重复密码">
          <a-input
            class="w-full"
            size="large"
            placeholder="重复密码"
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            修改
          </a-button>
        </a-form-item>
      </a-form>
      <a-divider />
      <div class="info-wrap">
        <a-statistic title="用户名" value="Admin" />
        <a-statistic title="余额" value="0.99元" />
        <a-statistic title="手机" value="158374738490" />
        <a-statistic title="注册时间" value="2020-07-12 23:12:43" />
      </div>
    </a-card>
  </div>
</template>

<script>
const avatar = require('@/assets/7.jpg')
export default {
  name: 'UserInfo',
  data() {
    return {
      avatar,
      form: this.$form.createForm(this, { name: 'recharte' }),
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.info-wrap {
  .ant-statistic {
    margin-bottom: 15px;
  }
  .ant-statistic-content {
    font-size: 14px !important
  }
}
</style>