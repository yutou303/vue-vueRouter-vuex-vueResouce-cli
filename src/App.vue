<template>
  <div id="app">
    <div class="container">
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive>
      </transition>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vfooter from './components/vfooter/vfooter';

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'pop-in'
    };
  },
  components: {
    vfooter
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      console.log(window.history.length);
      this.transitionName = toDepth < fromDepth ? 'pop-out' : 'pop-in';
    }
  }
};
</script>

<style lang="stylus">
  @import './common/stylus/variables.styl';
  #app
    font-family: font-family-default
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
    .container
      height: 100px
    .router-view {
      width: 100%;
      animation-duration: 0.8s;
      animation-fill-mode: both;
      backface-visibility: hidden;
    }
    .pop-out-enter-active,
    .pop-out-leave-active,
    .pop-in-enter-active,
    .pop-in-leave-active {
      will-change: transform;
      // height: 100%;
      position: absolute;
      left: 0;
    }
    .pop-out-enter-active {
      animation-name: popInLeft;
    }
    .pop-out-leave-active {
      animation-name: popOutRight;
    }
    .pop-in-enter-active {
      perspective: 1000;
      animation-name: popInRight;
    }
    .pop-in-leave-active {
      animation-name: popOutLeft;
    }
    @keyframes popInLeft {
      from {
        transform: translate3d(-100%, 0, 0);
      }
      to {
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes popOutLeft {
      from {
        opacity: 1;
      }
      to {
        transform: translate3d(-100%, 0, 0);
      }
    }
    @keyframes popInRight {
      from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes popOutRight {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
    }
</style>
