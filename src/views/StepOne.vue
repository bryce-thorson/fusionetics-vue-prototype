<template>
  <div class="step-1 page">
    <img src="../assets/logo.svg" class="logo" alt="">
    <router-link to="/step-2">
      <OnBoarding 
          title="Prevent Injuries" 
          desc="Find out what puts you at risk, and stop injuries before they happen." 
          />
      </router-link>
    <router-view/>
  </div>
</template>


<script>
import OnBoarding from "@/components/OnBoarding.vue";
export default {
  name: "step-1",
  components: {
    OnBoarding
  }
};
</script>



<style lang="scss" scoped>
@import "../scss/_variables.scss";

.step-1 {
  background-color: $primaryBlue;
  height: 100%;
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

