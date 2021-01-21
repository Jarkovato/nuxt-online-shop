<template>
  <div @resize="sidebarActive = true">
    <div
      :class="$style.sidebar__mobile"
      @click="sidebarActive ? (sidebarActive = false) : (sidebarActive = true)"
    >
      <svg viewBox="0 0 100 80" width="40" height="40" v-if="!sidebarActive">
        <rect width="100" height="15"></rect>
        <rect y="20" width="100" height="15"></rect>
        <rect y="40" width="100" height="15"></rect>
      </svg>
      <svg
        viewBox="-25 0 100 80"
        width="40"
        height="40"
        v-else
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="1" y1="40" x2="40" y2="1" stroke="black" stroke-width="10" />
        <line x1="1" y1="1" x2="40" y2="40" stroke="black" stroke-width="10" />
      </svg>
    </div>
    <transition name="slide-fade">
      <div :class="$style.sidebar" v-if="sidebarActive">
        <h1 :class="$style.sidebar__title">Каталог</h1>
        <nav :class="$style.sidebar__nav">
          <ul :class="$style.sidebar__groups">
            <li
              :class="$style.sidebar__group"
              v-for="category in this.categories"
              :key="category.id"
            >
              <nuxt-link
                :to="category.id + ''"
                active-class="$style.active"
                :class="[$style.sidebar__link]"
                class="current"
                >{{ category.name }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarActive: true,
    };
  },
  computed: {
    categories() {
      return this.$store.getters["products/categories"];
    },
  },
  mounted() {
    if (this.$store.getters["products/categories"].length === 0) {
      this.$store.dispatch("products/fetchCategories");
    }
  },
};
</script>

<style lang="scss" module>
@import "./assets/scss/sidebar.scss";
</style>
