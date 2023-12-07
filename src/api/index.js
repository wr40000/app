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

//删除购物产品的接口
//URL:/api/cart/deleteCart/{skuId}   method:DELETE
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

//修改商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get
export const reqUpdateCheckedByid = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

//获取验证码
//URL:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

//注册
//url:/api/user/passport/register  method:post    phone code password
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });

//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data) =>
  requests({ url: "/user/passport/login", data, method: "post" });

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get
export const reqUserInfo = () =>
  requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = () =>
  requests({ url: "/user/passport/logout", method: "get" });
