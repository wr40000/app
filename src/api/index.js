//统一管理接口API

import requests from './request';

export const reqCategoryList = ()=>{
    return requests({
        url:'/product/getBaseCategoryList',
        method:'get'}
        );
    };