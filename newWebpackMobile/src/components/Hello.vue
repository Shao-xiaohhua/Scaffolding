<template>
  <div class="swiper-wrap">
    <div class="box-is">
      <mt-swipe :auto="2000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import getpk from '../encrypt/getPassKey' // 获取密码加密函数
export default {
  components: {},
  name: 'hello',
  data () {
    return {
      input: '',
      password: '',
      form: {
        name: '',
        pass: ''
      },
      arr: [
        {name: 'one'},
        {name: 'two'},
        {name: 'three'}
      ],
      arrTwo: [
        {name: 'one', active: true, nm: '张三', cls: '一班', tp: '党建培训'},
        {name: 'two', active: false, nm: '李四', cls: '二班', tp: '团建培训'},
        {name: 'three', active: false, nm: '王二', cls: '三班', tp: '没有建培训'}
      ]
    }
  },
  methods: {
    ...mapActions([
      'getLogin',
      'AgetCrf',
      'AgetCollection'
    ]),
    ...mapMutations([
      'getPasWord'
    ]),
    click (index) {
      var arr = this.arrTwo
      for (let i in arr) {
        arr[i].active = false
      }
      arr[index].active = true
    },
    log () {
    },
    onSubmit () {
      if (this.form.name && this.form.pass) {
        let pasKey = JSON.stringify(getpk(this.form.pass, this.collection))
        let url = {
          _csrf: this.crfcode,
          username: this.form.name,
          password: pasKey,
          responseType: 'json'
        }
        this.form.pass = pasKey
        this.getLogin(url)
      } else {
        alert('请输入账号密码')
      }
    }
  },
  watch: {
    allNumber (newVal) {
      // console.log(newVal)
    }
  },
  computed: {
    ...mapGetters([
      'allNumber',
      'crfcode',
      'collection'
    ])
  },
  created () {
    console.log('先')
  },
  mounted () {
    console.log('后')
    this.AgetCrf()
    this.AgetCollection()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .swiper-wrap .mint-swipe-indicator {
    background-color: red;
  }
</style>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .swiper-wrap {
    width: 100%;
    height: 100%;
    .box-is {
      position: relative;
      width: 100%;
      height: 3rem;
      text-align: center;
      font-size: 30px;
      color: $white;
      background: #333;
    }
  }
</style>

