import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routes from "./router/index.js"
import axios from "axios"
import vueg from "vueg"
import vuegcss from "vueg/css/transition-min.css"

import base from "./assets/css/base.css"
import torem from "./assets/js/font.js"
import * as filters from './filters/filter.js';
// 遍历输出a过滤器的模块
Object.keys(filters).forEach((k) => {
	Vue.filter(k, filters[k])
});
//Vue原型中添加$http方法
Vue.prototype.$http=axios


const router=new VueRouter({
	routes:routes
})
const options={
	duration:"0.3",
	firstEntryDisable:false,
	firstEntryDuration:'0.6',
//	forwardAnim:"fadeInRight",
//	backAnim:"fadeInLeft",
	sameDepthDisable:false,
	tabs:[{
		name:'home'
	},{
		name:'about'
	},{
		name:'login'
	}],
	tabsDisable:false,
	disable:false
}
Vue.use(VueRouter)
Vue.use(vueg,router,options)

//router.beforEach(function(){
//				alert(1)
//				console.log(this.$route)
//			})
new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
