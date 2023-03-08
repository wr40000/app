//对axios二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";


const Mockrequests = axios.create({
    baseURL:"/mock",
    timeout:5000,
    // data:{GameName:"随风"}
});

Mockrequests.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
});

Mockrequests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('falie'));
});

export default Mockrequests;