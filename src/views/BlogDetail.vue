<template>
  <div>
    <Header></Header>

    <div class="mblog">
      <h2> {{ blog.title }}</h2>
      <el-link icon="el-icon-edit" v-if="ownBlog">
        <router-link :to="{name: 'BlogEdit', params: {blogId: blog.id}}" >
        编辑
        </router-link>
      </el-link>
      <br>
      <a href="https://www.baidu.com" @click.prevent="test()">aaa</a>
      <br>
      <a href="https://www.baidu.com" class="aaa">bbb</a>
      <br>
      <a href="https://www.baidu.com" class="ant-btn">自动执行超链接点击事件</a>
      <br>
      <div v-html="test2">eee</div>
      <render-test></render-test>
      <render-test-1 :data="test111">ewfew</render-test-1>
      <el-divider></el-divider>
      <div class="markdown-body" v-html="blog.content"></div>

    </div>

  </div>
</template>

<script>
  import 'github-markdown-css'
  import Header from "../components/Header";
  import RenderTest from '@/components/RenderTest'
  import RenderTest1 from '@/components/RenderTest1'
  const $ = require('jquery')

console.log("ccc")

  // console.log($(this).hasClass('.aaa'))

  export default {
    name: "BlogDetail.vue",
    components: {Header, RenderTest, RenderTest1},
    data() {
      return {
        blog: {
          id: "",
          title: "",
          content: ""
        },
        ownBlog: false,
        test2: `<a onclick="alert('攻击你')">连接</a>`,
        test111: `<a onclick="alert('攻击你')">连接1</a>`,
      }
    },
    created() {
      const blogId = this.$route.params.blogId
      console.log(blogId)
      const _this = this
      this.$axios.get('/blog/' + blogId).then(res => {
        const blog = res.data.data
        _this.blog.id = blog.id
        _this.blog.title = blog.title

        var MardownIt = require("markdown-it")
        var md = new MardownIt()

        var result = md.render(blog.content)
        _this.blog.content = result
        _this.ownBlog = (blog.userId === _this.$store.getters.getUser.id)

      })
      this.$nextTick(()=>{
        $('a').click(function(event) {
        var url = $(".aaa").attr("href")
        if (url === "https://www.baidu.co") {
           window.open(url)
          
        } else {
          alert("将打开第三方链接")
        }
        event.stopPropagation(); //只阻止了冒泡事件， 默认默认行为没有阻止
        event.preventDefault(); //只阻止了默认事件，冒泡事件没有阻止
      })
      })
    },
    methods: {
      test() {
        alert(111)
        window.open("https://www.baidu.com")
      }
    },mounted() {
      console.log("ddd")
      console.log(this.$refs)
      // $('a').click(function(event) {
      //   var url = $(".aaa").attr("href")
      //   if (url === "https://www.baidu.co") {
      //      window.open(url)
          
      //   } else {
      //     alert("将打开第三方链接")
      //   }
      //   event.stopPropagation(); //只阻止了冒泡事件， 默认默认行为没有阻止
      //   event.preventDefault(); //只阻止了默认事件，冒泡事件没有阻止
      // })
      
    }
      

  }



      
</script>

<style scoped>
  .mblog {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    min-height: 700px;
    padding: 20px 15px;
  }

</style>