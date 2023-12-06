//统一管理接口API

import requests from "./request";
import Mockrequests from "./MockAjax";
//django测试接口
import djrequests from "./djrequest";

export const djdata = () => {
  return djrequests({
    // url:'/Terraria',
    // url:'/test',
    method: "get",
  });
};

//三级联动接口
export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

//轮播图数据
//export const reqBannersList.get写在就不行，为什么
export const reqBannersList = () => {
  return Mockrequests({
    url: "/banners",
    method: "get",
  });
};

export const reqFloorsList = () => {
  return Mockrequests({
    url: "/floors",
    method: "get",
  });
};

//params至少是一个对象
export const reqGetSearchInfo = (params) => {
  return requests({
    url: "/list",
    method: "post",
    data: params,
  });
};

//获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式：get
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

//将产品添加到购物车中（获取更新某一个产品的个数）
///api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

//获取购物车列表数据接口
//URL:/api/cart/cartList   method:get
export const reqCartList = () =>
  requests({ url: "/cart/cartList ", method: "get" });
