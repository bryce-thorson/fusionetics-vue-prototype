<template>
  <div>
    <div class="onboardingThree">
      <div class="title-area">
        <h5>Select any area that feels tight, sore, or painful</h5>
      </div>
      <bodyPartSelection />
       <div class="continue-area">
        <router-link to="/" class="btn-link program">How does this affect my program?</router-link>
        <router-link to="/" style="width: 100%;">
          <button class="btn btn-primary btn-block" :disabled="!isActive">Next</button>
        </router-link>
      </div>
    </div>
    <div class="app-bg onboardingThree-bg"></div>
  </div>
</template>


<script>
import bodyPartSelection from '../components/bodyPartSelection';
export default {
  name: 'OnboardingThree',
  components: {bodyPartSelection},
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.onboardingThree-bg {
    background: url("../assets/onboardingThree-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
.onboardingThree {
  padding:  1.5rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 20;
  color: white;
  & .continue-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: absolute;
      bottom: 1rem;
      padding: 0 2rem;
    }
}

</style>
