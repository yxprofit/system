<template>
  <div class="questions">
    <div class="questions-header">
      <div class="left">
        <img :src="activity1" alt="">
      </div>
      <div class="right">
        <h2 class="title">民国民乐社团小提琴打卡</h2>
        <p class="desc">外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC , 随时随地对话全球外教 , 生活 , 职场 , 外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC，外教英语,时纠正 , 学英语上TutorABC，外教英语教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC，外教英语,时纠正 , 学英语上TutorABC，外教英语</p>
      </div>
    </div>
    <div class="questions-actions">
      <el-row>
        <el-col class="acrion-btn" :span="12">
          <button v-if="showAddSupBtn" @click="addSuperiority">添加优势应用标签</button>
          <ul v-else class="shown-list superity">
            <li :class="item.type" v-for="(item,index) in superiorites" :key="index">
              <img :src="item.imgsrc" alt="">
              <p>{{item.title}}</p>
            </li>
          </ul>
        </el-col>
        <el-col class="acrion-btn" :span="12">
          <button v-if="showAddAbilitBtn" @click="addOperate">添加能力应用标签</button>
          <ul v-else class="shown-list ability">
            <li v-for="(item,index) in superiorites" :key="index">
              <img :src="item.imgsrc" alt="">
              <p>{{item.title}}</p>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="questions-details">
      <el-form v-model="form">
        <el-form-item>
          <el-select v-model="form.role" placeholder="担任的角色">
            <el-option
              v-for="item in roleOps"
              :value="item.value"
              :label="item.label"
              :key="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.joinTime" placeholder="参与活动时间">
            <el-option
              v-for="item in timeOps"
              :value="item.value"
              :label="item.label"
              :key="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.payTime" placeholder="本次花费时间">
            <el-option
              v-for="item in payTimeOps"
              :value="item.value"
              :label="item.label"
              :key="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <ul class="question-list">
        <li class="question-list-item" v-for="(item,index) in questionList">
          <div class="title">
            <div class="tag" :content="index+1">{{item.tag}}</div>
            <div class="label">{{item.label}}</div>
          </div>
          <div class="content">
            <item-input @change="handleChange" :prop="item.prop" :placeholder="item.placeholder" :itemValue="item.value"></item-input>
          </div>
        </li>
      </ul>
    </div>
    <div class="questions-btn">
      <button>下一步</button>
    </div>
    <add-superiority-dialog @change="handleSuperiChange" ref="addSuperiorityDialog"></add-superiority-dialog>
     <my-advantage :state.sync="isShowAdvantage"></my-advantage>
  </div>
</template>
<script>
import activity1 from 'assets/images/superiority/activity-01.jpg'
import ItemInput from './item-input'
import AddSuperiorityDialog from './add-superiority-dialog.vue'
 import MyAdvantage from '@/components/myAdvantageModal'
