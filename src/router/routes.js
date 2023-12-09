//配置路由
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import Terraria from "@/pages/Terraria";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import Grouporder from "@/pages/Center/groupOrder";
import Myorder from "@/pages/Center/myOrder";

export default [
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    children: [
      {
        path: "grouporder",
        component: Grouporder,
        meta: { show: true },
      },
      {
        path: "myorder",
        component: Myorder,
        meta: { show: true },
      },
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    name: "paysuccess",
    component: PaySuccess,
    meta: { show: true },
    beforeEnter(to, from, next) {
      if (from.path !== "/pay") {
        next("/pay");
      } else {
        next();
      }
    },
  },
  {
    path: "/pay",
    name: "pay",
    component: Pay,
    meta: { show: true },
  },
  {
    path: "/trade",
    name: "trade",
    component: Trade,
    meta: { show: true },
    /* 只能从购物车界面, 才能跳转到交易界面 */
    beforeEnter(to, from, next) {
      if (from.path === "/shopcart") {
        next();
      } else {
        next("/shopcart");
      }
    },
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
    beforeEnter(to, from, next) {
      let skuNum = to.query.skuNum;
      let skuInfo = sessionStorage.getItem("SKUINFO");
      console.log(`addcartsuccess--beforeEnter`);
      if (skuNum && skuInfo) {
        next();
      } else {
        // 在组件对象创建前强制跳转到首页
        next("/");
      }
    },
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/Terraria",
    component: Terraria,
    meta: { show: true },
  },
  {
    name: "search",
    path: "/search/:keyword?", //加上？,则params参数可传可不传
    component: Search,
    meta: { show: true },
    ////路由可不以传递props参数?
    // props:true,
    //还可以用props:{a:1,b:2}的形式给组件传递信息
    //不过最常用的是函数形式
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k };
    },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/Detail/:sukid",
    component: Detail,
    meta: { show: true },
  },
  //重定向。页面开始直接定位到首页
  {
    path: "*",
    redirect: "/home",
  },
];
