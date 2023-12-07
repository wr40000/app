//对axios二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import store from "@/store";

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
  // data:{GameName:"随风"}
});

requests.interceptors.request.use((config) => {
  if (store.state.detail.uuid_token) {
    //请求头添加一个字段(userTempId):和后台老师商量好了
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  //需要携带token带给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }
  nProgress.start();
  return config;
});

requests.interceptors.response.use(
  (res) => {
    nProgress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("falie"));
  }
);

export default requests;
