<template>
  <div class="toolbar-wrap">
    <ul class="link-wrap">
      <li class="list" v-for="(item, index) in linkArr" :key="index" @click="getNavName(item.name)">
        <a :href="item.url + '?navName=' + item.navName">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  name: 'toolbar',
  data () {
    return {
      linkArr: [
        { name: '首页', url: '#/', navName: '' },
        { name: '视频', url: '#/video', navName: '' },
        { name: '下拉', url: '#/scroll', navName: '' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'AgetnavbarText'
    ]),
    getNavName (inner) {
      this.AgetnavbarText(inner)
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
    for (let i = 0; i < this.linkArr.length; i++) {
      let name = encodeURI(this.linkArr[i].name)
      this.linkArr[i].navName = name
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .toolbar-wrap {
    position: relative;
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    color: $gray-light;
    background-color: #f3f3f3;
    .link-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-around;
      a {
        color: $gray-light;
      }
    }
  }
</style>

  