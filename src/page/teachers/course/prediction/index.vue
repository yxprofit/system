<template>
  <div class="prediction" v-show="visible">
    <el-dialog :visible.sync="visible" width="5.5rem" :before-close="handleClose">
      <div class="prediction-wrap">
        <div class="img-wrap">
          <img src="../../../../assets/images/decoration.png" alt class="pred-decotation">
        </div>
        <p class="pred-desc">
          该测试为单选或多选题，请根据题目描述，选择答案。 非常同意为4分，完全不同意为0分。 对于开放提问，你可以分享不超过140字的反馈。
          隐私声明： 个人答案不会以任何形式分享给学校和老师，只会以数据集成的方式汇总成报告给学校
        </p>
        <div class="test-wrap" v-if="!isShowTextArea">
          <h3 class="test-title">1. 以上描述选择：</h3>
          <ul class="test-list">
            <li class="test-item" v-for="(test, index) in testArr[currentPage]" :key="index">
              <div
                class="question"
                :class="{ 'is-select': testIndex === index }"
                @click="handleSelectQues(index)"
              >
                <img :src=" testIndex === index ? checkImg2 : checkImg1" alt class="test-icon">
                <span class="ques-text">{{ test }}</span>
              </div>
            </li>
          </ul>

          <div class="page">
            <span class="page-left">{{ currentPage + 1 }}</span>
            <span class="page-mid">/</span>
            <span class="page-right">{{ testArr.length }}</span>
          </div>
        </div>
        <div class="test-wrap" v-else>
          <div class="placehold" v-show="isShowPlace">
            <img class="placehold-icon" src="../../../../assets/images/student/work3.png" alt>
            <span class="placehold-text">请输入</span>
          </div>
          <textarea
            @focus="handleFoucs"
            @blur="handleBlur"
            v-model="content"
            maxlength="140"
            class="user-textarea"
          ></textarea>
          <div class="page text-page">
            <span class="page-left">{{ this.content.length }}</span>
            <span class="page-mid">/</span>
            <span class="page-right">140</span>
          </div>
        </div>
        <div class="btn-wrap">
          <div class="prev test-btn" @click="prevTest">上一题</div>
          <div class="submit test-btn" @click="nextTest">{{ isShowTextArea ? '确认提交' : '下一题' }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import check1 from '@/assets/images/task/check_1.png'
import check2 from '@/assets/images/task/check_2.png'
export default {
  props: {
    state: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: this.state,
      checkImg1: check1,
      checkImg2: check2,
      testArr: [
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性1',
          'B. 不知道如何凸显自己的特点，让别人记住自己1',
          'C. 滔滔不绝，却有些乏味1',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人1'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性2',
          'B. 不知道如何凸显自己的特点，让别人记住自己2',
          'C. 滔滔不绝，却有些乏味2',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人2'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性3',
          'B. 不知道如何凸显自己的特点，让别人记住自己3',
          'C. 滔滔不绝，却有些乏味3',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人3'
        ]
      ],
      testIndex: -1,
      currentPage: 0,
      isShowTextArea: false,
      currentChatLen: 0,
      content: '',
      isShowPlace: true
    }
  },
  watch: {
    state (newVal) {
      this.visible = newVal
      this.$emit('update:state', newVal)
    }
  },
  methods: {
    handleClose () {
      this.visible = false
      this.$emit('update:state', false)
      this.$emit('close')
    },
    prevTest () {
      if (this.currentPage >= 1) {
        this.currentPage--
      }

      if (this.isShowTextArea) {
        this.isShowTextArea = false
        this.currentPage = this.testArr.length - 1
      }
    },
    nextTest () {
      if (this.currentPage < this.testArr.length - 1) {
        this.currentPage++
      } else {
        this.isShowTextArea = true
      }

      if (this.isShowTextArea && this.content) {
        this.visible = false
        this.$emit('update:state', false)
        this.$message({
          message: '恭喜你，建议提交成功',
          type: 'success'
        })
      }
    },
    handleFoucs () {
      this.isShowPlace = false
    },
    handleBlur () {
      if (!this.content) {
        this.isShowPlace = true
      }
    },
    handleSelectQues (index) {
      this.testIndex = index
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.prediction-wrap {
  width: 5.5rem;
  background: #fff;
  padding: 0.24rem;
  box-sizing: border-box;
}

.img-wrap {
  text-align: center;
}

.pred-decotation {
  width: 3.63rem;
  margin: 0 auto;
}

.pred-desc {
  width: 5rem;
  background: rgba(247, 151, 39, 0.1);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 0.36rem;
  margin-bottom: 0.2rem;
  color: #f79727;
  padding: 0.2rem 0.15rem;
  box-sizing: border-box;
}

.test-wrap {
  width: 5rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 19px 1px rgba(142, 145, 161, 0.14);
  border-radius: 4px;
  padding: 0.15rem;
  box-sizing: border-box;
  position: relative;
}

.test-item {
  padding: 0.2rem 0.2rem;
}

.question {
  margin-bottom: 0.3rem;

  &.is-select {
    color: #f79727;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.test-icon {
  width: 0.2rem;
  margin-right: 0.15rem;
}

.test-icon,
.ques-text {
  display: inline-block;
  vertical-align: middle;
}

.page {
  text-align: center;
  font-size: 0;
}

.page-left,
.page-mid,
.page-right {
  font-size: 12px;
  color: #ccc;
}

.page-left {
  color: #f79727;
}

.btn-wrap {
  text-align: center;
  padding: 0.4rem 0;
}

.test-btn {
  width: 1.8rem;
  height: 0.5rem;
  border-radius: 25px;
  display: inline-block;
  text-align: center;
  line-height: 0.5rem;
}

.submit {
  background: linear-gradient(
    -90deg,
    rgba(255, 183, 38, 1),
    rgba(255, 129, 38, 1)
  );
  color: #fff;
}

.prev {
  margin-right: 0.4rem;
  color: #666;
  border: 0.01rem solid rgba(228, 232, 237, 1);
}

.user-textarea {
  height: 2.8rem;
  width: 100%;
  resize: none;
}

.placehold {
  position: absolute;
  top: 0.15rem;
  left: 0.15rem;

  .placehold-icon {
    width: 0.14rem;
  }
}

.text-page {
  text-align: right;
}

.prediction /deep/ .el-dialog__header {
  padding: 0;
}

.prediction /deep/ .el-dialog__body {
  padding: 0;
}

</style>
