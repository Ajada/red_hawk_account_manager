<template>
  <div>
    <div class="fadeIn first">
      <i id="user-icon" class="fa-solid fa-circle-user"></i>
    </div>
    <form>
      <InputTextVue :placeholder="'insira o código'"/>
      <SubmitButtonVue :label="'Verificar'"/>
    </form>
  </div>
</template>

<script>
import SubmitButtonVue from '@/components/BaseButtons/SubmitButton.vue'
import InputTextVue from '@/components/BaseInputs/InputText.vue'

export default {
  components: {
    InputTextVue,
    SubmitButtonVue
  },
  name: 'ForgotPassword'
}
</script>
