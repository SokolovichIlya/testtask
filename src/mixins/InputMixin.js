export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
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

        return `input-${randomString}`;
      },
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: String,
    label: String,
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}