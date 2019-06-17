<template>
  <div class="details" v-loading="loading">
    <el-dialog
      class="details-dialog"
      :visible.sync="state"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <div slot="title">
        <div class="name">
          <div class="left">
            <img src="../../assets/images/icon/ac1.png" alt>
            <p>活动名称民乐社团（样本范例）</p>
          </div>
          <div class="button">
            <img src="../../assets/images/icon/ad_3.png" alt>
            <div>
              <p>用户名</p>
              <p>来自</p>
            </div>
          </div>
        </div>
        <div class="punch_info">
          <span>.</span>
          <span>
            打卡时间：
            <i>2019.3.19</i>
          </span>
          <span>.</span>
          <span>
            活动类型：
            <i>学科活动</i>
          </span>
          <span>.</span>
          <span>
            科目方向：
            <i>stem</i>
          </span>
        </div>
        <div class="content">
          <div class="left">
            <!-- 问答 -->
            <section class="qa">
              <p>
                <i>Situation：</i>当时的情况/挑战是什么？
              </p>
              <textarea maxlength="140">我最喜欢的数学课学到很难得概念，我学不懂，测验失利（不超过140字）</textarea>
              <p>
                <i>Action：</i>你的主要行动是什么? （结合你的优势，你具体的行动是什么）
              </p>
              <textarea>我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪，我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪，我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪。我主动找老师课后问问题，我和最好的朋十九</textarea>
              <p>
                <i>Results：</i>结果如何?
              </p>
              <textarea>周末作业我都完成了，也都会了</textarea>
            </section>
          </div>
          <div class="right">
            <p>为他点赞</p>
            <p>分享你的评价</p>
            <textarea
              style="background-color:#fff;"
              maxlength="100"
              name
              id
              cols="30"
              rows="10"
              placeholder="不超过100字"
            ></textarea>
            <p>如果你参与了这个活动，点击分享你看到对方展示的优势与能力标签</p>
            <div class="add_ad_button">
              <button @click="addAdvatage1" v-if="superiorites.length == 0">添加优势应用标签</button>
              <button @click="addAdvatage2" v-if="abilities.length == 0">添加能力应用标签</button>
            </div>
            <div class="item_list">
              <ul v-if="superiorites.length !== 0">
                <li v-for="(item,index) in superiorites" :key="index">
                  <img :src="item.imgsrc" alt>
                  <span>{{item.title}}</span>
                </li>
              </ul>
              <ul v-if="abilities.length!=0" class="abilities">
                <li v-for="(item,index) in abilities" :key="index">
                  <img :src="item.icon" alt>
                  <span>{{item.tipTitle}}</span>
                </li>
              </ul>
            </div>
            <div class="zan">
              <img src="../../assets/images/icon/zan.png" alt>
            </div>
          </div>
        </div>
        <footer>
          <button class="button2" @click="handleClose">已完成</button>
        </footer>
      </div>
    </el-dialog>
    <my-advantage :state.sync="isShowAdvantage" @ability="handleAbility"></my-advantage>
    <add-superiority-dialog @change="handleSuperiChange" ref="addSuperiorityDialog"></add-superiority-dialog>
  </div>
</template>

