<template>
  <div>
    <div class="fadeIn first">
      <i id="user-icon" class="fa-solid fa-circle-user"></i>
    </div>
    <form>
      <input v-model="param.email" type="text" class="shadow-sm fadeIn second" placeholder="usuario">
      <input v-model="param.password" type="password" class="shadow-sm fadeIn third" placeholder="senha">
      <input @click.prevent="login()" type="submit" class="shadow-sm fadeIn fourth" value="Entrar">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignInComponent',
  data () {
    return {
      param: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    ...mapActions(['authentication']),
    login () {
      return this.authentication(this.param)
    }
  }
}
</script>
