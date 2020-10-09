<template>
	<div class="goods">
		<goods-list-item v-for="(item,index)  in goods" :goodsItem="item" :key="index"></goods-list-item>
	</div>
</template>

<script>
	import goodsListItem from './goodsListItem.vue'
	export default {
		props: {
			goods: {
				type: Array,
				default () {
					return []
				}
			}
		},
		components: {
			goodsListItem
		}
	}
</script>

<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
