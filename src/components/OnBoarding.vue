<template>
  <div class="onboarding">
    <div class="info-panel">
      <h3 class="title">{{title}}</h3>
      <p class="desc">{{desc}}</p>
    </div>
  </div>    
</template>

<script>
  export default {
    name: 'OnBoarding',
    props: {
      title: String,
      desc: String,
      accepted: false
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.onboarding {
  padding-top: 2rem;
}
.info-panel {
  margin-top: 30%;
  width: 300px;
}
h3, p {
  color: white;
}
</style>
