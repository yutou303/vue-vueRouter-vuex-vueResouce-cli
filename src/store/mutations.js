/**
 * 更改 store 事件动作
 */

import * as types from './mutation-types';

export default {
    [types.ADD_TOTAL_NUM](state, num) {
        state.totalNum = state.totalNum + num;
    },
    [types.DEL_TOTAL_NUM](state, num) {
        state.totalNum = state.totalNum - num;
    },
    [types.SHOW_FOOTER_NAV](state) {
        state.footerNavShow = true;
    },
    [types.HIDE_FOOTER_NAV](state) {
        state.footerNavShow = false;
    }
};
