//const routes=[{
//	
//	
//}]
import Home from "../components/home.vue"
import Login from "../components/login.vue"
import About from "../components/about.vue"
import Article from "../components/article.vue"
export default[{
	path:"/home",
	component: Home
},{
	path:"/login",
	component:Login
},{
	path:"/about",
	component:About
},
{	
	name:"article",
	path:"/article/:id",
	component:Article
},
{
  path:'/',redirect:'/home'
}
]
