<template>
  <header class="header">
    <div class="header-wrapper  wrapper-content">
      <div class="header-logo header-block">
        <router-link to="/" class="header-logo__link">
          <img
            src="@/assets/logo.png"
            alt="Логотип"
            class="header-logo__image"
          />
          <h1 class="header-logo__title">Название компании</h1>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => ({
    isShowDownmenu: false,
  }),
  watch: {

  },
};
</script>