<template>
  <div class="block">
    <form-component @submit="submitForm()">
      <div class="row">
        <div class="col">
          <select-component
            :isServer="true"
            :serverUrl="'https://jsonplaceholder.typicode.com/todos'"
            :labelKey="'title'"
            :valueKey="'id'"
            :label="'Выпадающий список из сервера'"
            v-model="formData.selectServer"
            class="mb-3"
          ></select-component>
        </div>
        <div class="col">
          <select-component
            :options="selectOptions"
            :label="'Выпадающий список статичный'"
            v-model="formData.selectStatic"
            :disabled="true"
            class="mb-3"
          ></select-component>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input-text-component
            v-model="formData.text"
            :label="'Текстовый инпут'"
            :required="true"
            class="mb-3"
          ></input-text-component>
        </div>
        <div class="col">
          <number-component
            v-model="formData.number"
            :label="'Цифровой инпут'"
            :required="true"
            class="mb-3"
          ></number-component>
        </div>
      </div>
      <textarea-component
        v-model="formData.textarea"
        :label="'Многострочный инпут'"
        class="mb-3"
      ></textarea-component>
      <div class="mb-3">
        <checkbox-component
          v-model="formData.checkbox"
          :value="1"
          :label="'Чекбокс 1'"
          class="col"
        ></checkbox-component>
        <checkbox-component
          v-model="formData.checkbox"
          :value="2"
          :label="'Чекбокс 2'"
          class="col"
        ></checkbox-component>
        <checkbox-component
          v-model="formData.checkbox"
          :value="3"
          :label="'Чекбокс 3'"
          class="col"
        ></checkbox-component>
      </div>
      <div>
        <radio-component
          :name="'radio'"
          v-model="formData.radio"
          :value="1"
          :label="'Радио 1'"
        ></radio-component>
        <radio-component
          :name="'radio'"
          v-model="formData.radio"
          :value="2"
          :label="'Радио 2'"
        ></radio-component>
        <radio-component
          :name="'radio'"
          v-model="formData.radio"
          :value="3"
          :label="'Радио 3'"
        ></radio-component>
      </div>
      <template #footer>
        <div class="row row-cols-auto g-1">
          <div class="col">
            <button type="submit" class="btn btn-primary">Отправить</button>
          </div>
          <div class="col">
            <button class="btn btn-outline-primary" @click.prevent="resetForm">
              Сбросить
            </button>
          </div>
        </div>
      </template>
    </form-component>
  </div>
</template>

<script>
import FormComponent from "@/components/forms/FormComponent.vue";
import CheckboxComponent from "@/components/inputs/CheckboxComponent.vue";
import InputTextComponent from "@/components/inputs/InputTextComponent.vue";
import NumberComponent from "@/components/inputs/NumberComponent.vue";
import SelectComponent from "@/components/inputs/SelectComponent.vue";
import TextareaComponent from "@/components/inputs/TextareaComponent.vue";
import RadioComponent from "../components/inputs/RadioComponent.vue";

export default {
  name: "Home",
  components: {
    SelectComponent,
    FormComponent,
    InputTextComponent,
    CheckboxComponent,
    NumberComponent,
    TextareaComponent,
    RadioComponent,
  },
  data: () => ({
    formData: {
      selectServer: null,
      selectStatic: null,
      text: "",
      textarea: "",
      checkbox: [],
      number: null,
      radio: null,
    },
    selectOptions: [
      { value: 1, label: "Значение 1" },
      { value: 2, label: "Значение 2" },
      { value: 3, label: "Значение 3" },
      { value: 4, label: "Значение 4" },
      { value: 5, label: "Значение 5" },
    ],
  }),
  methods: {
    resetForm() {
      let ask = confirm("Сбросить введённые данные?");

      if (!ask) return;

      this.formData = {
        selectServer: null,
        selectStatic: null,
        text: "",
        textarea: "",
        checkbox: [],
        number: null,
      };
    },
    submitForm() {
      let notification = this.$store.getters.notification;

      notification.title = 'Форма ввода';
      notification.body = 'Форма успешно отправлена';
      notification.active = true;

      setTimeout(() => {
        notification.active = false
      }, 5000)
    },
  },
};
</script>
