<template>
  <header :class="$style.header">
    <div :class="$style.header__content">
      <nuxt-link :class="$style.logo" to="/"> TestList</nuxt-link>
      <Cart />
    </div>
  </header>
</template>

<script>
import Cart from "@/components/Cart.vue";

export default {
  components: {
    Cart
  }
};
</script>

<style lang="scss" module>
@import "./assets/scss/header.scss";
</style>
