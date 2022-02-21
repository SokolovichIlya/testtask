<template>
  <div class="form-group">
    <label class="form-label" :for="id">{{ label }}</label>
    <input
      type="number"
      class="form-control"
      :name="name"
      :id="id"
      :required="required"
      :disabled="disabled"
      v-model.number="inputValue"
    />
  </div>  
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'

export default {
  name: 'NumberComponent',
  mixins: [InputMixin],
}
</script>