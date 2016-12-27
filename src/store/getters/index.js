/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2016-09-02 14:53
 * @description
 */

/**
 * 获取 cart 内数量
 * @param state
 * @returns {number}
 */
export const getCurrentQuantity = (state) => {
  return state.cartModule.added;
}
/**
 * 获取 cart lastCheckout 状态
 * @param state
 * @returns {number}
 */
export const getLastCheckout = (state) => {
  return state.cartModule.lastCheckout;
}
/**
 * 获取库存
 * @param state
 * @returns {number}
 */
export const getCurrentProducts = (state)=> {
  return state.productModule.all;
}
