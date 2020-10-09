import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const cart = () => import('../views/cart/cart')
const my = () => import('../views/my/my')
const detail = () => import('../views/detail/detail')

const routes = [{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		component: home
	},
	{
		path: '/category',
		name: 'category',
		component: category
	},
	{
		path: '/cart',
		name: 'cart',
		component: cart
	},
	{
		path: '/my',
		name: 'my',
		component: my
	},
	{
		path: '/detail/:gid',
		name: 'detail',
		component: detail
	},
]

const router = new VueRouter({
	routes,
	// mode:'history'
})

//路由相同时处理
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


export default router
