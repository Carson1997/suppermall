<template>
	<swiper class="deSwiper">
		<swiper-item v-for="item in lbImg" :key="item.title">
				<img :src="item.image">
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from '../../../components/common/swiper'
	export default{
		props:{
			lbImg:{
				type:Array,
				default(){
				return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
	.deSwiper{
		height: 300px;
	}
</style>
