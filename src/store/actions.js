/**
 * 包含异步操作处理数据
 * 去触发事件和传入参数
 */

import * as types from './mutation-types';

export default {
    addTotalNum({ commit }) {
        commit(types.ADD_TOTAL_NUM, 2);
    },
    delTotalNum({ commit }) {
        commit(types.DEL_TOTAL_NUM, 1);
    }
};
