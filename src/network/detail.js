import {request} from './request.js'
export function goodsDetail(gid){
	return request({
		url:'/supermallData/index/index/goodsDetail',
		params:{
			gid
		}
	})
}