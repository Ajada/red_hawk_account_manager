<template>
  <div>
    <div class="fadeIn first">
      <i id="user-icon" class="fa-solid fa-circle-user"></i>
    </div>
    <form>
      <input type="email" class="fadeIn second" placeholder="email">
      <input type="text" class="fadeIn second" placeholder="usuario">
      <input type="password" class="fadeIn third" placeholder="senha">
      <input type="submit" class="fadeIn fourth" value="Registrar">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpComponent'
}
</script>
