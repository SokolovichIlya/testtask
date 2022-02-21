<template>
  <el-form ref="customer" :model="customer" :rules="rules" label-width="250px">
    <el-form-item label="ФИО" prop="fio">
      <el-input v-model="customer.fio"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input type="email" v-model="customer.email"></el-input>
    </el-form-item>
    <el-form-item label="Номер телефона" prop="phone">
      <el-input v-model="customer.phone" v-mask="'+7 (###) ###-##-##'">
      </el-input>
    </el-form-item>
    <el-form-item label="Адрес" prop="address">
      <el-input v-model="customer.address"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="prevStep">Предыдущий шаг</el-button>
      <el-button @click="nextStep">Следующий шаг</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapGetters } from "vuex";

import { mask } from "vue-the-mask";

export default {
  name: 'SecondStepView',
  directives: { mask },
  computed: {
    ...mapGetters({
      customer: "customer",
      order: "order",
    }),
  },
  data: () => ({
    rules: {
      fio: [
        {
          required: true,
          message: "Заполните это поле",
          trigger: "change",
        },
      ],
      email: [
        {
          required: true,
          message: "Заполните это поле",
          trigger: "change",
        },
      ],
      phone: [
        {
          required: true,
          message: "Заполните это поле",
          trigger: "change",
        },
      ],
      address: [
        {
          required: true,
          message: "Заполните это поле",
          trigger: "change",
        },
      ],
    },
  }),
  methods: {
    prevStep() {
      this.$router.push("/");
    },
    nextStep() {
      this.$refs.customer.validate((valid) => {
        if (valid) {
          this.$router.push("/third-step");
        } else {
          return false;
        }
      });
    },
  },
  created() {
    let orderItemCount = this.order.filter(
      (item) => item.isCIncludedInOrder === true
    ).length;

    if (orderItemCount === 0) {
      this.$router.push("/");
    }
  },
};
</script>