<template>
  <div class="swiper-wrap">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in arrTwo" :key="item.name">
        <h3>{{ item.nm }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  name: 'hello',
  data () {
    return {
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
      'getDistrict'
    ]),
    click (index) {
      console.log(index)
      var arr = this.arrTwo
      for (let i in arr) {
        arr[i].active = false
      }
      arr[index].active = true
      console.log(arr)
    }
  },
  watch: {
    allNumber (newVal) {
      // console.log(newVal)
    }
  },
  computed: {
    ...mapGetters([
      'allNumber'
    ])
  },
  created () {
    console.log('先')
  },
  mounted () {
    console.log('后')
    this.getDistrict().then(json => {
      console.log(json)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .el-carousel__item h3 {
    text-align: center;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>

