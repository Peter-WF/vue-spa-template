/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2016年11月25日16:37:50
 * @description   vuex 2.0
 */

// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入

import * as types from  '../mutation-types';

export const setInventory = ({commit},products)=> {
  commit(types["RECEIVE_PRODUCTS"], products)
}

// 向购物车添加货物
export const addToCart = ({commit}, id)=> {
  commit(types["ADD_TO_CART"], id)
}

export const successSubmit = ({commit})=> {
  // 提交成功 默认清空购物车
  commit(types["CLEAR_CART"]);
  commit(types["CHECKOUT_SUCCESS"])
}

export const failSubmit = ({commit,state})=> {
  // 提交失败清空购物车
  resetCart({commit,state});
  commit(types["CHECKOUT_FAILURE"])
}

export const submitCart = ({commit})=> {
  // 全部提交
  setTimeout(()=> {
    // 随机决定成功还是失败
    if (Math.random() * 100 > 50) {
      // 修改状态
      successSubmit({commit});
    } else {
      failSubmit({commit});
    }
  })
}

// 重新购买 = 1. 将购物车的商品退回库存 + 2. 清空购物车
export const resetCart = ({commit, state})=> {
  // 1.
  commit(types["ADD_TO_PRODUCTS"], state.cartModule.added);
  // 2.
  // clearCart({commit});
  commit(types["CLEAR_CART"]);
}

