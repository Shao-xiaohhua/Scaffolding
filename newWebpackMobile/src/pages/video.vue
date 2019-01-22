<template>
  <div class="video-wrap">
    <video id="oneVidwo" poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537006162483&di=ab34aa4104e535081d50460937c1197e&imgtype=0&src=http%3A%2F%2Fpic150.nipic.com%2Ffile%2F20171227%2F21540071_114807914000_2.jpg" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" controls="controls"></video>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  name: 'video-wrap',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getDistrict'
    ])
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
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .video-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #oneVidwo {
    width: 100%;
  }
</style>
  
  