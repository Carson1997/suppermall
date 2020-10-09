import axios from 'axios';

export function request (config){
	const instance = axios.create({
		baseURL: 'http://localhost',
		timeout:5000
	});
	
	//拦截
	instance.interceptors.request.use(config =>{
		// console.log(config)
		return config;
	},err => {
		// console.log(err)
	})
	//相应拦截
	instance.interceptors.response.use(res =>{
		// console.log(res)
		return res;
	},err => {
		// console.log(err)
	})
	
	return instance(config);
}