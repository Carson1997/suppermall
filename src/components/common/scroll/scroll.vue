<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>


<script scoped>
	import BScroll from 'better-scroll'
	export default {
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})
			//监听滚动
			if (this.probeType === 2 || this.probeType === 3) {
				this.scroll.on('scroll', position => {
					this.$emit('scroll', position)
				})
			}

			//监听上拉 
			if (this.pullUpLoad) {
				this.scroll.on('pullingUp', () => {
					this.$emit('pullingUp')
				})
			}
		},
		methods: {
			refresh() {
				this.scroll && this.scroll.refresh()
			},
			finishPullUp() {
			  this.scroll && this.scroll.finishPullUp()
			},
		}
	}
</script>

<style>
</style>
