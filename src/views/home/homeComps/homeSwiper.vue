<template>
	<swiper>
		<swiper-item v-for="(item , index) in banner" :key=index>
			<a :href="item.link">
				<img :src="item.image">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from '../../../components/common/swiper'
	export default{
		data() {
		  return {
		    isLoad: false
		  }
		},
		props:{
			banner:{
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
</style>
