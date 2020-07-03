<template>
  <div class="home">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less">
  .home {
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, 1), rgba(0, 0, 0, .5));
  }
</style>