<script>
import AddSuperiorityDialog from "@/page/superiority-clockin/src/add-superiority-dialog";
import MyAdvantage from "@/components/myAdvantageModal";
// 组建需三个props state控制dialog显示与隐藏，close触发父组件方法
export default {
  components: {
    MyAdvantage,
    AddSuperiorityDialog
  },
  props: {
    state: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: true,
      isShowAdvantage: false,
      abilities: [],
      superiorites: []
    };
  },
  created() {
    let _this = this;
    setTimeout(() => {
      _this.loading = false;
    }, 1000);
  },
  methods: {
    handleSuperiChange(list) {
      console.log(list);
      this.superiorites = list;
    },
    handleAbility(list) {
      this.abilities = list;
    },
    handleClose() {
      this.$emit("close");
    },
    handleInvitation() {
      this.$emit("invitation");
      this.$message("您已拒绝邀请");
    },
    addAdvatage1() {
      this.$refs.addSuperiorityDialog.show();
    },
    addAdvatage2() {
      this.isShowAdvantage = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  .name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.6rem;
    border-bottom: 1px solid #e4e8ed;
    margin-bottom: 0.31rem;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 0.47rem;
        height: 0.46rem;
      }
      p {
        font-size: 0.16rem;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        margin-left: 0.1rem;
        position: relative;
      }
    }
    .button {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 1.3rem;
      img {
        width: 0.36rem;
        height: 0.36rem;
        margin-right: 0.09rem;
        border-radius: 50%;
      }
      p {
        font-size: 0.12rem;
        line-height: 1;
        &:nth-of-type(1) {
          color: #333;
          margin-bottom: 0.05rem;
        }
        &:nth-of-type(2) {
          color: #999;
          font-size: 0.11rem;
        }
      }
    }
  }
  .punch_info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0.61rem;
    span {
      &:nth-of-type(2n + 1) {
        width: 4px;
        height: 4px;
        background-color: #f79727;
      }
      &:nth-of-type(2n) {
        font-size: 0.13rem;
        line-height: 1;
        margin: 0 0.29rem 0 0.1rem;
        color: #888;
        i {
          color: #333;
        }
      }
    }
  }
  .content {
    margin: 0 0.32rem 0 0.61rem;
    display: flex;
    justify-content: space-between;
    .left {
      width: 5.3rem;
      .qa {
        p {
          font-size: 0.15rem;
          color: #333;
          line-height: 1;
          margin: 0.25rem 0 0.17rem;
          font-family: MicrosoftYaHei-Bold;
          i {
            font-weight: bold;
          }
        }
        > textarea {
          background: #fff;
          border-radius: 0.06rem;
          font-size: 0.14rem;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(247, 151, 39, 1);
          padding: 0.18rem 0.34rem 0 0.2rem;
          line-height: 0.26rem;
          box-sizing: border-box;
          height: 1rem;
          max-height: 1rem;
          overflow: auto;
          width: 100%;
          resize: none;
        }
      }
    }
    .right {
      width: 4.9rem;
      height: 100%;
      border: 1px dashed #e67a00;
      margin-top: 0.18rem;
      border-radius: 0.06rem;
      box-sizing: border-box;
      padding: 0.18rem 0.43rem 0.2rem 0.31rem;
      position: relative;
      p {
        font-size: 0.15rem;
        color: #333;
        line-height: 0.24rem;
        position: relative;
        margin-left: 0.1rem;
        &:nth-of-type(1) {
          margin-bottom: 0.25rem;
        }
        &::after {
          position: absolute;
          content: "";
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: #aaa;
          top: 0.13rem;
          left: -0.1rem;
        }
      }
      textarea {
        width: 4.2rem;
        height: 1.8rem;
        max-height: 1.8rem;
        overflow: auto;
        border-radius: 0.06rem;
        padding: 0.18rem;
        box-sizing: border-box;
        margin: 0.16rem 0 0.2rem;
        resize: none;
      }
      .add_ad_button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 0.1rem;
        button {
          width: 1.6rem;
          height: 0.4rem;
          border-radius: 0.04rem;
          border: 1px solid #f7952a;
          font-size: 0.15rem;
          color: #f7952a;
          background-color: #fff8f0;
          margin-right: 0.19rem;
        }
      }
      .zan {
        position: absolute;
        width: 0.9rem;
        height: 0.4rem;
        top: 0rem;
        right: 0.4rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.22rem;
    button {
      width: 1.2rem;
      height: 0.36rem;
      border: 1px solid rgba(221, 221, 221, 1);
      border-radius: 0.04rem;
      margin-right: 0.2rem;
      font-size: 0.14rem;
      background-color: #fff;
      &.button1 {
        color: #999;
      }
      &.button2 {
        color: #fff;
        background: linear-gradient(
          -90deg,
          rgba(255, 183, 38, 1),
          rgba(255, 129, 38, 1)
        );
        border: 1px solid #fff;
      }
    }
  }
  .item_list {
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          flex: 1;
          margin: 0 0.05rem;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.details /deep/ .el-dialog {
  width: 11.4rem;
  height: 7.35rem;
  margin: 0.6rem auto !important;
  background-color: #fff8f0;
}
.details /deep/ .el-dialog__header {
  height: 0.6rem;
  padding: 0;
  line-height: 0.6rem;
  border-bottom: 1px solid rgba(228, 232, 237, 1);
}
.details-dialog .el-dialog__body {
}
</style>
