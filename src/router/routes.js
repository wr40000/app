//配置路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'


export default [
    {
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        name:"search",
        path:"/search/:keyword?",    //加上？,则params参数可传可不传
        component:Search,
        meta:{show:true},
        ////路由可不以传递props参数?
        // props:true,
        //还可以用props:{a:1,b:2}的形式给组件传递信息
        //不过最常用的是函数形式
        props:($route)=>{
            return {keyword:$route.params.keyword,k:$route.query.k};
        }

    },
    {
        path:"/register",
        component:Register,
        meta:{show:false}
    },
    {
        path:"/login",
        component:Login,
        meta:{show:false}
    },
    {
        path:"/Detail/:sukid",
        component:Detail,
        meta:{show:true}
    },
    //重定向。页面开始直接定位到首页
    {
        path:'*',
        redirect:"/home"
    }
]