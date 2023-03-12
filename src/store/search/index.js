//search的小仓库
import { reqGetSearchInfo } from "@/api";

const state = {
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchList({commit},params){
        let result = await reqGetSearchInfo(params);
        if(result.code == 200){
            this.commit('GETSEARCHLIST',result.data);
        }
    }
};
//getter为了简化项目数据而生
const getters = {
    //当前形参state,当前长裤中的state,并非大长裤中的state
    //长裤中的大state分模块，getters不分
    goodsList(state){
        //如果服务器没问题，下面写法没问题，但是如果网络有问题，则是有问题的
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
};
export default {
    state,
    mutations,
    actions,
    getters
};
