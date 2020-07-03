<template>
  <el-button
  class="play-btn"
  size="small"
  type="primary"
  @click.once="to && lineTo(to)"
  >{{playtext}}<i :class="[icontype, 'icon-start']"></i>
  </el-button>
</template>

<script>
export default {
  name: 'PlayBtn',
  props: {
    icontype: String,
    playtext: String,
    to: [
      String,
      Object
    ]
  },
  methods: {
    lineTo (to) {
      this.$router.push(to)
    }
  }
}
</script>

<style lang="less" scoped>
.play-btn {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 60%);
  font-size: 18px;
  .icon-start {
    color: coral;
    vertical-align: middle;
    margin-left: .2rem;
  }
}
</style>
