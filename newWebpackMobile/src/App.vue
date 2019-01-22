<template>
  <div id="app">
    <navbar></navbar>
    <div class="app-router-box">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
    <toolbar></toolbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import toolbar from '@/components/toolbar'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { navbar, toolbar },
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
    }
  },
  methods: {
    ...mapActions([
      'AgetUrlName',
      'AgetnavbarText'
    ])
  },
  watch: {
    allNumber (newVal) {
      // console.log(newVal)
    }
  },
  computed: {
    ...mapGetters([
    ])
  },
  created () {
    let navFun = function () {
      let name,value
      let str=location.href  //取得整个地址栏
      let num=str.indexOf("?") 
      str=str.substr(num+1) //str得到?之后的字符串

      let arr=str.split("&") //得到&分割的参数，放入数组中
      for(let i = 0; i < arr.length; i++)
      {
        num=arr[i].indexOf("=")
        if(num>0)
        {
            name=arr[i].substring(0,num)
            value=arr[i].substr(num+1)
            this[name]=value
        }
      }
    }
    let Request = new navFun()
    let name = decodeURI(Request.navName)
    this.AgetnavbarText(name)
  },
  mounted () {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'assets/scss/common.scss';

  html,
  body{
    height: 100%;
  }
  #app{
    position: relative;
    width: 100%;
    height: 100%;
    .app-router-box {
      position: relative;
      width: 100%;
      height: calc(100% - 88px);
    }
    .child-view {
      position: absolute;
      width:100%;
      transition: all .3s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(50px, 0);
      transform: translate(100%, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-50px, 0);
      transform: translate(-100%, 0);
    }
  }
</style>
