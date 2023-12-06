import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api/index";
import { getUUID } from "@/utils/uuid_token";

export const state = {
  goodInfo: {},
  //游客临时身份
  uuid_token: getUUID(),
};
export const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
export const actions = {
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODINFO", result.data);
    }
  },
  //加入购物车的||修改某一个产品的个数
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
    //不需要在三连环（仓库存储数据了）
    //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (result.code == 200) {
      return "ok";
    } else {
      return new Promise.reject(new Error("faile"));
    }
  },
};
export const getters = {
  //路径导航简化的数据
  categoryView(state) {
    //比如:state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
    //当前计算出的 categoryView属性值至少是一个空对象，假的报错不会有了。
    return state.goodInfo.categoryView || {};
  },
  //简化产品信息的数据
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  //产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
