<template>
	<div>
		<div class="header">
			<el-row>
				<el-col :span="24">
					<div class="grid-content bg-purple-dark">
						<i class="el-icon-menu" @click="showleft()"></i> cnode.js
					</div>

				</el-col>
			</el-row>
		</div>
		<div class="leftnav" :class="covershow==true?showMeun:''">
			<ul>
				<li>
					<!--<a href="/">首頁</a>-->
					<router-link to="/">首頁</router-link>
				</li>
				<li>
					<router-link to="/login">登鹿</router-link>
				</li>
				<li>
					<router-link to="/about">關於</router-link>
				</li>
			</ul>
		</div>
		<div class="page-cover" v-show="covershow" @click="hidemenu()">

		</div>
	</div>

</template>
<script>
	export default {
		name: 'app',
		data() {
			return {

				covershow: false,
				showMeun: "showMeun"
			}
		},
		methods: {
			showleft() {

				this.covershow = true
			},
			hidemenu() {

				this.covershow = false
			}

		},
		mounted() {

		}
	}
</script>
<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
	}
	
	.el-row {
		margin-bottom: 0.2rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 0.04rem;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 0.04rem;
		min-height: 0.36rem;
		line-height: 0.36rem;
		font-size: 0.16rem;
	}
	
	.grid-content i {
		line-height: 0.36rem;
		font-size: 0.18rem;
		position: absolute;
		left: 0.05rem;
		color: lightblue;
	}
	
	.row-bg {
		padding: 0.1rem 0;
		background-color: #f9fafc;
	}
	
	.leftnav {
		position: fixed;
		top: 0px;
		left: -2rem;
		width: 2rem;
		height: 100%;
		background: #444444;
		transition: all .3s ease;
		z-index: 9999;
	}
	
	.leftnav ul {
		width: 100%;
		padding: 0.2rem 0;
	}
	
	.leftnav ul li {
		width: 100%;
		height: 0.5rem;
		line-height: 0.5rem;
		text-align: left;
		padding-left: 0.4rem;
	}
	
	.leftnav ul li a {
		font-size: 0.2rem;
		color: white;
	}
	
	.page-cover {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		z-index: 98;
	}
	
	.showMeun {
		transform: translateX(2rem);
	}
</style>