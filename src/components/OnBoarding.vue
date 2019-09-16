<template>
  <div class="onboarding">
    <img src="../assets/logo.svg" class="logo" alt="">
    <div class="info-panel">
      <div class="navigation">
        <span @click="goToPrev">Prev</span>
        <span @click="goToNext">Next</span>
      </div>
      <transition tag="div" class="carousel" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="slide" v-for="slide in slides" :key="slide.id">
            <h3 class="title">{{slide.title}}</h3>
            <p class="desc">{{slide.desc}}</p>
        </div>
      </transition>
        <ul class="indicators">
          <li v-for="(_, index) in slides" :key="index" class="indicator" v-bind:class="{active: currentIndex === index}"></li>
        </ul>
    </div>
    <div class="checkbox-panel">
      <label for="checkbox" class="checkbox-container">
        I accept the terms &amp; conditions
        <input type="checkbox" id="checkbox" v-model="checked">
        <span class="checkmark"></span>
      </label>
    </div>
  </div>    
</template>

<script>
  export default {
    name: 'OnBoarding',
    data() {
      return {
        slides: [
          { 
            title: 'PREVENT INJURIES',
            desc: 'Find out what puts you at risk, and stop injuries before they happen.',
            id: 1
          },
          { 
            title: 'DECREASE SORENESS',
            desc: '79% of users report pain reduction.',
            id: 2
          },
          { 
            title: 'REACH YOUR GOALS',
            desc: 'Discover your weak points and learn how to fix them.',
            id: 3
          },
          { 
            title: 'RECOVERY TRACKING',
            desc: 'Track your stress, sleep and soreness levels and make a faster recovery.',
            id: 4
          },
          { 
            title: 'INCREASE MOBILITY',
            desc: 'Loosen and restore muscles to move better and feel better.',
            id: 5
          }
        ],
        currentIndex: 0,
        checked: false,
      }
    },
    methods: {
      goToPrev() {
        const last = this.slides.pop();
        this.slides = [last].concat(this.slides);

        if(this.currentIndex > 0 ){
          this.currentIndex--;
        } else {
          this.currentIndex = this.slides.length - 1;
        }
      },
      goToNext() {
        const first = this.slides.shift();
        this.slides = this.slides.concat(first);

        if(this.currentIndex < this.slides.length - 1 ){
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_variables.scss';

.onboarding {
  padding-top: 2rem;
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.info-panel {
  position: relative;
  width: 80%;
  height: 200px;
  & .carousel {
    overflow: hidden;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
  }
  & .slide {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
  }
  & .navigation {
    position: absolute;
    color: white;
    height: 200px;
    left: -20px;
    right: -20px;
    & span {
      opacity: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px;
    }
    & span:first-of-type {
      left: -1rem;
    }
    & span:last-of-type {
      right: -1rem;
    }
  }
  & .indicators {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 7rem;
    & .indicator {
      width: 10px;
      height: 10px;
      margin: 0 0.5rem;
      border-radius: 50%;
      background-color: white;
      border: 1px solid white;
      opacity: 0.3;
      &.active {
        opacity: 1;
      }
    }
    & .indicator:first-of-type {
      margin-left: 0.25rem;
    }
  }
}
.checkbox-panel {
  color: white;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: row;
  & .checkbox-container {
      position: relative;
      padding-left: 2.25rem;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      & input {
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        position: absolute;
    }
    & .checkmark {
      position: absolute;
      top: 2px;
      left: 0;
      height: 1rem;
      width: 1rem;
      background-color: $gray--100;
      border-radius: 2px;
      &::after {
        content: "";
        position: absolute;
        display: none;
      }
    }
    & input:checked ~ .checkmark {
      background-color: white;
    }
    & input:checked ~ .checkmark:after {
        display: block;
    }
    & .checkmark::after {
      left: 5px;
      top: 2px;
      width: 6px;
      height: 10px;
      border: solid $secondaryBlue;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}

h3 {
  padding-bottom: 0.5rem;
}
h3, p {
  color: white;
  margin: 0;
}
.logo {
  max-width: 300px;
  height: auto;
}
</style>
