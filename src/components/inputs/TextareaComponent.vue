<template>
  <div class="form-group">
    <label class="form-label" :for="id">{{ label }}</label>
    <textarea
      :name="name"
      :id="id"
      :required="required"
      v-model.trim="inputValue"
      :disabled="disabled"
      class="form-control"
    >
    </textarea>
  </div>
</template>

<script>
import InputMixin from "@/mixins/InputMixin.js";

export default {
  name: 'TextareaComponent',
  mixins: [InputMixin],
};
</script>