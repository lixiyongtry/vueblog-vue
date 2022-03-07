<template>
  <div>
<!--  props中的字符串 从后台获取到的 传给子组件 -->
    <articlee :html="matchcontent">aaa</articlee>
  </div>

</template>
<script>
import Vue from 'vue';
  export default {
    components: {
      'articlee':{//用来解析html片段
        props:{
          html:String
        },
        render(h){
          const com=Vue.extend({
            template:`<div>${this.html}</div>`
          });
          return h(com,{});
        }
      }
    },
    data(){
      return {
        matchcontent:'aaaa<a @click="test1()">Hello world!</a>',
      }
    },
    methods: {
        test1() {
            alert("1111")
        }
    }
  }
</script>

