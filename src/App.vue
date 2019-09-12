<template>
  <div id="app">
    <!-- <van-nav-bar title="Title" left-text="Back" fixed left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar> -->

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
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view/>
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
}
.page {
  position: absolute;
  width: 100%;
  padding: 0 1rem;
}

</style>
