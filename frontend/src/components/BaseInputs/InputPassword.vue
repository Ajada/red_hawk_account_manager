<template>
  <input type="password" class="shadow-sm fadeIn second" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    }
  }
}
</script>
