<template>
  <div class="order">
    <el-steps :active="active" :space="200" simple>
      <el-step title="Корзина" description="Some description"></el-step>
      <el-step title="Данные заказчика" description="Some description"></el-step>
      <el-step title="Подтверждение" description="Some description"></el-step>
    </el-steps>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    active() {
      return this.$route.meta.activeStep
    }
  },
};
</script>