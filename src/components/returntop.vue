<template>
		 
	<div class="returntop" v-show="isshow" @click="gotop()">
		
	</div>
	
	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				isshow:false
			}
			
		},
		methods:{
			gotop(){
				document.body.scrollTop=0;
				
			},
			getscroll(){
				var dbs=document.body.scrollTop
				if(dbs>200)
				{				
					this.isshow=true
				}else{
					this.isshow=false
				}
				
				
			}
			
			
		},
		mounted:function(){
			
			window.addEventListener("scroll",this.getscroll,false)	
			
			
		},
		beforeDestroy : function() {
			// 退出组件解除window的scroll事件,防止别的页面下拉加载。
			window.removeEventListener('scroll', this.getscroll, false);
		}
			
		
		
		
	}
	
</script>
<style lang="scss">
	.returntop{
	position: fixed;
    width: 50px;
    height: 50px;
    right: 15px;
    bottom: 0.3rem;
    background: #e1e1e1 url('../assets/images/returnTop.png') no-repeat;
    border-radius: 25px;
    z-index: 9;
	}
	
	
	
	
	
</style>