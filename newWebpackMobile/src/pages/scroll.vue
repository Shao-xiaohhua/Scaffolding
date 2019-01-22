<template>
  <div class="scroll-wrap">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul>
        <li v-for="item in 30">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  name: 'scroll-wrap',
  data () {
    return {
      allLoaded: true
    }
  },
  methods: {
    ...mapActions([
      'getDistrict'
    ]),
    loadTop() {
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .scroll-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background: red;
  }
</style>
  
  