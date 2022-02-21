<template>
  <div class="form-check">
    <label class="form-check-label" :for="id">{{ label }}</label>
    <input
      class="form-check-input"
      type="radio"
      :checked="isChecked"
      :value="value"
      :name="name"
      :id="id"
      :disabled="disabled"
      @change="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'RadioComponent',
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    modelValue: {
      default: "",
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
    id: {
      type: String,
      default: () => {
        let abc = "abcdefghijklmnopqrstuvwxyz",
          randomString = "";

        while (randomString.length < 4) {
          randomString += abc[Math.floor(Math.random() * abc.length)];
        }

        return `checkbox-${randomString}`;
      },
    },
    required: {
      type: Boolean,
      default: false,
    },
    name: String,
    label: String,
  },
  computed: {
    isChecked() {
      return this.modelValue == this.value;
    },
  },
};
</script>