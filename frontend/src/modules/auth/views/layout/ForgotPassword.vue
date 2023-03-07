<template>
  <div>
    <div class="fadeIn first">
      <i id="user-icon" class="fa-solid fa-circle-user"></i>
    </div>
    <form>
      <input type="text" id="email" class="fadeIn second" placeholder="email">
      <input type="submit" class="fadeIn fourth" value="Recuperar Senha">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword'
}
</script>
