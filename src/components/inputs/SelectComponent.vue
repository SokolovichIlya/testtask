<template>
  <div class="form-group">
    <p class="form-label">{{ label }}</p>
    <div
      class="select form-control"
      @click="openDropdown"
      :tabindex="tabindex"
      :id="id"
      :disabled="disabled"
    >
      <div class="select-input">
        <span class="select-icon">
          <slot name="icon"></slot>
          <span class="select-title" v-if="selectValue">{{
            selectValue[labelKey]
          }}</span>
          <span class="select-placeholder" v-if="!selectValue">{{
            placeholder
          }}</span>
          <span class="select-arow"></span>
        </span>
      </div>
      <div class="select-dropdown" v-if="isShowDropdown">
        <input
          type="search"
          class="select-dropdown__input"
          v-model.trim="searchInput"
          placeholder="Поиск"
        />
        <div class="select-options" v-if="isLoadedServer === false">
          <span
            v-for="(option, index) in getShowData()"
            :key="`select-option-${index}`"
            @click="selectOption(option)"
            class="select-options__item"
            :class="{
              active: selectValue && option[valueKey] === selectValue[valueKey],
            }"
          >
            {{ option[labelKey] }}
          </span>
          <span class="select-options--empty" v-if="getShowData().length === 0"
            >Нет данных</span
          >
        </div>
        <div class="select-loads" v-if="isLoadedServer === true">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Загрузка...</span>
          </div>
          <span>Загрузка данных...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SelectComponent",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
    placeholder: {
      type: String,
      default: "Выберите значение из списка",
    },
    tabindex: {
      type: Number,
      default: 1,
    },
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    valueKey: {
      type: String,
      default: "value",
    },
    labelKey: {
      type: String,
      default: "label",
    },
    isServer: {
      type: Boolean,
      default: false,
    },
    serverParams: {
      type: Object,
      default: () => {
        return {};
      },
    },
    serverUrl: String,
    label: String,
    id: {
      type: String,
      default: () => {
        let abc = "abcdefghijklmnopqrstuvwxyz",
          randomString = "";

        while (randomString.length < 4) {
          randomString += abc[Math.floor(Math.random() * abc.length)];
        }

        return `select-${randomString}`;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isShowDropdown: false,
    isLoadedServer: false,
    searchInput: "",
    selectOptionsList: null,
    selectValue: null,
  }),
  computed: {},
  methods: {
    openDropdown() {
      if (this.disabled === false) {
        this.isShowDropdown = true
      }
    },
    selectOption(value) {
      this.isShowDropdown = false;
      this.selectValue = value;
      this.$emit("input", value[this.valueKey]);
    },
    getServerData() {
      this.isLoadedServer = true;

      return new Promise((resolve, reject) => {
        let params = {
          ...this.serverParams,
        };

        if (this.searchInput) {
          params[this.labelKey] = this.searchInput;
        }

        axios
          .get(this.serverUrl, {
            params,
          })
          .then((response) => {
            this.selectOptionsList = response.data;
            this.isLoadedServer = false;
            resolve();
          })
          .catch((e) => {
            console.error(e);
            reject();
          });
      });
    },
    getShowData() {
      if (this.isServer === true) {
        return this.selectOptionsList;
      } else {
        return this.searchInput
          ? this.selectOptionsList.filter((item) =>
              item[this.labelKey].includes(this.searchInput)
            )
          : this.selectOptionsList;
      }
    },
    listenClickOutside() {
      let vue = this;

      document.addEventListener("click", onClickOutside);

      function onClickOutside(e) {
        let target = e.target;

        let parent = document.querySelector(`#${vue.id}`);

        let isClickChildren =
          parent.contains(target) && target.closest(`#${vue.id}`);

        if (!isClickChildren && vue.isShowDropdown === true) {
          vue.isShowDropdown = false;

          document.removeEventListener("click", onClickOutside);
        }
      }
    },
  },
  watch: {
    isShowDropdown(value) {
      if (value === true) {
        this.listenClickOutside();
      }
    },
    value(value) {
      if (!value) {
        this.selectValue = null;
      }
    },
    searchInput() {
      if (this.isServer === true) {
        this.getServerData();
      }
    },
  },
  created() {
    if (this.isServer === true) {
      this.getServerData();
    } else {
      this.selectOptionsList = this.options;
    }
  },
};
</script>