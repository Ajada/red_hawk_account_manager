<template>
  <nav class="navbar p-3 navbar-expand-lg bg-light shadow-sm">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i class="fa-solid fa-bars"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home-view'}"
              ><i class="fa-solid fa-key"></i> Minhas Chaves</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'settings-view'}">
              <i class="fa-solid fa-dolly"></i>
              Estoque
            </router-link>
          </li>

          <li v-show="false" class="nav-item">
            <router-link class="nav-link" to="#">
              <i class="fa-solid fa-chart-simple"></i>
              Estatisticas
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
nav {
  padding: 30px;
  z-index: 2;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #c41f1f;
      // text-shadow: 4px 0px 15px #c41f1f;
      font-size: 19px;
    }
  }
  .radius {
    border-radius: 5px;
  }

  .iten-detail {
    background-color: rgba(204, 204, 204, 0.661);
    padding: 8px;
    border-radius: 50%;
    margin-right: 5px;

    i {
      // padding: 1px;
    }
  }
}
</style>
>
