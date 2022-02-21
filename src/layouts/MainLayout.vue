<template>
  <div class="wrapper">
    <TheHeader />
    <main class="container main">
      <router-view />
    </main>
    <TheFooter />

    <div class="toast toast-absolute" :class="{show: notification.active}">
      <div class="toast-header">
        <strong class="me-auto">{{ notification.title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ notification.body }}</div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/app/TheHeader.vue";
import TheFooter from "@/components/app/TheFooter.vue";
import { mapGetters } from 'vuex'

export default {
  name: "MainLayout",
  components: {
    TheHeader,
    TheFooter,
  },
  computed: {
    ...mapGetters({
      notification: 'notification'
    })
  }
};
</script>