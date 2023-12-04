//对axios二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";


const djrequests = axios.create({
    // baseURL:"http://127.0.0.1:8001",
    baseURL:"/Terraria",
    timeout:5000,
    // data:{GameName:"随风"}
});

djrequests.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
});

djrequests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('falie'));
});

export default djrequests;