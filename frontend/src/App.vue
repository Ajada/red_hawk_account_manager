<template>
  <div id="app">
    <div v-if="checkJwt">
      <TopMenu />
    </div>
     <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TopMenu from './components/BaseNavigation/TopMenu.vue'

export default {
  components: {
    TopMenu
  },
  computed: {
    checkJwt () {
      return true // return localStorage.__access && this.$route.path !== '/login' ?  : false
    }
  },
  data () {
    return {
      storage: localStorage.__access
    }
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: 'Cyber', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-enter,
.slide-leave-to {
  transform: translate(-50px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
</style>
