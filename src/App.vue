<template>
  <div id="app">
    <router-view></router-view>
    <div class="app-bg"></div>
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
  position: relative;
  height: 100%;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url("./assets/onboarding-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::after {
    position: absolute;
    background-color: $primaryBlue;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.90;
    content: ''; 
  }
}
.page {
  position: absolute;
  width: 100%;
  padding: 0 1rem;
  z-index: 10;
}

</style>
