<template>
  <div class="ques-list">
    <el-row
    type="flex"
    justify="center"
    >
      <el-col
      :span="20"
      >
        <el-container>
        <el-header height="1.5rem" class="ques-title">
          第{{quesNumCh}}题
        </el-header>
        <el-main>
          <ul>
            <li
            @click="chooseIt(index)"
            class="answer-item"
            v-for="(item, index) of answers"
            :key="item"
            ><i
            class="answer-icon"
            :class="chooseIndex === (index + 1) ? 'choosed' : ''"
            >{{index + 1}}</i>{{item}}</li>
          </ul>
        </el-main>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'QuesList',
  data () {
    return {
      chooseIndex: 0
    }
  },
  props: {
    answerlist: Object,
    answerIndex: Number
  },
  computed: {
    quesNumCh () {
      let index = ''
      switch (this.answerIndex + 1) {
        case 1:
          index = '一'
          break
        case 2:
          index = '二'
          break
        case 3:
          index = '三'
          break
        case 4:
          index = '四'
          break
        case 5:
          index = '五'
          break
        case 6:
          index = '六'
          break
        case 7:
          index = '七'
          break
        case 8:
          index = '八'
          break
        case 9:
          index = '九'
          break
        case 10:
          index = '十'
          break
      }
      return index
    },
    truely () {
      return this.answerlist.truely
    },
    answers () {
      return this.answerlist.answers
    }
  },
  methods: {
    chooseIt (index) {
      this.chooseIndex = index + 1
      const truely = this.truely === this.answers[index]
      this.$store.commit('pushNowAnswer', truely)
    }
  }
}
</script>

<style lang="less">
  .ques-list {
    font-size: .7rem;
    .el-main {
      padding: 0;
    }
    ul {
      list-style: none;
      color: #ffffff;
    }
    .ques-title {
      color: #dc7913;
    }
    .answer-item {
      margin-bottom: .5rem;
      .answer-icon {
        display: inline-block;
        width: .8rem;
        height: .8rem;
        text-align: center;
        vertical-align: middle;
        line-height: .8rem;
        font-size: .6em;
        color: #c0c1c0;
        margin-right: 1rem;
        border-radius: 50%;
        border: 1px solid #FFFFFF;
      }
      .choosed {
        background-color: coral;
        color: #FFFFFF;
      }
    }
  }
</style>
