<template>
  <div>
    <div class="fadeIn first">
      <i id="user-icon" class="fa-solid fa-circle-user"></i>
    </div>
    <form>
      <InputEmailVue :placeholder="'email'"/>
      <InputTextVue :placeholder="'nome de usuario'"/>
      <InputPasswordVue :placeholder="'senha'" />
      <SubmitButtonVue :placeholder="'Registrar'"/>
    </form>
  </div>
</template>

<script>
import InputTextVue from '@/components/BaseInputs/InputText.vue'
import SubmitButtonVue from '@/components/BaseButtons/SubmitButton.vue'
import InputEmailVue from '@/components/BaseInputs/InputEmail.vue'
import InputPasswordVue from '@/components/BaseInputs/InputPassword.vue'

export default {
  components: {
    InputTextVue,
    SubmitButtonVue,
    InputEmailVue,
    InputPasswordVue
  },
  name: 'SignUpComponent'
}
</script>
