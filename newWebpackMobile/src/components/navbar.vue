<template>
  <div class="navbar-wrap">
    <span>{{navName}}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  name: 'navbar',
  data () {
    return {
      navName: ''
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
    },
    navbarText (newVal) {
      this.navName = newVal
    }
  },
  computed: {
    ...mapGetters([
      'allNumber',
      'navbarText'
    ])
  },
  created () {
    this.navName = this.navbarText
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .navbar-wrap {
    position: relative;
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    color: $gray-light;
    background-color: #f3f3f3;
  }
</style>
  
  