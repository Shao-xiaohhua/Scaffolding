<template>
  <div class="newone">
    <span>{{tex}}</span>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      tex: '这是一个新的页面aa'
    }
  },

  created () {
  }
}
</script>

<style lang="scss" scoped="" type="text/css" scoped>
  .newone {
    width: 100%;
    height: 200px;
    text-align: center;
    line-height: 200px;
    background: red;
    span {
      font-size: 30px;
      color: white;
    }
  }
</style>
