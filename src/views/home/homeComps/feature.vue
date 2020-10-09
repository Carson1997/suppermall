<template>
	<div class="featuer">
		<a href="http://act.mogujie.com/zzlx67">
			<img src="../../../assets/img/home/recommend_bg.jpg" />
		</a>
	</div>
</template>

<script>
	export default {
		props: {
			recommend: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style>
	.featuer img{
		width: 100%;
	}
</style>
