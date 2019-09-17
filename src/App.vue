<template>
  <div id="app">
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</template>





<script>
export default {
  name: 'app',
  data() {
    return {
      active: 0,
      show: true
    }
  }
}
</script>

<style lang="scss">
@import "./scss/_variables.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
}
.app-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  &::after {
    position: absolute;
    background-color: $primaryBlue;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.9;
    content: "";
  }
}

</style>
