import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
    totalNum: 0,
    loggedIn: false,
    footerNavShow: true
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});
