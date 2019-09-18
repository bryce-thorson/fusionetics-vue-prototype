<template>
  <div>
    <div class="onboarding">
      <img src="../assets/logo.svg" class="logo" alt="">
      <div class="info-panel">
        <div class="navigation">
          <span @click="goToPrev">Prev</span>
          <span @click="goToNext">Next</span>
        </div>
        <transition tag="div" class="carousel" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div class="slide" v-for="slide in slides" :key="slide.id">
              <h5 class="title">{{slide.title}}</h5>
              <p class="desc">{{slide.desc}}</p>
          </div>
        </transition>
          <ul class="indicators">
            <li v-for="(_, index) in slides" :key="index" class="indicator" v-bind:class="{active: currentIndex === index}"></li>
          </ul>
      </div>
      <div class="checkbox-panel">
        <label for="checkbox" class="checkbox-container">
          I accept the <a href="#" class="btn-link">terms &amp; conditions</a>
          <input type="checkbox" id="checkbox" v-model="checked">
          <span class="checkmark"></span>
        </label>
        <router-link to="/Onboarding-2" style="width: 100%;">
          <button class="btn btn-primary btn-block" :disabled="!checked">Continue</button>
        </router-link>
        <a href="#" class="btn-link">Log In</a>
      </div>
    </div>  
    <div class="app-bg onboarding-bg"></div>  
  </div>
</template>

<script>
export default {
  name: "Onboarding",
  data() {
    return {
      slides: [
        {
          title: "PREVENT INJURIES",
          desc:
            "Find out what puts you at risk, and stop injuries before they happen.",
          id: 1
        },
        {
          title: "DECREASE SORENESS",
          desc: "79% of users report pain reduction.",
          id: 2
        },
        {
          title: "REACH YOUR GOALS",
          desc: "Discover your weak points and learn how to fix them.",
          id: 3
        },
        {
          title: "RECOVERY TRACKING",
          desc:
            "Track your stress, sleep and soreness levels and make a faster recovery.",
          id: 4
        },
        {
          title: "INCREASE MOBILITY",
          desc: "Loosen and restore muscles to move better and feel better.",
          id: 5
        }
      ],
      currentIndex: 0,
      checked: false
    };
  },
  methods: {
    goToPrev() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);

      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.slides.length - 1;
      }
    },
    goToNext() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);

      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/_variables.scss";
.onboarding-bg {
  background: url("../assets/onboarding-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.onboarding {
  position: absolute;
  padding-top: 2rem;
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
  height: 120px;
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
    height: 120px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 320px;
  & .checkbox-container {
    position: relative;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-size: 0.75rem;
    padding-left: 2.25rem;
    padding-bottom: 1rem;
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
      top: 0px;
      left: 0.5rem;
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
    & .btn-link {
      padding-left: 0.25rem;
      margin-bottom: 0;
    }
  }
}
h5, p {
  color: white;
  margin: 0;
}
.logo {
  max-width: 300px;
  height: auto;
}
</style>
