import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入element_ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css';

//引入 axios
import axios from 'axios'
import Url from './plugins/url'
//设置一个基础路径
axios.defaults.baseURL = Url.serverUrl
Vue.prototype.$axios = axios;

//引入 qs
import qs from 'qs'
Vue.prototype.$qs = qs ;


Vue.config.productionTip = false

//设置axios的请求拦截
axios.interceptors.request.use(config=>{
  console.log('=====请求拦截=====')
  //每次请求时都在请求url中加入token信息会很麻烦,所以设置axios的请求拦截,每个请求都会经过
  //在请求头中添加token信息
  let token = sessionStorage.getItem("token");
  if (token){
    config.headers["token"]=token;
  }
  //放行
  return config;
})

/*
//设置axios的回应拦截
axios.interceptors.response.use(config=>{
  console.log('=====回应拦截=====')
  let data = config.data ;
  if (data == '0'){
    ElementUI.Message({
      type:'error',
      message:'非法访问,请先登录!',
      duration:1000
    })
    location.href = "/Login";
  }else if (data == '1'){
    ElementUI.Message({
      type:'error',
      message:'登录过期,请重新登录!',
      duration:1000
    })
    location.href = "/Login";
  }else if (data == '2'){
    ElementUI.Message({
      type:'error',
      message:'非法访问,请先登录!',
      duration:1000
    })
    location.href = "/Login";
  }else if (data == '3'){
    ElementUI.Message({
      type:'error',
      message:'系统错误，请联系管理员!',
      duration:1000
    })
    location.href = "/Login";
  }
  return config ;
})
 */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
