//对axios二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";


const requests = axios.create({
    baseURL:"/api",
    timeout:5000,
    // data:{GameName:"随风"}
});

requests.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
});

requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('falie'));
});

export default requests;