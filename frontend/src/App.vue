<template>
  <div id="app">
    <div v-if="checkJwt" class="m">
      <MenuComponent />
    </div>
     <transition name="slide" mode="out-in">
      <router-view class="" />
    </transition>
  </div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue'

export default {
  components: {
    MenuComponent
  },
  computed: {
    checkJwt () {
      return true
      // return localStorage.__access && this.$route.path !== '/login' ?  : false
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
.m {
  background: #56baed;
}
*{
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:hover{
    background-color: #39ace7;
  }
  &:active{
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }
}
input[type=text], input[type=password], input[type=email] {
  background-color: #f6f6f6;
  border: none !important;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  &:focus{
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
  }
  &::placeholder{
    color: rgba(0, 0, 0, 0.357);
  }
}
</style>
