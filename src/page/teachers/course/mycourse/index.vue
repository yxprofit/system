<template>
  <div class="mycourse" v-loading="loading">
    <hgroup :class="{'active':isHidden}">
      <div>
        <span>我的任务</span>
        <span @click="changeIsHidden"><img src="../../../../assets/images/icon/icon_task_close.png" alt=""></span>
      </div>
      <ul>
        <li>
          <h4 class="icon-course">课件任务名称</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
        <li>
          <h4 class="icon-test">测试任务名称</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
        <li>
          <h4 class="icon-questionnaire">问卷任务名称</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
        <li>
          <h4 class="icon-works">作品上传</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
        <li>
          <h4 class="icon-clock">优势打卡任务名称</h4>
          <div>
            <p>截止时间：2019.03.11</p>
            <p>发起人：张丹丹老师</p>
          </div>
        </li>
      </ul>
      <var class="taskmore" v-show='!isHidden'>查看更多</var>
    </hgroup>
    <section :class="{'active':isHidden}">
      <div>
        <div>
          <h2>我的课程</h2>
          <span :class="{active:isTab===0}" @click="changeTab(0)">当前课程</span>
          <span :class="{active:isTab===1}" @click="changeTab(1)">历史课程</span>
        </div>
        <section class='list'>
          <ul v-show='isTab===0'>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img1.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img2.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img3.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img4.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img5.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img1.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img3.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img4.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img5.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img1.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img3.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img4.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img5.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img1.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
          </ul>
          <ul v-show='isTab===1'>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img4.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img5.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img1.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img3.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img4.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img5.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <router-link to="mycourse/view" tag="li">
              <img src="../../../../assets/images/img1.png" alt="">
              <h4>课程名称课程名称</h4>
              <p>开始时间：2019.01.01</p>
              <p>结束时间：2019.01.01</p>
              <p>所属班级：104班</p>
            </router-link>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
            <li class="bai"></li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Mycourse',
  data() {
    return {
      loading: true,
      isHidden: false,
      isTab: 0
    }
  },
  created() {
    let _this = this
    setTimeout(() => {
      _this.loading = false
    }, 1000)
  },
  methods: {
    changeIsHidden() {
      this.isHidden = !this.isHidden
    },
    changeTab(num) {
      this.isTab = num
    }
  }
}
</script>

