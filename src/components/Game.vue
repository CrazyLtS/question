<template>
  <div class="game">
    <ques-list
    ref="ques"
    v-if="ismounted"
    :answerlist="answerlist[answerIndex]"
    :answerIndex="answerIndex"
    ></ques-list>
    <play-btn
    icontype="el-icon-d-arrow-right"
    playtext="Next"
    @click.native="pushAnswer"
    ></play-btn>
  </div>
</template>

<script>
import PlayBtn from 'components/PlayBtn'
import QuesList from 'components/QuesList'
export default {
  name: 'Game',
  components: {
    PlayBtn,
    QuesList
  },
  data () {
    return {
      radiodata: '',
      answerIndex: 0,
      answerlist: [],
      ismounted: false
    }
  },
  methods: {
    // 推送答案
    pushAnswer () {
      if (this.$store.state.nowAnswer === null) {
        this.$message({
          message: '还没选择答案哦！',
          type: 'warning',
          duration: 1500,
          center: true
        })
        return
      }
      this.$store.commit('addAnswer')
      // 判读是否最后一题，跳转到分数页面
      if (this.answerIndex >= this.answerlist.length - 1) {
        this.$router.push({ name: 'Scores' })
        return
      }
      // 切换题目和答案
      this.answerIndex++
      this.$refs.ques.chooseIndex = 0
    }
  },
  mounted () {
    this.$http.get('./mock/answerList.json')
      .then(data => {
        this.answerlist = data.data.data
        this.ismounted = true
      })
  }
}
</script>

<style lang="less" scoped>
 .game {
   padding-top: 5rem;
 }
</style>
