<template>
  <div>
    <div class="fadeIn first">
      <i id="user-icon" class="fa-solid fa-circle-user"></i>
    </div>
    <form>
      <InputEmailVue v-model="param.email" :placeholder="'usuario'" />
      <InputPasswordVue v-model="param.password" :placeholder="'senha'" />
      <SubmitButtonVue @click.prevent="login()" :label="'Entrar'"/>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SubmitButtonVue from '@/components/BaseButtons/SubmitButton.vue'
import InputPasswordVue from '@/components/BaseInputs/InputPassword.vue'
import InputEmailVue from '@/components/BaseInputs/InputEmail.vue'

export default {
  components: {
    SubmitButtonVue,
    InputPasswordVue,
    InputEmailVue
  },
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
