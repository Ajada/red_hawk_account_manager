<template>
  <div class="card mb-3" style="width: 18rem; height: 215px !important;">
    <header>
      <img src="./../../assets/logo.png" class="card-img-top w-25" alt="...">
    </header>
    <div class="card-body">
      <p class="card-text p-0 m-0">Email: {{ myKey }}</p>
      <p class="card-text">Senha: {{ hashPass }} </p>
      <div>
        <SubmitButtonVue :label="'Editar'" />
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButtonVue from '../BaseButtons/SubmitButton.vue'

export default {
  components: {
    SubmitButtonVue
  },
  props: {
    myKey: { type: String, required: true },
    hashPass: { type: String, required: true }
  }
}
</script>

<style scoped>
header {
  border-radius: 5px;
  background: linear-gradient(100deg, #FC466B 0%, #3F5EFB 100%);
}
</style>
