import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/hospital/Login";
import Home from "@/hospital/Home";
import Welcome from "@/hospital/Welcome";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/',
        name: 'Welcome',
        component: Welcome
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*
//配置路由守卫
router.beforeEach((to,from,next)=>{
  //获取将要去的路径
  let toPath = to.path;
  // console.log(toPath+",访问路径")
  //获取来时的路径
  let fromPath = from.path;
  //如果去登录路径,放行
  if(toPath=='/' || toPath=='/Login'){
    next();
  }else {
    //否则判断是否登录
    let user = sessionStorage.getItem("managerInfo");
    if (user){
      //登录放行
      next();
    }else {
      //为登录跳转到登录页面
      alert("请先登录");
      next('/');
    }
  }
})
 */

export default router
