<template>
  <div class="scores">共答对了：{{trueRate}}题</div>
</template>

<script>
export default {
  name: 'Scores',
  computed: {
    trueRate () {
      let truelyIndex = 0
      this.$store.state.answerList.forEach(truely => {
        if (truely) {
          truelyIndex += 1
        }
      })
      return truelyIndex
    }
  }
}
</script>

<style lang="less" scoped>
  .scores {
    width: 100%;
    height: 1rem;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    color: coral;
  }
</style>
