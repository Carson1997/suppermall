<template>
	<div>
		<tarbar>
			<tarbaritem path="/home">
				<img src="../../assets/img/tabbar/home.svg" slot="item-icon"/>
				<img src="../../assets/img/tabbar/home_active.svg" slot="item-icon-active" />
				<div slot="item-text">首页</div>
			</tarbaritem>
			<tarbaritem path="/category" >
				<img src="../../assets/img/tabbar/category.svg" slot="item-icon" />
				<img src="../../assets/img/tabbar/category_active.svg" slot="item-icon-active" />
				<div slot="item-text">分类</div>
			</tarbaritem>
			<tarbaritem path="/cart" >
				<img src="../../assets/img/tabbar/shopcart.svg" slot="item-icon"/>
				<img src="../../assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" />
				<div slot="item-text">购物车</div>
			</tarbaritem>
			<tarbaritem path="/my" >
				<img src="../../assets/img/tabbar/profile.svg" slot="item-icon"/>
				<img src="../../assets/img/tabbar/profile_active.svg" slot="item-icon-active" />
				<div slot="item-text">我的</div>
			</tarbaritem>
		</tarbar>
	</div>
</template>

<script>
	import tarbar from '../common/tarbar/tabbar.vue'
	import tarbaritem from '../common/tarbar/tarbaritem.vue'
	export default {
		name:'maintarbar',
		components: {
			tarbar,
			tarbaritem
		}
	}
</script>

<style>
</style>
