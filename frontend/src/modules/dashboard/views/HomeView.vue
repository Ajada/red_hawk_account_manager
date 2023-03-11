<template>
  <div class="container">
    <div class="p-5 justify-content-center">
      <div class="">
        <CardDrawer
          v-for="(item, index) in 5" :key="index"
          :myKey="'teste@teste.com'"
          :hashPass="'YByt679FYUo'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardDrawer from '@/components/BaseCards/InfoCard.vue'

export default {
  components: {
    CardDrawer
  }
}
</script>

<style>

</style>
