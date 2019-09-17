<template>
  <div>
    <div class="questionnaire">
      <h5>Are there any areas you want to focus on?</h5>
      <button 
        v-for="answer in answers" 
        v-bind:key="answer.id" 
        class="btn btn-secondary" 
        v-on:click="isActive = answer.id" 
        v-bind:class="{active:answer.id == isActive}"
        >
        {{answer.answer}}
      </button>
      <div class="continue-area">
        <router-link to="/" style="width: 100%;">
          <button class="btn btn-primary btn-block" :disabled="!isActive">Continue</button>
        </router-link>
        <a href="#" class="btn-link">Log In</a>
      </div>
    </div>
    <div class="app-bg questionnaire-bg"></div>
  </div>
</template>


<script>
export default {
  name: 'Questionnaire',
  data() {
    return {
      answers: [
        {
          id: 1,
          answer: "No. General fitness."
        },
        {
          id: 2,
          answer: "Yes. I have some problem areas."
        }
      ],
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

  .questionnaire-bg {
    background: url("../assets/questionnaire-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .questionnaire {
    padding: 0 1.5rem;;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 20;
    color: white;
    & .btn.btn-secondary {
      background-color: rgba(0,0,0,0);
      border: 2px solid white;
      border-radius: 11px;
      width: 100%;
      text-align: left;
      margin: 0.5rem 0;
      &.active {
        border-color: $secondaryBlue;
      }
    }
  }
</style>
