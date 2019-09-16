<template>
  <div class="onboarding">
    <img src="../assets/logo.svg" class="logo" alt="">
    <div class="info-panel">
      <transition tag="div" class="carousel" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="slide" v-for="slide in slides" :key="slide.id">
            <h3 class="title">{{slide.title}}</h3>
            <p class="desc">{{slide.desc}}</p>
        </div>
      </transition>
        <ul class="indicators">
          <li v-for="(_, index) in slides" :key="index" class="indicator" v-bind:class="{active: currentIndex === index}"></li>
        </ul>
      <div class="navigation">
        <span @click="goToPrev">Prev</span>
        <span @click="goToNext">Next</span>
      </div>
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
        console.log(this.currentIndex);
      },
      goToNext() {
        const first = this.slides.shift();
        this.slides = this.slides.concat(first);

        if(this.currentIndex < this.slides.length - 1 ){
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        console.log(this.currentIndex);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.onboarding {
  padding-top: 2rem;
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-panel {
  padding-top: 30%;
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  & .indicators {
    bottom: -200px;
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
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
  padding-bottom: 2rem;
}
.navigation {
  position: absolute;
  color: white;
  bottom: -300px;
  & span {
    padding: 0 1rem;
  }
}
</style>
