<template>
  <!-- <button> -->
  <button title="Detalhes do treinamento" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="fas fa-plus"></i>
  </button>
</template>

<style lang="scss" scoped>
  button {
    position: fixed;
    background: #c41f1f;
    bottom: 4rem;
    right: 2rem;
    border: none;
    font-size: 2.0rem;
    border-radius: 50%;
    z-index: 100;
    color: white;
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;
    box-shadow: 1px 1px 3px 1px gray;
    transition: all 0.2s;
    &:hover {
      filter: brightness(0.9);
      box-shadow: 0 0 0 0;
    }
  }
</style>
