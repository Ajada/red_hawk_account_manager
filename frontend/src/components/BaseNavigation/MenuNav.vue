<template>
  <div>
    <div class="header"></div>
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" v-model="activeMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
      <div class="spinner diagonal part-1"></div>
      <div class="spinner horizontal"></div>
      <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu">
      <ul class="sidebarMenuInner">
        <li>
          <router-link :to="{ name: 'home-view' }"> Minhas Senhas </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'settings-view' }"> Gerenciar Conta </router-link>
        </li>
        <!-- <li><a :href="{ name: 'home-view' }">Minhas Senhas</a></li>
        <li><a :href="{ name: 'settings-view' }">Gerenciar Conta</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">YouTube</a></li>
        <li><a href="#">Linkedin</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuNav',
  data: function () {
    return {
      activeMenu: false
    }
  },
  // watch: {
  //   activeMenu (valor) {
  //     addEventListener('touchstart', () => {
  //       if (valor) {
  //         this.activeMenu = false
  //       }
  //     })
  //   }
  // }
}
</script>

<style scoped lang="scss">
.header {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background-color: #FC466B;
  position: fixed;
  height: 60px!important;
  overflow: hidden;
  z-index: 10;
}
input[type=checkbox] {
  transition: all 0.3s;
  box-sizing: border-box;
  display: none;
}
input[type=checkbox]:checked {
  ~ #sidebarMenu {
    transform: translateX(0);
  }
  ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
  }
  ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
  }
  ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
  }
}
.sidebarIconToggle {
  transition: all 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 22px;
  left: 15px;
  height: 22px;
  width: 22px;
  .spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #fff;
  }
  .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }
  .diagonal{ }
  .part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
  }
  .part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
  }
}
#sidebarMenu {
  height: 100%;
  position: fixed;
  left: 0;
  width: 250px;
  margin-top: 60px;
  transform: translateX(-250px);
  transition: transform 250ms ease-in-out;
  background: linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%);
  z-index: 11;
  .sidebarMenuInner{
    margin:0;
    padding:0;
    border-top: 1px solid rgba(255, 255, 255, 0.10);
    li{
      list-style: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      padding: 20px;
      cursor: pointer;
      border-bottom: 1px solid rgba(255, 255, 255, 0.10);
      span{
        display: block;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.50);
      }
      a{
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
</style>
