<template>
  <div class="container">
    <SimpleModalVue :teamData="tes"/>
    <div class="p-2 justify-content-center">
      <div class="mobile-container justify-content-center">
        <InfoCard
          v-for="(item, index) in 6" :key="index"
          :myKey="'teste@teste.com'"
          :hashPass="'YByt679FYUo'"
        />
      </div>
    </div>
    <BaseButtonAdd />
  </div>
</template>

<script>
import InfoCard from '@/components/BaseCards/InfoCard.vue'
import BaseButtonAdd from '@/components/BaseButtons/BaseButtonAdd.vue'
import SimpleModalVue from '@/components/BaseModals/SimpleModal.vue'

export default {
  components: {
    InfoCard,
    BaseButtonAdd,
    SimpleModalVue
  },
  data () {
    return {
      tes: {}
    }
  }
}
</script>

<style>
.mobile-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin-bottom: 5px;
}
</style>
