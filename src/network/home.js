import {request} from './request.js'
export function getHomeMulitiData(){
	return request({
		url:'/supermallData/index/index/homeData'
	})
}
 
 export function getHomeGoods(type,page){
 	return request({
 		url:'/supermallData/index/index/goodsData',
		params:{
			type,page
		}
 	})
 }