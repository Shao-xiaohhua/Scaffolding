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
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    height: 100%;
  }
</style>
