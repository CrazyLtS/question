<template>
  <div class="face">
    <play-btn icontype="el-icon-magic-stick icon-start" playtext="Play" :to="{name: 'Game'}"></play-btn>
  </div>
</template>

<script>
import PlayBtn from 'components/PlayBtn'
export default {
  name: 'Face',
  components: {
    PlayBtn
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.face {
  width: 100%;
  height: 100%;
}
</style>
