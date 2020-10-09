<template>
	<div class="wrapper" ref="wrapper">
		<div>
			<div>dfss</div>
			<div>dfss</div>
			<div>dfss</div>
			<div>dfss</div>
			<div>dfss</div>
			<div>dfss</div>
			<div>dfss</div>
			<div>dfss</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper, {

			})
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 100px;
		background-color: red;
	}
</style>
