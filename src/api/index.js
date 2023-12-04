//统一管理接口API

import requests from './request';
import Mockrequests from './MockAjax';
//django测试接口
import djrequests from './djrequest';

export const djdata = ()=>{
    return djrequests({
        // url:'/Terraria',
        // url:'/test',
        method:'get'}
        );
    };


//三级联动接口
export const reqCategoryList = ()=>{
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'}
        );
    };

//轮播图数据    
//export const reqBannersList.get写在就不行，为什么
export const reqBannersList = ()=>{
    return Mockrequests({
        url:'/banners',
        method:'get'}
        );
    };

export const reqFloorsList = ()=>{
    return Mockrequests({
        url:'/floors',
        method:'get'}
        );
    };
//params至少是一个对象
export const reqGetSearchInfo = (params)=>{
    // console.log(params);
    return requests({
        url:'/list',
        method:'post',
        data:params
    }
        );
    };










































































