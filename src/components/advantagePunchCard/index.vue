<template>
	<div class="details" v-loading="loading">
    <el-dialog class="details-dialog" :visible.sync="state" :before-close="handleClose">
			<div slot="title" class="punch">
        <div class="name">
          <p>完整优势打卡的展示</p>
          <div class="button">置顶到成长档案</div>
        </div>
        <div class="content">
          <div class="left">
            <!-- 优势图标 -->
            <div class="advantage">
              <div class="ad_left">
                <div>
                  <img src="../../assets/images/icon/ad1.png" alt="" class="ad_left_img">
                  <p>灵性</p>
                </div>
                <div>
                  <img src="../../assets/images/icon/ad2.png" alt="" class="ad_left_img">
                  <p>公平</p>
                </div>
                <div>
                  <img src="../../assets/images/icon/ad3.png" alt="" class="ad_left_img">
                  <p>勇敢</p>
                </div>
              </div>
              <div class="line"></div>
              <div class="ad_right">
                <div>
                  <img src="../../assets/images/icon/ad4.png" alt="" class="ad_right_img">
                  <p>批判思维</p>
                </div>
                 <div>
                  <img src="../../assets/images/icon/ad5.png" alt="" class="ad_right_img">
                  <p>自我管理</p>
                </div>
                 <div>
                  <img src="../../assets/images/icon/ad6.png" alt="" class="ad_right_img">
                  <p>关系建立</p>
                </div>
              </div>

            </div>
            <!-- 查看作品 -->
            <div class="works">
              <div>
                <img src="../../assets/images/icon/ad_works.png" alt="">
                <p>活动名称民乐社团（样本范例）</p>
              </div>
              <div>
                <p>查看作品</p>
                <img src="../../assets/images/icon/ad_next.png" alt="">
              </div>


            </div>
            <!-- 问答 -->
            <section class="qa">
              <p><i>Situation：</i>当时的情况/挑战是什么？</p>
              <div>我最喜欢的数学课学到很难得概念，我学不懂，测验失利</div>
              <p><i>Action：</i>你的主要行动是什么? </p>
              <div>我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪，我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪，我主动找老师课后问问题，我和最好的朋友约着一起对卷子，我安慰自己，很快恢复了情绪。我主动找老师课后问问题，我和最好的朋十九</div>
              <p><i>Results：</i>结果如何?</p>
              <div>周末作业我都完成了，也都会了</div>
            </section>
          </div>
          <div class="middle_line"></div>
          <div class="right">
            <div class="punch_detail">
              <p>打卡时间：<i>2019.3.19</i></p>
              <p>活动类型：<i>学科活动</i></p>
              <p>科目方向：<i>stem</i></p>
              <p>担任角色：<i>队长</i></p>
              <p>参与时间：<i>7天</i></p>
              <p>本次花费时间：<i>2天</i></p>
            </div>
            <div class="comment">
              <p class="title">活动评价</p>
            </div>
          </div>
            
        </div>
        
			</div>
    </el-dialog>
	</div>
</template>

