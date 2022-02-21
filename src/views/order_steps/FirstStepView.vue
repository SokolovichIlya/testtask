<template>
  <el-form ref="form">
    <el-form-item>
      <table class="table-order" v-if="order.length != 0">
        <tbody>
          <tr v-for="item in order" :key="item.id">
            <td width="5%" align="center">
              <el-checkbox v-model="item.isCIncludedInOrder"></el-checkbox>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td width="10%" align="center">
              <el-input-number v-model="item.count"></el-input-number>
              <span>{{ item.sale }} руб / шт</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>Сумма - {{ getSumTable }}</td>
          </tr>
        </tfoot>
      </table>
      <el-empty
        v-if="order.length === 0"
        description="В корзине нет товаров"
      ></el-empty>
    </el-form-item>
    <el-form-item>
      <el-button v-if="order.length != 0" @click="nextStep"
        >Следующий шаг</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'FirstStepView',
  computed: {
    getSumTable() {
      return this.order
        .filter((item) => item.isCIncludedInOrder === true)
        .reduce((sum, item) => (sum += item.count * item.sale), 0);
    },

    ...mapGetters({
      order: "order",
    }),
  },
  methods: {
    nextStep() {
      let orderItemCount = this.order.filter(
        (item) => item.isCIncludedInOrder === true
      ).length;

      if (orderItemCount === 0) {
        this.$message({
          message: "Сначала добавьте товары в корзину",
          type: "warning",
        });
      } else {
        this.$router.push("/second-step/");
      }
    },
  },
};
</script>