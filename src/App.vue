<template>
	<div id="app">
		<navheader></navheader>
		
		<router-view class="routerview"></router-view>
	</div>
</template>

<script>
	import Vue from "vue"
	import Element from "element-ui"
	import 'element-ui/lib/theme-default/index.css'
	import navheader from "./components/nav.vue"
	Vue.use(Element)

	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components:{
			navheader
		},
		mounted(){
	
		}
	}
	
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/*	margin-top: 60px;*/
	}
	.animated{
		box-shadow: none !important;	
	}
	.routerview{
		
	}
	
	
</style>