<template>
  <div class="questionnaire">
    <div class="questionnaire-header">
      <div class="questionnaire-header__title">
        中小学项目学期前测
      </div>
    </div>
    <div class="questionnaire-tip">
      <p class="questionnaire-tip__content">
        该测试为单选或多选题，请根据题目描述，选择答案。 非常同意为4分，完全不同意为0分。 对于开放提问，你可以分享不超过140字的反馈。
        <br>隐私声明： 个人答案不会以任何形式分享给学校和老师，只会以数据集成的方式汇总成报告给学校
      </p>
    </div>
    <div class="questionnaire-content">
      <ul class="question-list">
        <li class="question-list-item with-face">
          <div class="question-list-item__title">
            <div class="left">{{satisfaction.title}}</div>
            <div class="right">
              <span>非常不满意</span>
              <span class="margin-20">不满意</span>
              <span class="margin-39">一般</span>
              <span class="margin-45">满意</span>
              <span class="margin-33">非常满意</span>
            </div>
          </div>
          <div class="question-list-item__options">
            <div class="left">
              <ul>
                <li
                  class="sub-options"
                  v-for="(item,index) in satisfaction.options"
                  :key="item.value"
                >{{index+1+'.'+ item.label}}</li>
              </ul>
            </div>
            <div class="right">
              <ul>
                <li class="sub-options" v-for="(item,index) in satisfaction.options" :key="index">
                  <span @click="handleSatisClick(item.id,0)" class="width-70">
                    <img class="smileface" :src="item.checked >= 0 ? smile : unsmile" alt>
                  </span>
                  <span @click="handleSatisClick(item.id,1)" class="width-42 margin-20">
                    <img class="smileface" :src="item.checked >= 1 ? smile : unsmile" alt>
                  </span>
                  <span @click="handleSatisClick(item.id,2)" class="width-28 margin-39">
                    <img class="smileface" :src="item.checked >= 2  ? smile : unsmile" alt>
                  </span>
                  <span @click="handleSatisClick(item.id,3)" class="width-28 margin-45">
                    <img class="smileface" :src="item.checked >= 3 ? smile : unsmile" alt>
                  </span>
                  <span @click="handleSatisClick(item.id,4)" class="width-56 margin-33">
                    <img class="smileface" :src="item.checked >= 4  ? smile : unsmile" alt>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="question-list-item">
          <div class="question-list-item__title">2. 我建议这样调整：</div>
          <div class="question-list-item__options">
            <item-input prop="suggestion1" type="textarea" @change="handleChange"></item-input>
          </div>
        </li>
        <li class="question-list-item">
          <div class="question-list-item__title">3. 我建议这样调整：</div>
          <div class="question-list-item__options">
            <item-input prop="suggestion2" @change="handleChange"></item-input>
          </div>
        </li>
        <li class="question-list-item width-column">
          <div class="question-list-item__title">{{selection1.title}}</div>
          <div class="question-list-item__options">
            <el-row v-for="item in selection1.options" :key="item.value">
              <el-col
                :span="24"
                :class="{'is-active': selection1.value === item.value}"
                class="sub-options"
                @click.native="handleSelection1Change(item.value)"
              >
                <i class="el-icon-circle-check-outline"></i>
                <span class="option-title">{{item.label}}</span>
              </el-col>
            </el-row>
          </div>
        </li>
        <li class="question-list-item width-column">
          <div class="question-list-item__title">{{selection2.title}}</div>
          <div class="question-list-item__options">
            <el-row>
              <el-col
                :span="24"
                class="sub-options"
                :class="{'is-active': selection2.value === item.value}"
                v-for="item in selection2.options"
                :key="item.value"
                @click.native="handleSelectione2Change(item.value)"
              >
                <i class="el-icon-circle-check-outline"></i>
                <span class="option-title">{{item.label}}</span>
              </el-col>
            </el-row>
            <div class="tip">这些都不满意，请输入您心意的城市</div>
            <item-input prop="city" @change="handleChange"></item-input>
          </div>
        </li>
      </ul>
    </div>
    <div class="submit-btn">
      <button>提交</button>
    </div>
  </div>
