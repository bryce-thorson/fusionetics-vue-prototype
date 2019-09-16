<template>
  <div id="app">
    <!-- <van-tabbar v-model="active">  
      <van-tabbar-item 
        v-on:click="show = !show"
        replace
        to="/"
        icon="home-o"
        >Home
      </van-tabbar-item>
      <van-tabbar-item 
        v-on:click="show = !show"
        replace
        to="/about"
        icon="search"
        >About
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">Tab</van-tabbar-item>
      <van-tabbar-item icon="setting-o">Tab</van-tabbar-item>
    </van-tabbar> -->
    <!-- <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
    </transition> -->
    <OnBoarding class="onboarding"/>
    <div class="app-bg"></div>
  </div>
</template>

<script>
import OnBoarding from "@/components/OnBoarding.vue";
export default {
  name: 'app',
  components: {OnBoarding},
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
