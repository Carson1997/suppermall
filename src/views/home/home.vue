<template>
	<div id="home" class="wrapper">
		<navbar class="home-nav">
			<div slot="center">购物车</div>
		</navbar>

		<scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
			<home-swiper :banner="banner"></home-swiper>
			<recommend :recommend="recommend"></recommend>
			<feature></feature>
			<tab :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tab"></tab>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>

		<backTop @click.native="backClick" v-show="isShowBack"></backTop>

	</div>
</template>

<script>
	import homeSwiper from './homeComps/homeSwiper.vue'
	import recommend from './homeComps/recommend.vue'
	import feature from './homeComps/feature.vue'

	import tab from '../../components/content/tab.vue'
	import navbar from '../../components/common/navbar/navbar.vue'
	import goodsList from '../../components/content/goods/goodsList.vue'
	import scroll from '../../components/common/scroll/scroll.vue'
	import backTop from '../../components/content/backTop.vue'

	import {
		getHomeMulitiData,
		getHomeGoods
	} from '../../network/home.js'
	import {
		debounce
	} from "common/utils";

	export default {
		components: {
			navbar,
			homeSwiper,
			recommend,
			feature,
			tab,
			goodsList,
			scroll,
			backTop
		},
		data() {
			return {
				banner: [],
				recommend: [],
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'news': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
				},
				currentTab: 'pop',
				isShowBack: false,
				itemImgListener:null
			}
		},
		created() {
			this.getHomeMulitiData()
			this.getHomeGoods('pop')
			this.getHomeGoods('news')
			this.getHomeGoods('sell')
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
		computed: {
			showGoods() {
				return this.goods[this.currentTab].list
			}
		},
		methods: {
			getHomeMulitiData() {
				getHomeMulitiData().then(res => {
					this.banner = res.data.data.banner.list;
					this.recommend = res.data.data.recommend.list;
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1;
					this.$refs.scroll.refresh()
					setTimeout(() => {
					this.$refs.scroll.scroll.finishPullUp();
					},1000)
				})
			},

			tabClick(index) {
				switch (index) {
					case 0:
						this.currentTab = 'pop'
						break
					case 1:
						this.currentTab = 'news'
						break
					case 2:
						this.currentTab = 'sell'
						break
				}
			},

			backClick() {
				this.$refs.scroll.scroll.scrollTo(0, 0, 500);
			},

			contentScroll(position) {
				//返回顶部是否显示
				this.isShowBack = -(position.y) > 1000
			},

			loadMore() {
				this.getHomeGoods(this.currentTab)
			}
		}
	}
</script>

<style scoped>
	#home {
		/* padding-top: 44px; */
		position: relative;
		height: 100vh;
	}

	.home-nav {
		background-color: var(--color-tint);
		color: #FFFFFF;
		/* position: fixed;
		left: 0;
		right: 0;
		top: 0; */
	}

	.content {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	
	.tab-control {
	  position: relative;
	  z-index: 9;
	}
</style>