<style lang="scss" scoped>
.mycourse {
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > section {
    padding-top: 10px;
    width: calc(100% - 222px);
    height: 100%;
    border: 1px solid rgba(228, 232, 237, 1);
    transition: width 0.3s;
    & > div {
      height: 100%;
      padding: 0 20px;
      border-radius: 6px;
      background-color: #fff;
      & > div {
        height: 70px;
        line-height: 70px;
        display: flex;
        h2 {
          flex: 1;
          display: block;
          height: 20px;
          text-indent: 40px;
          position: relative;
          font-size: 18px;
          font-weight: 600;
          &:after {
            content: "";
            position: absolute;
            width: 18px;
            height: 20px;
            top: 25px;
            left: 8px;
            background-image: url("../../../../assets/images/icon/icon_mycourse.png");
          }
        }
        span {
          display: block;
          width: 100px;
          height: 32px;
          font-weight: bold;
          line-height: 32px;
          text-align: center;
          border-radius: 16px;
          margin-top: 19px;
          color: #666;
          cursor: pointer;
          position: relative;
          &:hover {
            color: #333;
          }
          &.active {
            color: #333;
            &:before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 20px;
              height: 4px;
              margin-left: -10px;
              background: linear-gradient(
                -90deg,
                rgba(255, 183, 38, 1),
                rgba(255, 129, 38, 1)
              );
              border-radius: 2px;
            }
          }
        }
      }
      & > section {
        padding-bottom: 30px;
        ul {
          display: flex;
          display: -webkit-flex;
          justify-content: space-around;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            box-sizing: border-box;
            width: 260px;
            height: 310px;
            border-radius: 4px;
            overflow: hidden;
            border: 1px solid rgba(228, 232, 237, 1);
            margin-bottom: 15px;
            padding-bottom: 3px;
            cursor: pointer;
            img {
              width: 190px;
              height: 200px;
              display: block;
              margin: 0 auto;
            }
            h4 {
              margin: 8px 19px 15px;
              font-size: 15px;
              font-weight: 600;
            }
            p {
              display: block;
              height: 12px;
              margin-left: 19px;
              margin-bottom: 9px;
              font-size: 12px;
              line-height: 12px;
              text-indent: 9px;
              position: relative;
              &:after {
                content: "";
                display: block;
                width: 4px;
                height: 4px;
                background-color: #fa6464;
                position: absolute;
                left: 0;
                top: 3px;
              }
              &:nth-last-child(3):after {
                background-color: #56bf79;
              }
            }
            &.bai {
              visibility: hidden;
              height: 0;
              margin: 0;
            }
          }
        }
      }
    }
    &.active {
      width: calc(100% - 14px);
    }
  }
  hgroup {
    width: 210px;
    height: 100%;
    padding-bottom: 50px;
    float: right;
    border-left: 1px solid rgba(228, 232, 237, 1);
    transition: width 0.3s;
    background-color: #fff;
    & > div {
      padding: 0 20px;
      height: 70px;
      line-height: 70px;
      background-image: url("../../../../assets/images/task_bg.png");
      display: flex;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      & > span:first-child {
        flex: 1;
      }
      & > span:nth-child(2) {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        margin-top: 23px;
        cursor: pointer;
      }
    }
    & > ul > li {
      padding: 15px 14px 0 16px;
      h4 {
        height: 16px;
        line-height: 16px;
        font-weight: 600;
        text-indent: 26px;
        background-size: 16px 16px;
        margin-bottom: 15px;
        background-position: 0 0;
        background-repeat: no-repeat;
        &.icon-course {
          background-image: url("../../../../assets/images/icon/s8.png");
        }
        &.icon-test {
          background-image: url("../../../../assets/images/icon/s5.png");
        }
        &.icon-questionnaire {
          background-size: 14px 16px;
          background-image: url("../../../../assets/images/icon/s6.png");
        }
        &.icon-works {
          background-size: 16px 14px;
          background-position: 1px 0;
          background-image: url("../../../../assets/images/icon/s7.png");
        }
        &.icon-clock {
          background-image: url("../../../../assets/images/icon/s9.png");
        }
      }
      div {
        background-color: #f2f5f7;
        padding: 15px 12px 3px;
        p {
          display: block;
          font-size: 12px;
          line-height: 12px;
          text-indent: 16px;
          position: relative;
          color: #888;
          margin-bottom: 11px;
          &:after {
            content: "";
            display: block;
            position: absolute;
            width: 4px;
            height: 4px;
            background-color: #c2c8cc;
            top: 3px;
            left: 0;
          }
        }
      }
    }
    &.active {
      width: 44px;
      height: 44px;
      min-height: 44px;
      padding-bottom: 0;
      margin-top: 28px;
      background-color: transparent;
      border: none;
      & > div {
        width: 44px;
        height: 44px;
        padding: 10px;
        text-align: center;
        border-radius: 50% 0 0 50%;
        span:nth-child(1) {
          display: none;
        }
        span:nth-child(2) {
          margin-top: 0;
          transform: rotate(180deg);
        }
      }
      ul {
        display: none;
      }
    }
    .taskmore {
      border: 1px solid rgba(187, 187, 187, 1);
      border-radius: 16px;
      font-size: 12px;
      color: #999;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      display: block;
      margin: 30px auto 0;
      cursor: pointer;
    }
  }
  .list {
    max-height: calc(100vh - 130px);
    overflow: auto;
  }
}
</style>
