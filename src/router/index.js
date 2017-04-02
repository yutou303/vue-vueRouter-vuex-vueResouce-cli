import Vue from 'vue';
import Router from 'vue-router';
import home from '@/view/home/index/index.vue';
import member from '@/view/member/index/index.vue';
import msg from '@/view/msg/index/index.vue';
import trade from '@/view/trade/index/index.vue';
import tradeInfo from '@/view/trade/info/info.vue';
import service from '@/view/service/index/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/trade',
      name: 'trade',
      component: trade
    },
    {
      path: '/trade/:id',
      name: 'tradeInfo',
      component: tradeInfo
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/member',
      name: 'member',
      component: member
    }
  ]
});
