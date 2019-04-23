<template>
	<div class="details" v-loading="loading">
    <el-dialog class="details-dialog" :visible.sync="state" :before-close="handleClose">
			<div slot="title">
        <div class="name">
          <div class="left">
            <img src="../../assets/images/icon/ac1.png" alt="">
            <p>活动名称民乐社团（样本范例）</p>
          </div>
          <div class="button">
            <img src="../../assets/images/icon/ad_3.png" alt="">
            <div>
              <p>用户名</p>
              <p>来自</p>
            </div>
          </div>
        </div>
        <div class="punch_info">
          <span>.</span>
          <span>打卡时间：<i>2019.3.19</i></span>
          <span>.</span>
          <span>活动类型：<i>学科活动</i></span>
          <span>.</span>
          <span>科目方向：<i>stem</i></span>
        </div>
        <div class="content">
          <div class="left">
            <!-- 问答 -->
            <section class="qa">
              <p><i>Situation：</i>当时的情况/挑战是什么？</p>
              <textarea maxlength="140">我最喜欢的数学课学到很难得概念，我学不懂，测验失利（不超过140字）</textarea>
              <p><i>Action：</i>你的主要行动是什么? （结合你的优势，你具体的行动是什么）</p>
              <textarea>我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪，我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪，我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪。我主动找老师课后问问题，我和最好的朋十九</textarea>
              <p><i>Results：</i>结果如何?</p>
              <textarea>周末作业我都完成了，也都会了</textarea>
            </section>
          </div>
          <div class="right">
            <p>为他点赞</p>
            <p>分享你的评价</p>
            <textarea maxlength="100" name="" id="" cols="30" rows="10" placeholder="不超过100字">
            </textarea>
            <p>如果你参与了这个活动，点击分享你看到对方展示的优势与能力标签</p>
            <div class="add_ad_button">
              <button>添加优势应用标签</button>
              <button>添加能力应用标签</button>
            </div>
            <div class="zan">
              <img src="../../assets/images/icon/zan.png" alt="">
            </div>
          </div>
            
        </div>
        <footer>
          <button class="button1" @click="handleInvitation">拒绝邀请</button>
          <button class="button2" @click="handleClose">提交</button>
        </footer>
			</div>
    </el-dialog>
	</div>
</template>

<script>
// 组建需三个props state控制dialog显示与隐藏，close触发父组件方法
export default {
  props: {
    state: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: true
    };
  },
  created() {
    let _this = this;
    setTimeout(() => {
      _this.loading = false;
    }, 1000);
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleInvitation(){
      this.$emit('invitation')
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
    margin-left: .61rem;
    span{
      &:nth-of-type(2n + 1) {
        width: 4px;
        height: 4px;
        background-color: #f79727;
      }
      &:nth-of-type(2n) {
       font-size: .13rem;
       line-height: 1;
       margin: 0 .29rem 0 .1rem;
       color: #888;
       i{
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
          margin: .25rem 0 .17rem;
          font-family:MicrosoftYaHei-Bold;
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
      height: 4.6rem;
      border: 1px dashed #E67A00;
      margin-top: .18rem;
      border-radius: .06rem;
      box-sizing: border-box;
      padding: .18rem .43rem .47rem .31rem;
      position: relative;
      p{
        font-size: .15rem;
        color: #333;
        line-height: .24rem;
        position: relative;
        margin-left: .1rem;
        &:nth-of-type(1){
          margin-bottom: .25rem;
        }
        &::after{
          position: absolute;
          content:'';
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: #aaa;
          top: .13rem;
          left: -.1rem;
        }
      }
      textarea{
        width: 4.2rem;
        height: 1.8rem;
        max-height: 1.8rem;
        overflow: auto;
        border-radius: .06rem;
        padding: .18rem;
        box-sizing: border-box;
        margin: .16rem 0 .2rem;
        resize: none;
      }
      .add_ad_button{
        display: flex;
        justify-content: flex-start;
        margin-top: .2rem;
        button{
          width: 1.6rem;
          height: .4rem;
          border-radius: .04rem;
          border: 1px solid #F7952A;
          font-size: .15rem;
          color: #F7952A;
          background-color: #FFF8F0;
          margin-right: .19rem;
        }
      }
      .zan{
        position: absolute;
        width: .9rem;
        height: .4rem;
        top: 0rem;
        right: .4rem;
        img{
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
    margin-top: .22rem;
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
}
</style>
<style lang="scss" scoped>
.details /deep/ .el-dialog {
  width: 11.4rem;
  height: 6.65rem;
  margin: .6rem auto !important;
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