export default {
  components: {
    ItemInput,
    AddSuperiorityDialog,
    MyAdvantage
  },
  data () {
    return {
      isShowAdvantage: false,
      activity1,
      superiorites: [],
      abilities: [],
      form: {
        role: '',
        payTime: '',
        joinTime: ''
      },
      questions: {
        situation: '',
        action: '',
        result: ''
      },
      roleOps: [
        {
          value: '1',
          label: '担任的角色1'
        },
        {
          value: '2',
          label: '担任的角色2'
        }
      ],
      timeOps: [
        {
          value: '1',
          label: '2019-04-20'
        },
        {
          value: '2',
          label: '2019-04-21'
        }
      ],
      payTimeOps: [
        {
          value: '1',
          label: '1小时'
        },
        {
          value: '2',
          label: '2小时'
        }
      ],
      questionList: [
        {
          id: 111,
          tag: 'Situation：',
          label: '当时的情况/挑战是什么？',
          placeholder: '例如：我最喜欢的数学课学到很难得概念，我学不懂，测验失利（不超过140字）',
          value: '',
          prop: 'situation'
        },
        {
          id: 222,
          tag: 'Action：',
          label: '你的主要行动是什么? （结合你的优势，你具体的行动是什么）',
          placeholder: '我主动找老师课后问问题<br/>我和最好的朋友约着一起对卷子<br/>我安慰自己，很快恢复了情绪',
          value: '',
          prop: 'action'
        },
        {
          id: 222,
          tag: 'Results：',
          label: '结果如何?',
          placeholder: '周末作业我都完成了，也都会了',
          value: '',
          prop: 'result'
        }
      ]
    }
  },
  computed: {
    showAddSupBtn () {
      return this.superiorites.length <= 0
    },
    showAddAbilitBtn () {
      return this.abilities.length <= 0
    }
  },
  methods: {
    addSuperiority () {
      this.$refs.addSuperiorityDialog.show()
    },
    addOperate () {
      this.isShowAdvantage = true
    },
    handleSuperiChange (list) {
      this.superiorites = list
    },
    handleChange (obj) {
      this.questions[obj.prop] = obj.val

      console.log(this.questions)
    }
  }
}
</script>
<style lang="scss" scoped>
.questions {
  height: calc( 100% - 1.34rem);
  overflow: auto;
  .questions-header {
    height: 1.88rem;
    width: 100%;
    padding: 0 0.24rem 0 0.31rem;
    margin-top: 0.21rem;
    display: flex;
    .left {
      margin-right: 0.29rem;
      img {
        height: 1.88rem;
        width: 3.22rem;
      }
    }
    .right {
      flex: 1;
      .title {
        line-height: 0.2rem;
        font-size: 0.2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.26rem;
        margin-top: 0.2rem;
      }
      .desc {
        font-size: 0.14rem;
        color:rgba(136,136,136,1);
        line-height: 0.24rem;
      }
    }
  }
  .questions-actions {
    height: 0.8rem;
    margin: 0.21rem 0.31rem 0.33rem;
    background:rgba(248,248,248,0.8);
    border: 1px solid rgba(228,232,237,1);
    .el-row {
      height: 100%;
      position: relative;
    }
    .acrion-btn {
      text-align: center;
      height: 100%;
      button {
        height: 0.44rem;
        width: 1.86rem;
        text-align: center;
        line-height: 0.44rem;
        cursor: pointer;
        font-size: 0.15rem;
        border-radius: 0.04rem;
        margin-top: 0.16rem;
        border: 1px solid #F79727;
        box-sizing: border-box;
      }
      &:first-child button {
        background-color: #F79727;
        color: #fff;
      }
      &:last-child button {
        background-color: transparent;
        color: #F79727;
      }
      .shown-list {
        height: 100%;
        line-height: 100%;
        li {
          height: 0.8rem;
          line-height: 0.8rem;
          display: inline-block;
          margin-right: 0.6rem;
          &:last-child{
            margin-right: 0;
          }
          img {
            display: inline-block;
            vertical-align: middle;
          }
          p {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.14rem;
          }
        }
      }
      .shown-list.superity {
        img {
          width: 0.28rem;
          height: 0.28rem;
          margin-right: 0.08rem;
        }
        .spirit {
          color: #D957D9;
        }
        .emotion {
          color: #24AEF2;
        }
        .relationship {
          color: #FA4B77;
        }
      }
      .shown-list.ability {
        li {
          img {
            width: 0.36rem;
            height: 0.4rem;
            margin-right: 0.1rem;
          }
          p {
            color: #F79727;
          }
        }
      }
    }
    .acrion-btn:first-child:after {
      position: absolute;
      height: 0.36rem;
      width: 1px;
      content: "";
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(228,232,237,1);
    }
  }
  .questions-details {
    position: relative;
    .el-form {
      position: absolute;
      right: 0.32rem;
      font-size: 0;
      top: -0.13rem;
      .el-form-item {
        width: 1.7rem;
        display: inline-block;
      }
      .el-form-item + .el-form-item {
        margin-left: 0.2rem;
      }
    }
    .question-list {
      .question-list-item {
        padding: 0 0.32rem 0 0.54rem;
        margin-bottom: 0.33rem;
        &:last-child {
          margin-bottom: 0;
        }
        .tag,
        .label {
          color: #333;
          font-size: 0.15rem;
          display: inline-block;
          margin-bottom: 0.17rem;
        }
        .tag {
          font-weight: bold;
          position: relative;
          &:after {
            content: attr(content);
            position: absolute;
            left: -0.37rem;
            top: -0.07rem;
            color: red;
            width: 0.26rem;
            height: 0.26rem;
            text-align: center;
            line-height: 0.26rem;
            background: #F79727;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
  .questions-btn {
    height: 0.52rem;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0.33rem;
    button {
      height: 100%;
      width: 2.23rem;
      line-height: 0.52rem;
      background:linear-gradient(-90deg,rgba(255,183,38,1),rgba(255,129,38,1));
      border-radius: 0.26rem;
      color: #fff;
      font-weight: bold;
      font-size: 0.18rem;
      cursor: pointer;
    }
  }
}
</style>
