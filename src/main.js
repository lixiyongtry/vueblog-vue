import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from 'axios'

import mavonEditor from 'mavon-editor'

import "element-ui/lib/theme-chalk/index.css"
import 'mavon-editor/dist/css/index.css'

import "./axios"
import "./permission"



Vue.use(Element)
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// var list=document.getElementsByClassName('ant-btn'); // 获取class为ant-btn的元素
// console.log(list)
// debugger
//     for(var i in list)
//     {
//         list[i].onclick=function() { // 添加点击事件
//             var data = []
//             var input = document.getElementsByClassName('ant-input'); // 获取class为ant-input的元素
//             console.log(input)
//             for (var d = 0; d < input.length; d++) { // 获取值放入data中
//                 var content = {}
//                 content[input[d].placeholder] = input[d].value
//                 data[d] = content
//             }
//             console.log(data)
//             alert("be click")
//         };
//     }