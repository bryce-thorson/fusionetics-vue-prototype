<template>
  <div>
    <div class="questionnaire">
      <h3>Questionnaire View 1</h3>
      <router-link to="/">
      Back
      </router-link>
    </div>
    <div class="app-bg questionnaire-bg"></div>
  </div>
</template>


<script>
export default {
  name: 'Questionnaire',
  
}
</script>

<style lang="scss" scoped>
  .questionnaire-bg {
    background: url("../assets/questionnaire-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .questionnaire {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 20;
    color: white;
  }
</style>
