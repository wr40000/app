//购物车的小仓库
import { reqAddOrUpdateShopCart, reqCartList } from "@/api";

const state = {
  //默认值别瞎写,根据接口返回值初始化类型
  cartList: [],
};
const mutations = {
  GETCARLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARLIST", result.data);
    }
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
