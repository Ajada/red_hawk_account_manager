<template>
  <div>
    <div class="fadeIn first">
      <i id="user-icon" class="fa-solid fa-circle-user"></i>
    </div>
    <form>
      <InputEmailVue :placeholder="'email'" />
      <SubmitButtonVue :label="'Recuperar Senha'" />
    </form>
  </div>
</template>

<script>
import SubmitButtonVue from '@/components/BaseButtons/SubmitButton.vue'
import InputEmailVue from '@/components/BaseInputs/InputEmail.vue'

export default {
  components: {
    InputEmailVue,
    SubmitButtonVue
  },
  name: 'ForgotPassword'
}
</script>
