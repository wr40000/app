//home的小仓库
import { djdata } from "@/api";

const state = {
    //默认值别瞎写,根据接口返回值初始化类型
    djList:{},

};
const mutations = {
    GETDJLIST(state,djList){
        state.djList = djList;
        console.log(state.djList)
    }
};
const actions = {
    async getdjList(context){
        let result = await djdata();
        // console.log(result.data)
        context.commit('GETDJLIST',result.data);
    },
};
const getters = {};
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
};
