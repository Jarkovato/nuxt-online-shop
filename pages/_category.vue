<template>
  <div>
    <Catalog v-bind:category="category"/>
  </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue'

export default {
  data() {
    return {
      category: '',
    }
  },
  components: {
    Catalog,
  },
  mounted() {
    this.category = this.$route.params.category;
  }
}
</script>

<style lang="scss" scoped>
</style>
