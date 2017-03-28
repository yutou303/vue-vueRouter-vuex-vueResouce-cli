import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/home/home';
import My from '@/view/my/my';
import Notifications from '@/view/notifications/notifications';
import Orders from '@/view/orders/orders';
import Services from '@/view/services/services';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
});
