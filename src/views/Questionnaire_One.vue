<template>
  <div>
    <div class="questionnaire">
      <div class="qa-area">
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
      </div>
      <div class="continue-area">
        <router-link to="/" class="btn-link program">How does this affect my program?</router-link>
        <router-link to="/" style="width: 100%;">
          <button class="btn btn-primary btn-block" :disabled="!isActive">Continue</button>
        </router-link>
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
    & .btn.btn-secondary {
      background-color: rgba(0,0,0,0);
      border: 1px solid white;
      border-radius: 11px;
      width: 100%;
      text-align: left;
      margin: 0.5rem 0;
      position: relative;
      &::after {
        position: absolute;
        right: 24px;
        top: 8px;
        width: 8px;
        height: 16px;
        border: solid $secondaryBlue;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        content: '';
        display: none;
      }
      &.active {
        border-color: $secondaryBlue;
        &::after {
          display: block;
        }
      }
    }
    & .qa-area {
      margin-top: -2rem;
    }
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
    & .btn-link.program {
      text-transform: none;
      font-style: italic;
      font-weight: 100;
      margin-bottom: 1rem;
    }
    & h5 {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
</style>
