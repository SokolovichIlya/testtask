<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :name="name"
      :id="id"
      :required="required"
      :true-value="value"
      :false-value="falseValue"
      :checked="isChecked"
      :disabled="disabled"
      @change="changeCheckbox"
    />
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxComponent',
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    modelValue: {
      default: null,
    },
    value: {
      type: [String, Number, Boolean],
      default: true,
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
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }

      return this.modelValue === this.value
    },
    falseValue() {
      if (typeof this.value === "string" || typeof this.value === "number") {
        return null;
      } else {
        return false;
      }
    },
  },
  methods: {
    changeCheckbox(e) {
      let isChecked = e.target.checked;

      if (this.modelValue instanceof Array) {
        let returnValue = [...this.modelValue]

        if (isChecked) {
          returnValue.push(this.value)
        } else {
          returnValue.splice(returnValue.indexOf(this.value), 1)
        }

        this.$emit('change', returnValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
};
</script>