</template>
<script>
import smile from "assets/images/questionnaire/smile.png";
import unsmile from "assets/images/questionnaire/unsmile.png";
import inputImg from "assets/images/icon/input.png";
import ItemInput from "./components/item-input";
const generateId = function() {
  return Math.floor(Math.random() * 10000);
};
export default {
  components: {
    ItemInput
  },
  data() {
    return {
      smile,
      unsmile,
      inputImg,
      form: {
        suggestion1: "",
        suggestion2: "",
        city: ""
      },
      textareaFocusing: false,
      satisfaction: {
        title: "1. 我非常愿意在上课时积极发言：",
        options: [
          {
            label: "我在课程中精神容易集中，在练习时我总愿意尝试付出努力",
            value: 1,
            checked: 2,
            id: generateId()
          },
          {
            label: "我在课程中精神容易集中，在练习时我总愿意尝试付出努力",
            value: 2,
            checked: 1,
            id: generateId()
          },
          {
            label: "我在课程中精神容易集中，在练习时我总愿意尝试付出努力",
            value: 3,
            checked: 1,
            id: generateId()
          }
        ]
      },
      selection1: {
        title: "4. 以上描述选择：",
        value: "",
        options: [
          {
            label: "A. 对陌生人紧张，表达的不清楚或者没有逻辑性",
            value: 1
          },
          {
            label: "B. 不知道如何凸显自己的特点，让别人记住自己",
            value: 2
          },
          {
            label: "C. 滔滔不绝，却有些乏味",
            value: 3
          },
          {
            label: "D. 光顾着介绍自己，太自夸，没有注意倾听别人",
            value: 4
          }
        ]
      },
      selection2: {
        value: '',
        title: "5. 请选择以下城市：",
        options: [
          {
            label: "A. 北京",
            value: 1
          },
          {
            label: "B. 深圳",
            value: 2
          },
          {
            label: "C. 上海",
            value: 3
          },
          {
            label: "D. 成都",
            value: 4
          }
        ]
      }
    };
  },
  methods: {
    showDecimalIcon() {

    },
    handleChange(obj) {
      let prop = obj.prop;
      let val = obj.val;
      this.form[prop] = val;
    },
    handleSatisClick(id, index) {
      let itemIndex = this.satisfaction.options.findIndex(
        item => item.id === id
      );
      this.satisfaction.options[itemIndex].checked = index;
    },
    handleSelection1Change(val) {
      this.selection1.value = val;
    },
    handleSelectione2Change(val) {
      // let index = this.selection2.value.indexOf(val);
      // if (index < 0) {
      //   this.selection2.value.push(val);
      // } else {
      //   this.selection2.value.splice(index, 1);
      // }
      this.selection2.value = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.questionnaire {
  width: 13.66rem;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  padding: 0.32rem 0.42rem 0;
  background-color: #fff;

  .questionnaire-header {
    height: 0.6rem;

    .questionnaire-header__title {
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.18rem;
      color: #fff;
      width: 3.63rem;
      margin: 0 auto;
      text-align: center;
      background: url('../../assets/images/decoration.png') no-repeat;
    }
  }

  .questionnaire-tip {
    margin-top: 0.24rem;
    height: 1.04rem;
    background: rgba(247, 151, 39, 0.1);
    border-radius: 0.1rem;
    padding: 0.22rem 0.4rem;
    box-sizing: border-box;
    .questionnaire-tip__content {
      font-size: 0.15rem;
      color: rgba(247, 151, 39, 1);
      line-height: 0.3rem;
    }
  }

  .questionnaire-content {
    .clearfix:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .clearfix {
      zoom: 1;
    }
    .question-list-item {
      margin-top: 0.15rem;
      box-shadow: 0 0.06rem 0.19rem 0.01rem rgba(142, 145, 161, 0.14);
      border-radius: 0.04rem;
      padding: 0.23rem 0.3rem;
      .question-list-item__title {
        display: flex;
        justify-content: space-between;
        .left {
          font-size: 0.13rem;
          color: #333;
          height: 0.14rem;
          line-height: 0.14rem;
        }
      }

      .right {
        span.margin-20 {
          margin-left: 0.2rem;
        }
        span.margin-39 {
          margin-left: 0.39rem;
        }
        span.margin-45 {
          margin-left: 0.45rem;
        }
        span.margin-33 {
          margin-left: 0.33rem;
        }
      }
      .question-list-item__options {
        display: flex;
        margin-top: 0.2rem;
        padding-left: 0.2rem;
        justify-content: space-between;
        color: #666;
        font-size: 0.14rem;
        cursor: pointer;

        .el-icon-circle-check-outline {
          font-size: 20px;
          vertical-align: top;
          margin-right: 0.14rem;
          color: #ccc;
        }
        .tip {
          margin: 0.14rem 0;
        }
        .sub-options.is-active {
          .el-icon-circle-check-outline,
          .option-title {
            color: #f79727;
          }
        }
      }

      &.with-face {
        .smileface {
          width: 0.26rem;
          height: 0.26rem;
        }
        .sub-options {
          color: #666666;
          font-size: 0.14rem;
          height: 0.26rem;
          line-height: 0.26rem;
          margin-bottom: 0.14rem;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            display: inline-block;
            width: 0.26rem;
            height: 0.26rem;
            text-align: center;
          }
          .width-42 {
            width: 0.42rem;
          }
          .width-28 {
            width: 0.28rem;
          }
          .width-56 {
            width: 0.56rem;
          }
          .width-70 {
            width: 0.7rem;
          }
        }
      }

      &.width-column {
        .question-list-item__options {
          flex-direction: column;
          .sub-options {
            margin-bottom: 0.15rem;
            .option-title {
              display: inline-block;
              height: 0.2rem;
              line-height: 0.2rem;
            }
          }
          .el-row:last-child .sub-options {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .submit-btn {
    text-align: center;
    margin: 0.38rem 0;
    button {
      width: 1.8rem;
      height: 0.5rem;
      cursor: pointer;
      background: linear-gradient(
        -90deg,
        rgba(255, 183, 38, 1),
        rgba(255, 129, 38, 1)
      );
      border-radius: 0.25rem;
      font-size: 0.16rem;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>



