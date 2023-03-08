/* 
利用mockjs来mock数据接口
*/

//webpack默认对外暴露的有JSON数据格式，图片
import Mock from 'mockjs'
import banners from './banners.json'
import floors from './floors.json'

Mock.mock("/mock/banners",{code:200,data:banners});
Mock.mock("/mock/floors",{code:200,data:floors});






































