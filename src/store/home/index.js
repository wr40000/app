//home的小仓库
import { reqCategoryList } from "@/api";

const state = {
    //默认值别瞎写,根据接口返回值初始化类型
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    }
};
const actions = {
    async categoryList(commit){
        let result = await reqCategoryList();
        // console.log(typeof result);
        // console.log(Object.getOwnPropertyNames(result));
        // console.log(result.data);
        // console.log(Object.getOwnPropertyNames(result.data));
        if(result.code == 200){
            // console.log(result.data);
            //可以看看这里的this是个啥
            // console.log(this);
            //这里加个this就正常读取result.data，不加就没办法传过去
            this.commit('CATEGORYLIST',result.data);
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
};
