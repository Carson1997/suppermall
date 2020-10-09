<template>
	<div class="tar-bar-item" @click="tarClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="isStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tarbaritem',
		props: {
			path: String,
			activeColor: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {}
		},
		computed: {
			isActive() {
				return this.$route.path === this.path
			},
			isStyle() {
				return this.isActive ? {color:this.activeColor}:{}
			}
		},
		methods: {
			tarClick() {
				this.$router.push(this.path)
			}
		}

	}
</script>

<style>
	.tar-bar-item {
		flex: 1;
		height: 49px;
		text-align: center;
		font-size: 14px;
	}

	.tar-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 3px;
	}

	.active {
		color: red;
	}
</style>
