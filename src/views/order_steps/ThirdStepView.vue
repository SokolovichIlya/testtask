<template>
  <el-form ref="form" :model="customer">
    <el-form-item>
      <h5>Данные о заказчике</h5>
      <p>ФИО - {{ customer.fio }}</p>
      <p>Адрес - {{ customer.address }}</p>
      <p>Электронная почта - {{ customer.email }}</p>
      <p>Номер телефона - {{ customer.phone }}</p>
    </el-form-item>
    <el-form-item>
      <h5>Заказ</h5>
      <table class="table-order">
        <tbody>
          <tr v-for="item in getShowOrderData" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td width="20%" align="center">
              <p>Количество: {{ item.count }}</p>
              <p>{{ item.sale }} руб / шт</p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"></td>
            <td>Сумма - {{ getSumTable }}</td>
          </tr>
        </tfoot>
      </table>
    </el-form-item>
    <el-form-item>
      <el-button @click="prevStep">Предыдущий шаг</el-button>
      <el-button type="primary" @click="onSubmit">Отправить заказ</el-button>
    </el-form-item>

    <el-dialog
      title="Статус заказа"
      :visible.sync="successSendModal"
      width="30%"
      :close-on-click-modal="false"
      :show-close="false"
      :close-on-press-escape="false"
    >
      <span>Заказ успешно отправлен</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="replaceRoute">Ок</el-button>
      </span>
    </el-dialog>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ThirdStepView",
  data: () => ({
    successSendModal: false,
  }),
  computed: {
    getSumTable() {
      return this.order
        .filter((item) => item.isCIncludedInOrder === true)
        .reduce((sum, item) => (sum += item.count * item.sale), 0);
    },
    getShowOrderData() {
      return this.order.filter((item) => item.isCIncludedInOrder === true);
    },

    ...mapGetters({
      order: "order",
      customer: "customer",
    }),
  },
  methods: {
    prevStep() {
      this.$router.push("/second-step");
    },
    onSubmit() {
      this.successSendModal = true;
    },
    replaceRoute() {
      this.$store.dispatch("setOrder", []);
      this.$router.push("/");
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