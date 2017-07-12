<template>
	<div class="article">
		<div class="actcleTitle">
			<h2>{{title}}
				<div class="collection">
					收藏
				</div>
			</h2>
			<div class="artcleTips">
				<span>发布于{{last_reply_at |getLastTime}}</span>
				<span>作者{{loginname}}</span>
				<span>{{reply_count}}次回复</span>
				<span>{{visit_count}}次浏览</span>
			</div>
		</div>
		<div v-html="content">

		</div>
		<div class="articlereplies">
			<div class="replyCount">
				共有{{reply_count}}条回复
			</div>
			<ul>
				<li v-for="(item,index) in replyLists">
					<div class="author_content">
						<a class="author_a" href="">
							<img :src="item.author.avatar_url" alt="" />
						</a>
						<span>{{item.author.loginname}}</span>
						<span>{{index+1}}楼</span>
						<span>{{item.create_at|getLastTime}}</span>
						<div class="replyhandle">
							<em class="upbtn">赞0</em>
							<em class="replybtn">回0</em>
						</div>
					</div>
					<div class="repliescon" v-html="item.content">

					</div>
				</li>
			</ul>
		</div>
		<div class="recommentbox">
			<p>留下你的足迹</p>
			<div class="reply-box">
				<div class="textinp">
					<textarea name="" rows="5" cols="40" placeholder="请输入留言"></textarea>
				</div>
				<div class="textsub">
					<span class="rebtn">回复</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {

			return {
				content: "",
				title: "",
				last_reply_at: "",
				loginname: "",
				reply_count: "",
				visit_count: "",
				replyLists: []
			}
		},
		methods: {
			getfetchdata(artid) {

				this.$http.get('https://cnodejs.org/api/v1/topic/' + artid).then((res) => {
					console.log(res)
					this.content = res.data.data.content
					this.title = res.data.data.title
					this.last_reply_at = res.data.data.last_reply_at
					this.loginname = res.data.data.author.loginname
					this.reply_count = res.data.data.reply_count
					this.visit_count = res.data.data.visit_count
					this.replyLists = res.data.data.replies
				})

			}
		},
		mounted() {
			//console.log(this.$route.params)
			const artid = this.$route.params.id;
			this.getfetchdata(artid)

		}

	}
</script>
<style lang="scss">
	.article {
		overflow: hidden;
		font-size: 0.14rem;
		text-align: center;
		margin: 0.5rem 0.15rem 0px;
	}
	
	.article img {
		width: 2rem;
	}
	
	.article p {
		text-align: left;
	}
	
	.article li {
		text-align: left;
		font-family: 'Microsoft Yahei', '\5B8B\4F53', Arial;
	}
	
	.article span {
		margin-left: 10px;
		line-height: 0.2rem;
	}
	
	.actcleTitle {
		margin-bottom: 0.1rem;
		h2 {
			font-size: 0.2rem;
		}
		.collection {
			display: inline-block;
			margin-left: 10px;
			padding: 3px 5px;
			background: #80bd01;
			color: #000;
			font-size: 0.12rem;
			border-radius: 2px;
		}
		.artcleTips span {
			font-size: 0.12rem;
			color: #838383;
			display: inline-block;
		}
	}
	
	.articlereplies {
		.replyCount {
			padding: 0.1rem 0;
			margin: 0.1rem 0;
			border-bottom: 1px solid lightgray;
			text-align: left;
		}
		.repliescon {
			background: lightgray;
			padding: 0.05rem;
		}
		img {
			width: 0.3rem;
			height: 0.3rem;
		}
		.author_content {
			position: relative;
			clear: both;
			overflow: hidden;
			span {
				margin-left: 10px;
				line-height: 0.3rem;
				height: 0.3rem;
				float: left;
			}
			.author_a {
				float: left;
			}
		}
		ul li {
			margin-bottom: 0.1rem;
			border-bottom: 1px solid lightgray;
			padding: 0.1rem 0;
		}
		.replyhandle {
			position: absolute;
			right: 0px;
			top: 0.05rem;
			em {
				padding: 3px;
				color: #fff;
				border-radius: 2px;
				font-style: normal;
			}
			.upbtn {
				background: #A1AFC9;
			}
			.replybtn {
				background: #FFCE42;
			}
		}
	}
	
	.recommentbox {
		p {
			color: #08c;
			margin-bottom: 0.1rem;
		}
		.reply-box {
			.textsub {
				text-align: left;
				margin-left: 0.22rem;
			}
			textarea {
				border: 1px solid lightgray;
			}
			.rebtn {
				display: inline-block;
				margin: 5px 0 0 0;
				color: #fff;
				padding: 5px 10px;
				font-size: 15px;
				border-radius: 3px;
				background-color: #08c;
			}
		}
	}
</style>