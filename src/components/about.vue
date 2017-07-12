<template>
	<div class="about">
		<img src="../assets/images/old.jpg" />
		<h2>wr</h2>
		<p>
			<a href="https://github.com/cwsjoker">github</a>
		</p>
		<p>
			<a href="https://segmentfault.com/u/cwsjoker/articles">segmentdefault</a>
		</p>
		<p>
			<a href="https://github.com/cwsjoker/Cnode-vue-spa">项目源码地址欢迎star</a>
		</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {

			return {

			}
		},
		methods: {

		},
		mounted() {
			
		}

	}
</script>
<style lang="scss">
	.about {
		margin-top: 1.5rem ;
		width: 100%;
		height: 2rem;
		img {
			display: block;
			width: 1rem;
			height: 1rem;
			border-radius: 0.5rem;
			margin: 0 auto;
		}
		h2 {
			width: 100%;
			height: 0.5rem;
			font-size: 0.2rem;
			text-align: center;
			line-height: 0.5rem;
		}
		p {
			width: 100%;
			height: 0.3rem;
			text-align: center;
			line-height: 0.3rem;
			>a{
				font-size: 0.14rem;
				color: cornflowerblue;
				
			}
		}
	}
</style>