/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2016-09-06 11:22
 * @description   产品存储
 */

import {
  RECEIVE_PRODUCTS, ADD_TO_CART, ADD_TO_PRODUCTS
} from "../mutation-types";

const state = {
  all: []
}

const mutations = {

  [RECEIVE_PRODUCTS] (state, products) {
    state.all = products;
  },

  [ADD_TO_CART] (state, productId){
    console.log("product");
    state.all.find(p=>p.id === productId).inventory--;
  },

  [ADD_TO_PRODUCTS] (state, added){
    for (var i = 0; i < added.length; i++) {
      state.all.find(p=>p.id === added[i].id).inventory += added[i].quantity;
    }
  }
}

export default {
  state,
  mutations
}