<script>
export default {
  props: {
    // state: {
    //   type: Boolean,
    //   default: false
    // },
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      state: true,
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
    p {
      font-size: 0.16rem;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      margin-left: 0.44rem;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0.04rem;
        height: 0.16rem;
        background: rgba(247, 151, 39, 1);
        top: 50%;
        left: -0.1rem;
        transform: translateY(-50%);
      }
    }
    .button {
      margin-right: 1.2rem;
      width: 1.5rem;
      height: 0.4rem;
      background: rgba(247, 151, 39, 1);
      box-shadow: 0rem 0rem 0rem 0rem rgba(247, 39, 151, 0.35);
      font-size: 0.15rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 0.4rem;
      border-radius: 0.06rem;
    }
  }
  .content {
    height: 5.4rem;
    margin: 0.14rem 0.2rem 0.33rem 0.31rem;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .left {
      width: 6.39rem;
      height: 100%;
      .advantage {
        width: 100%;
        height: 0.8rem;
        background: rgba(248, 248, 248, 1);
        border: 1px solid rgba(228, 232, 237, 1);
        opacity: 0.8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.12rem;
        line-height: 0.12rem;
        .line {
          width: 1px;
          height: 0.32rem;
          background: rgba(228, 232, 237, 1);
        }
        .ad_left {
          width: 3.19rem;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          > div {
            margin-left: 0.55rem;
            img {
              margin: 0 auto;
              display: block;
            }
            p {
              &:nth-of-type(1) {
                color: rgba(217, 87, 217, 1);
              }
              &:nth-of-type(2) {
                color: #24aef2;
              }
              &:nth-of-type(3) {
                color: #fa4b77;
              }
            }
          }
          .ad_left_img {
            width: 0.28rem;
            height: auto;
            margin-bottom: 0.15rem;
          }
        }
        .ad_right {
          width: 3.18rem;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          > div {
            margin-left: 0.5rem;
            img {
              margin: 0 auto;
              display: block;
            }
            &:nth-of-type(2) {
              margin: 0 0.42rem;
            }
            &:nth-of-type(3) {
              margin: 0;
            }
            p {
              color: #f79727;
              margin-top: 0.1rem;
            }
          }
          .ad_right_img {
            width: 0.36rem;
            height: 0.4rem;
          }
        }
      }
      .works {
        height: 0.76rem;
        width: 100%;
        border-bottom: 1px solid rgba(228, 232, 237, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          &:nth-of-type(1) {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img {
              width: 0.72rem;
              height: 0.5rem;
            }
            p {
              font-size: 0.13rem;
              color: #333;
              margin-left: 0.14rem;
            }
          }
          &:nth-of-type(2) {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            img {
              width: 0.18rem;
              height: 0.18rem;
            }
            p {
              font-size: 0.12rem;
              color: #999;
              margin-right: 0.11rem;
            }
          }
        }
      }
      .qa {
        p {
          font-size: 0.15rem;
          color: rgba(51, 51, 51, 1);
          line-height: 0.52rem;
          i {
            font-weight: bold;
          }
        }
        > div {
          background: rgba(255, 248, 240, 1);
          border-radius: 0.06rem;
          font-size: 0.14rem;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(247, 151, 39, 1);
          padding: 0.18rem 0.31rem 0 0.2rem;
          line-height: 0.26rem;
          box-sizing: border-box;
          &:nth-of-type(1) {
            height: 0.6rem;
          }
          &:nth-of-type(2) {
            max-height: 1.06rem;
            overflow: auto;
          }
          &:nth-of-type(3) {
            height: 0.6rem;
          }
        }
      }
    }
    .middle_line {
      width: 1px;
      height: 100%;
      background: rgba(228, 232, 237, 1);
    }
    .right {
      width: 2.69rem;
      height: 100%;
      .punch_detail {
        width: 100%;
        height: 2rem;
        background: rgba(248, 248, 248, 1);
        border: 1px solid rgba(228, 232, 237, 1);
        opacity: 0.8;
        p {
          font-size: 0.13rem;
          line-height: 1;
          margin: 0.17rem 0;
          text-indent: 0.4rem;
          position: relative;
          &::after {
            position: absolute;
            content: ".";
            width: 0.04rem;
            height: 0.04rem;
            background: rgba(247, 151, 39, 1);
            top: 50%;
            transform: translateY(-50%);
            left: 0.27rem;
          }
        }
      }
      .comment {
        height: .47rem;
        line-height: .47rem;
        .title {
          font-size: 0.16rem;
          color: #333;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          position: relative;
          margin-left: .1rem;
          &:after {
            content: "";
            position: absolute;
            width: 0.04rem;
            height: 0.16rem;
            background: rgba(247, 151, 39, 1);
            border-radius: 2px;
            top: 50%;
            left: -.1rem;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.details /deep/ .el-dialog {
  width: 10rem;
  height: 7.1rem;
  margin: 0.22rem auto 0 !important;
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
