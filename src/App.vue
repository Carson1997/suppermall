<template>
  <div id="app">
	  <keep-alive exclude="detail">
		  <router-view></router-view>
	  </keep-alive>
	 
	 <maintarbar></maintarbar>
  </div>
</template>

<script>
	import maintarbar from './components/content/maintarbar.vue'
	export default {
		name: 'App',
		data() {
			return {
			}
		},
		components: {
			maintarbar
		},
		methods: {
			
		},
	
	}
</script>


<style>
@import url("assets/css/base.css");
</style>
