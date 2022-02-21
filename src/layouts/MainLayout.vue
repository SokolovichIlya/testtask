<template>
  <div class="wrapper">
    <TheHeader />
    <main class="wrapper-content main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/app/TheHeader.vue";
import TheFooter from "@/components/app/TheFooter.vue";

export default {
  name: "MainLayout",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>