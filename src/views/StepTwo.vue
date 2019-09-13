<template>
  <div class="step-2 page">
  <img src="../assets/logo.svg" class="logo" alt="">
   <router-link to="/">
    <OnBoarding 
        title="Decrease Soreness" 
        desc="79% of users report pain reduction." 
        />
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import OnBoarding from "@/components/OnBoarding.vue";
export default {
  name: "step-2",
  components: {
    OnBoarding
  }
};
</script>



<style lang="scss" scoped>
@import "../scss/_variables.scss";

.step-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
}
.logo {
  max-width: 300px;
  height: auto;
}
</style>

