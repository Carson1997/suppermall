<template>
	<div class="goodsItem" @click="itemClick">
		<img :src="goodsItem.img" @load="imageLoad"/>
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.collect}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			goodsItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods:{
			itemClick(){
				this.$router.push('/detail/'+this.goodsItem.gid)
			},
			imageLoad() {
			  this.$bus.$emit('itemImageLoad')
			},
		}
	}
</script>

<style>
	.goodsItem {
		padding-bottom: 40px;
		position: relative;
		width: 48%;
	}

	.goodsItem img {
		width: 100%;
		border-radius: 5px;
	}

	.goods-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}

	.goods-info p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 3px;
	}

	.goods-info .price {
		color: var(--color-high-text);
		margin-right: 20px;
	}


	.goods-info .collect {
		position: relative;
	}

	.goods-info .collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
