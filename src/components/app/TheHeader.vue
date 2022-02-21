<template>
  <header class="header">
    <div class="header-wrapper container">
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
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="showButton"
        @click="showMenu()"
      >
        Меню
      </button>
    </div>

    <div
      class="header-downmenu"
      ref="headerDownmenu"
      v-if="isShowDownmenu === true"
    >
      <div class="container">
        <div class="row">
          <div class="col">
            <span class="header-dropdown">
              <p class="header-dropdown__title header-link">Ссылка 1</p>
              <span></span>
              <div class="header-dropdown__menu">
                <span class="header-link">Подссылка 1</span>
                <span class="header-link">Подссылка 2</span>
                <span class="header-link">Подссылка 3</span>
              </div>
            </span>
            <p class="header-link">Ссылка 2</p>
            <p class="header-link">Ссылка 3</p>
          </div>
          <div class="col">
            <p class="header-link">Ссылка 1</p>
            <p class="header-link">Ссылка 2</p>
          </div>
          <div class="col">
            <p class="header-link">Ссылка 1</p>
            <p class="header-link">Ссылка 2</p>
            <p class="header-link">Ссылка 3</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => ({
    isShowDownmenu: false,
    listen: null,
  }),
  methods: {
    onClickOutside(e) {
      let target = e.target;

      let parent = this.$refs.headerDownmenu;

      let isClickChildren = parent.contains(target),
        isClickButton = target == document.getElementById("showButton");

      if (!isClickChildren && this.isShowDownmenu === true && !isClickButton) {
        this.isShowDownmenu = false;

        document.removeEventListener("click", this.onClickOutside);
      }
    },
    showMenu() {
      if (this.isShowDownmenu === false) {
        this.isShowDownmenu = true;
        document.addEventListener("click", this.onClickOutside);
      } else {
        document.removeEventListener("click", this.onClickOutside);
        this.isShowDownmenu = false;
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
  }
};
</script>