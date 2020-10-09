<template>
	<div>
		<navbar>
			<div slot="left" class="back" @click="back">
				<img src="../../../assets/img/common/back.svg">
			</div>
			<div slot="center" class="title">
				<div v-for="(item,index) in titles" class="title-item" :class="{active:index === currentIndex}" @click="itemClick(index)">{{item}}</div>
			</div>
		</navbar>
	</div>
</template>

<script>
	import navbar from '../../../components/common/navbar/navbar.vue'
	export default {
		data() {
			return {
				currentIndex:0,
				titles:['商品',"参数",'评论','推荐']
			}
		},
		components: {
			navbar
		},
		methods:{
			itemClick(index){
				this.currentIndex = index;
			},
			back(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title{
		display: flex;
		font-size: 13px;
	}
	
	.back img{
		margin-top: 10px;
	}
	
	.title-item{
		flex: 1;
	}
	
	.active{
		color: var(--color-high-text);
	}
</style>
