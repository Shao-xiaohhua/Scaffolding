<template>
  <div class="swiper-wrap">

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  name: 'hello',
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
</style>

