<template>
  <div class="form-group">
    <label class="form-label"  :for="id">{{ label }}</label>
    <input
      type="text"
      class="form-control"
      :name="name"
      :id="id"
      :required="required"
      :disabled="disabled"
      v-model.trim="inputValue"
    />
  </div>  
</template>

<script>
import InputMixin from '@/mixins/InputMixin.js'

export default {
  name: 'InputTextComponent',
  mixins: [InputMixin],
}
</script>