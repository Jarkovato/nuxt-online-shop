<template>
  <div class="app">
    <Header />
    <Sidebar />
    <transition name="slide-fade">
    <nuxt />
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Catalog from '@/components/Catalog.vue'

export default {
  components: {
    Header,
    Sidebar,
    Catalog,
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(400px);
  opacity: 0;
}


</style>
