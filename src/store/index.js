/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2016-12-27 14:32
 * @description
 */

import * as getters from './getters'
import * as actions from './actions'

import cartModule from './modules/cart'

import productModule from './modules/products'

const state = {};

const mutations = {};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default {
    state,
    getters,
    actions,
    mutations,
    modules: {
        // 此处顺序同后面执行同一个 mutation 时候的先后顺序一致
        cartModule,
        productModule
    }
}
