//统一管理接口API

import requests from './request';
import Mockrequests from './MockAjax';

export const reqCategoryList = ()=>{
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'}
        );
    };
//export const reqBannersList.get写在就不行，为什么
export const reqBannersList = ()=>{
    return Mockrequests({
        url:'/banners',
        method:'get'}
        );
    };