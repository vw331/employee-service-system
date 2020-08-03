<!--购买-->
<template>
  <div class="px-4">
    <a-card :title="title" :bordered="false" class="w-full">
      <div class="text-center">
        <h3 class="text-gray-700 font-bold text-lg mb-2"> 使用说明 </h3>
        <p>备注：首次扫码后，28天有效期内， 可免费补扫10次， 若超过最大补扫次数，每次补扫，会扣除余额0.50元,请保证账户余额充足！</p>
        <p>若超过28天有效期补扫，则扣除续费价格14.00元， 并附赠10次免费补扫， 超过最大补扫次数，每次补扫，扣除余额0.50元,以此类推</p>
        <div class="mt-4"> <a-button type="primary"> 首次：14:00 <span class="opacity-75">（二次续费：14.00）</span></a-button></div>
      </div>
      <a-form :form="form"  @submit="handleSubmit">
        <a-form-item label="购买数量">
          <a-input-number
            class="w-full"
            size="large"
            autoFocus
            placeholder="请输入购买数量"
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="订单备注">
          <a-input
            class="w-full"
            size="large"
            placeholder="订单备注"
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">
            下单
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script>
export default {
  name: 'Buy',
  data() {
    return {
      title: '王者荣耀',
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

</style>>