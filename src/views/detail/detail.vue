<template>
	<div id="detail">
		<navbar class="detail-nav"></navbar>
		<scroll class="content" ref="scroll">
			<swiper :lbImg="lbImg"></swiper>
			<baseInfo :goods="goodsInfo"></baseInfo>
			<shopsInfo :shop="shopsInfo"></shopsInfo>
			<goodsParam :paramInfo="paramInfo"></goodsParam>
			<commentInfo :commentInfo="commentInfo"></commentInfo>
			<!-- <goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></goods-info> -->
			<recommend :goods ="recommend"></recommend>
		</scroll>
	</div>
</template>

<script>
	import navbar from './detailComps/nvabar.vue'
	import scroll from '../../components/common/scroll/scroll.vue'
	import swiper from './detailComps/detailSwiper.vue'
	import baseInfo from './detailComps/DetailBaseInfo.vue'
	import shopsInfo from './detailComps/DetailShopInfo.vue'
	import goodsInfo from './detailComps/DetailGoodsInfo.vue'
	import goodsParam from './detailComps/DetailParamInfo.vue'
	import commentInfo from './detailComps/DetailCommentInfo.vue'
	import recommend from '../../components/content/goods/goodsList.vue'

	import {
		goodsDetail
	} from '../../network/detail.js'
	import {
		getHomeGoods
	} from '../../network/home.js'
	import {
		debounce
	} from "common/utils";
	
	export default {
		name: 'detail',
		data() {
			return {
				gid: null,
				lbImg: [],
				goodsInfo: {},
				shopsInfo: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo :{},
				recommend:[],
				itemImgListener:null
			}
		},
		created() {
			this.gid = this.$route.params.gid;
			this.goodsDetail()
			this.getHomeGoods()
		},
		mounted() {
		 // 1.图片加载完成的事件监听
		 const refresh = debounce(this.$refs.scroll.refresh, 50)
		 this.itemImgListener = () => {
		 			  refresh()
		 };
		 this.$bus.$on('itemImageLoad', this.itemImgListener)
		 
		},
		deactivated() {
			// 取消监听
			this.$bus.$off('itemImageLoad',this.itemImgListener)
		},
		components: {
			navbar,
			scroll,
			swiper,
			baseInfo,
			goodsDetail,
			shopsInfo,
			goodsInfo,
			goodsParam,
			commentInfo,
			recommend,
		},
		methods: {
			goodsDetail() {
				goodsDetail(this.gid).then(res => {
					const data = res.data;
					this.lbImg = data.lbImg;
					this.goodsInfo = data.goodsInfo;
					this.shopsInfo = data.shopsInfo;
					this.detailInfo = data.detailInfo;
					this.paramInfo = data.paramInfo;
					this.commentInfo = data.commentInfo;
				})
			},
			getHomeGoods() {
				getHomeGoods('pop', 1).then(res => {
					this.recommend = res.data.list;
				})
			},
			imageLoad() {
				this.$refs.scroll.refresh()
			}
		}
	}
</script>

<style scoped>
	#detail {
		position: relative;
		z-index: 9;
		background-color: #fff;
		height: 100vh;
	}

	.detail-nav {
		position: relative;
		z-index: 9;
		background-color: #fff;
	}

	.content {
		height: calc(100% - 44px);
	}
</style>
