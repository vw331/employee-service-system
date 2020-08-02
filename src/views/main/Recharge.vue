<!--充值-->
<template>
  <div class="px-4">
    <a-card :bordered="false" class="w-full">
      <div class="bg-teal-500 p-4 text-center text-white">
        <h2 class="text-4xl text-white">9.99</h2>
        <p>当前余额</p>
      </div>
      <a-form :form="form"  @submit="handleSubmit">
        <a-form-item label="充值金额">
          <a-input-number
            class="w-full"
            size="large"
            autoFocus
            placeholder="请输入充值金额"
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            充值
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'Recharge',
  data() {
    return {
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