<template>
  <div id="app">
    <div class="container">
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive>
      </transition>
    </div>
    <vfooter v-show="footerNavShow"></vfooter>
  </div>
</template>

<script>
import vfooter from './components/vfooter/vfooter';

import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'pop-in'
    };
  },
  computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'footerNavShow'
    ])
  },
  components: {
    vfooter
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      // console.log(to.path.split('/'), from.path.split('/'));
      this.transitionName = toDepth < fromDepth ? 'pop-out' : 'pop-in';
      if (toDepth > 2) {
        this.$store.dispatch('hideFooterNav');
      } else {
        this.$store.dispatch('showFooterNav');
      }
    }
  }
};
</script>

<style lang="stylus">
  #app
    .container
      height: 400px

    .router-view {
      width: 100%;
      animation-duration: 0.5s;
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
