<template>
  <component :is="layoutComputed"></component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  components: {
    MainLayout
  },
  computed: {
    layoutComputed() {
      return `${this.$route.meta.layout || 'main'}-layout`
    }
  }
}
</script>
