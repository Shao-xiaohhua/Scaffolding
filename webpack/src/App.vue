<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
    height: auto;
  }
</style>
