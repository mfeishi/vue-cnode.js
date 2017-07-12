<template>
	<div class="home">
		<ul class="artlistTab">
			<li v-for="(item,index) in artlists" :class="{'active':initindex === index}" @click="changeTab(index)">{{item.title}}</li>
		</ul>
		<ul class="artlistContent">
		
				<li v-for="(item,index) in result">
					<router-link :to="'/article/'+item.id">
						<!--<router-link :to="{name:'article',params:{id:item.id}}">-->
						<a href="javascript:void(0);" class="avatar">
							<img :src='item.author.avatar_url' alt="" />
						</a>
						<div class="rightcontent">
							<em :class="item.good|getArticleClass(item.top)">{{item.tab|getArticleTab(item.good,item.top)}}</em>
							<a class="title">{{item.title}}</a>
							<span class="left-span">{{item.reply_count}}/{{item.visit_count}}</span>
							<span class="right-span">{{item.last_reply_at | getLastTime(item.last_reply_at)}}</span>
						</div>
					</router-link>
				</li>
			

		</ul>
		<div class="loading" v-show="isloading">
			<img src="../assets/images/loading.gif" alt="" />
		</div>
		<returntop></returntop>
	</div>

</template>
<script>
	import returntop from "./returntop.vue"

	export default {
		name: 'app',
		data() {
			return {
				artlists: [{
					title: "全部",
					type: "all"
				}, {
					title: "精華",
					type: "good"
				}, {
					title: "分享",
					type: 'share'
				}, {
					title: "問答",
					type: "ask"
				}, {
					title: "招聘",
					type: "job"
				}],
				initindex: 0,
				searchKey: {
					"page": 1,
					"limit": 20,
					"tab": "all"
				},
				scroll: true, //避免快速滚动，无限拉取数据源 !重要
				result: [],
				isloading: false

			}
		},
		methods: {
			changeTab: function(index) {
				//console.log(index)
				this.initindex = index
				this.searchKey.tab = this.artlists[index].type
				this.searchKey.limit = 20
				this.getartlist()

			},
			getartlist: function() {
				this.$http.get("https://cnodejs.org/api/v1/topics", {
					params: this.searchKey
				}).then((res) => {
					console.log(res)
					if(res.data.success) {
						this.result = res.data.data
						this.scroll = true
						this.isloading = false

					}

				}).catch((error) => {

				})

			},
			getscroll: function() {
				var _this = this
				if(this.scroll) {
					var screenHeight = window.innerHeight //屏幕視口高度
					var totalHeight = document.body.clientHeight //頁面總高度
					var scrollTop = document.body.scrollTop //滾動條距頂部高度
					//判断滚动到底部
					if(screenHeight + scrollTop + 200 >= totalHeight) {
						_this.scroll = false
						_this.isloading = true
						_this.searchKey.limit += 20
						setTimeout(() => {
							_this.isloading = false
							_this.getartlist()

						}, 2000)
					}
				}

			}
		},
		components: {
			returntop,

		},
		mounted: function() {
			this.getartlist()
			window.addEventListener("scroll", this.getscroll, false)

		},
		beforeDestroy: function() {
			window.removeEventListener('scroll', this.getscroll, false);

		}
	}
</script>
<style lang="scss">
	.home{
		margin-top: 0.5rem;
	}
	.artlistTab {
		width: 90%;
		height: 0.4rem;
		background: gainsboro;
		padding-left: 0.5rem;
		padding-top: 0.05rem;

		margin: 0 auto;
		border-radius: 0.1rem;
		>li {
			float: left;
			width: 15%;
			height: 0.3rem;
			line-height: 0.3rem;
			margin-right: 0.1rem;
			border-radius: 0.08rem;
			font-size: 0.16rem;
		}
		.active {
			background: lightcyan;
		}
	}
	
	.artlistContent {
		width: 95%;
		margin: 0 auto;
		min-height: 4rem;
		margin-top: 0.15rem;
		>li {
			width: 100%;
			height: 0.66rem;
			border: 1px solid gainsboro;
			position: relative;
			padding: 0.1rem;
			.avatar {
				width: 0.3rem;
				height: 0.3rem;
				position: absolute;
				left: 0.1rem;
				top: 0.1rem;
				>img {
					width: 100%;
					height: 100%;
				}
			}
			.rightcontent {
				position: relative;
				width: 85%;
				height: 100%;
				margin-left: 0.45rem;
				text-align: left;
				>em {
					font-size: 0.12rem;
					background: #80bd01;
					padding: 0.02rem 0.04rem;
					position: relative;
					top: 0.06rem;
					display: inline-block;
					font-style: normal;
					color: white;
				}
				.title {
					display: inline-block;
					width: 80%;
					font-size: 0.14rem;
					line-height: 0.14rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.left-span {
					display: inline-block;
					margin-left: 10%;
					font-size: 0.12rem;
					padding: 0.02rem 0.04rem;
					color: #00c;
					position: relative;
					top: 0.02rem;
				}
				.right-span {
					display: inline-block;
					position: absolute;
					right: 0rem;
					bottom: 0rem;
					font-size: 0.12rem;
					padding: 0.02rem 0.04rem;
					color: gray;
				}
				.put_share {
					background: lightgray;
					color: gray;
				}
				.put_good {
					background: #80bd01;
					color: lavender;
				}
				.put_top {
					background: #80bd01;
					color: white;
				}
			}
		}
	}
	
	.loading {
		>img {
			height: 0.5rem;
		}
	}
</style>