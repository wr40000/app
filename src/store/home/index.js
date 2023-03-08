//home的小仓库
import { reqBannersList, reqCategoryList } from "@/api";

const state = {
    //默认值别瞎写,根据接口返回值初始化类型
    categoryList:[],
    bannersList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERSLIST(state,bannersList){
        state.bannersList = bannersList;
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
    },
    async getBannersList(commit){
        let result = await reqBannersList();
        if(result.code == 200){
            this.commit('GETBANNERSLIST',result.data);
        }
    },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
};
