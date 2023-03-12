<template>
  <div class="card mb-3 m-3" style="width: 18rem; height: 215px !important;">
    <header>
      <img src="./../../assets/stamp.png" class="card-img-top w-25" alt="...">
    </header>
    <div class="card-body">
      <p class="card-text p-0 m-0">Email: {{ myKey }}</p>
      <p class="card-text">Senha: {{ hashPass }} </p>
      <div>
        <BaseCyberButtonVue :msg_button="'Editar'" :tag_button="'25'" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseCyberButtonVue from '../BaseButtons/BaseCyberButton.vue'

export default {
  components: {
    BaseCyberButtonVue
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
  background: linear-gradient(50deg, #c41f1f 20%, #212b2c 100%);
}
</style>
