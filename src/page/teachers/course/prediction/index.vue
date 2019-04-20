<template>
  <div class="prediction" v-show="visible">
    <el-dialog :visible.sync="visible" width="5.5rem" :before-close="handleClose">
      <div class="prediction-wrap">
        <div class="img-wrap">
          <div class="img-title">中小学项目学期前测</div>
          <img src="../../../../assets/images/decoration.png" alt class="pred-decotation">
        </div>
        <p class="pred-desc">
          该测试为单选或多选题，请根据题目描述，选择答案。 非常同意为4分，完全不同意为0分。 对于开放提问，你可以分享不超过140字的反馈。
        </p>
        <div class="test-wrap" v-if="!isShowTextArea">
          <h3 class="test-title">{{ currentPage + 1 }}. 以上描述选择：</h3>
          <ul class="test-list">
            <li class="test-item" v-for="(test, index) in testArr[currentPage]" :key="index">
              <div
                class="question"
                :class="{ 'is-select': testIndex[currentPage] === index }"
                @click="handleSelectQues(index)"
              >
                <img :src=" testIndex[currentPage] === index ? checkImg2 : checkImg1" alt class="test-icon">
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
          <h3 class="test-title">1. 我建议这样调整：</h3>
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
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性4',
          'B. 不知道如何凸显自己的特点，让别人记住自己4',
          'C. 滔滔不绝，却有些乏味4',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人4'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性5',
          'B. 不知道如何凸显自己的特点，让别人记住自己5',
          'C. 滔滔不绝，却有些乏味5',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人5'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性6',
          'B. 不知道如何凸显自己的特点，让别人记住自己6',
          'C. 滔滔不绝，却有些乏味6',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人6'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性7',
          'B. 不知道如何凸显自己的特点，让别人记住自己7',
          'C. 滔滔不绝，却有些乏味7',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人7'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性8',
          'B. 不知道如何凸显自己的特点，让别人记住自己8',
          'C. 滔滔不绝，却有些乏味8',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人8'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性9',
          'B. 不知道如何凸显自己的特点，让别人记住自己9',
          'C. 滔滔不绝，却有些乏味9',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人9'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性10',
          'B. 不知道如何凸显自己的特点，让别人记住自己10',
          'C. 滔滔不绝，却有些乏味10',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人10'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性11',
          'B. 不知道如何凸显自己的特点，让别人记住自己11',
          'C. 滔滔不绝，却有些乏味11',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人11'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性12',
          'B. 不知道如何凸显自己的特点，让别人记住自己12',
          'C. 滔滔不绝，却有些乏味12',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人12'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性13',
          'B. 不知道如何凸显自己的特点，让别人记住自己13',
          'C. 滔滔不绝，却有些乏味13',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人13'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性14',
          'B. 不知道如何凸显自己的特点，让别人记住自己14',
          'C. 滔滔不绝，却有些乏味14',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人14'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性15',
          'B. 不知道如何凸显自己的特点，让别人记住自己15',
          'C. 滔滔不绝，却有些乏味15',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人15'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性16',
          'B. 不知道如何凸显自己的特点，让别人记住自己16',
          'C. 滔滔不绝，却有些乏味16',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人16'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性17',
          'B. 不知道如何凸显自己的特点，让别人记住自己17',
          'C. 滔滔不绝，却有些乏味17',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人17'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性18',
          'B. 不知道如何凸显自己的特点，让别人记住自己18',
          'C. 滔滔不绝，却有些乏味18',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人18'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性19',
          'B. 不知道如何凸显自己的特点，让别人记住自己19',
          'C. 滔滔不绝，却有些乏味19',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人19'
        ],
        [
          'A. 对陌生人紧张，表达的不清楚或者没有逻辑性20',
          'B. 不知道如何凸显自己的特点，让别人记住自己20',
          'C. 滔滔不绝，却有些乏味20',
          'D. 光顾着介绍自己，太自夸，没有注意倾听别人20'
        ]
      ],
      testIndex: [],
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
      this.testIndex.splice(this.currentPage, 1, index)
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
  position: relative;
}

.img-title {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: #fff;
    font-size: 16px;
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
  padding-top: 0.4rem;
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
  border:1px solid rgba(238,238,238,1);
  margin-top: 0.1rem;
  padding: 0.1rem;
  box-sizing: border-box;
}

.placehold {
  position: absolute;
  top: 0.5rem;
  left: 0.3rem;

  .placehold-icon {
    width: 0.14rem;
  }
}

.text-page {
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  text-align: right;
}

.prediction /deep/ .el-dialog__header {
  padding: 0;
}

.prediction /deep/ .el-dialog__body {
  padding: 0;
}

</style>
