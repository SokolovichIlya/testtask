<template>
  <form class="form" @submit.prevent="$emit('submit')">
    <div class="form-header form-block">
      <span class="form-title"><slot name="title">Заполните форму</slot></span>
      <slot name="header"></slot>
    </div>
    <div class="form-main form-block">
      <slot></slot>
    </div>
    <div class="form-footer form-block">
      <slot name="footer"></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
};
</script>