<template>
  <div class="container pt-5">
    <header class="w-100">
      <h1><i>Home</i></h1>
    </header>
    <div class="p-5">
      <CardDrawer :title="'Title test'" />
    </div>
  </div>
</template>

<script>
import CardDrawer from '@/components/BaseCards/CardDrawer.vue'

export default {
  components: {
    CardDrawer
  }
}
</script>

<style>

</style>
