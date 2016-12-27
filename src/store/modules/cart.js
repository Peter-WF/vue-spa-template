/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2016-09-06 11:37
 * @description   购物车存储
 */

import{
  ADD_TO_CART,
  CLEAR_CART,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from '../mutation-types';

const state = {
  added: [],
  lastCheckout: null
}

const mutations = {
  [ADD_TO_CART] (state, productId){
    state.lastCheckout = null;
    const record = state.added.find(p=>p.id === productId)
    if (record) {
      record.quantity++;
    } else {
      state.added.push({
        id: productId,
        quantity: 1
      })
    }
  },
  [CLEAR_CART](state){
    state.added = [];
    state.lastCheckout = null;
  },
  [CHECKOUT_SUCCESS](state){
    state.lastCheckout = "success";
  },
  [CHECKOUT_FAILURE](){
    state.lastCheckout = "fail";
  }
}

export default {
  state,
  mutations
}
