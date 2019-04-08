<template>
  <div class="team" v-loading="loading">
    <el-dialog :visible.sync="state" width="70%" :before-close="handleClose">
      <span slot="title" class="teamTitle">
        <h3>我的小组</h3>
      </span>
      <div class="group">
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <h4>09级2班 03组</h4>
            <div class="teamMain">
              <div class="teamBlock" v-for="(item,index) in data" :key="index">
                <div class="teamAvatar">
                  <img :src="head">
                  <span>欧阳娜娜</span>
                </div>
                <div class="teamText">
                  欣赏美与卓越 | 欣赏美与卓越 | 欣赏
                  美与卓越
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import head from "assets/images/head.png";
export default {
  name: "team",
  props: ["state"],
  components: {},
  data() {
    return {
      loading: true,
      head,
      data: [1, 2, 3, 4, 5, 6, 7]
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
.team {
  .teamTitle {
    font-size: 0.16rem;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    position: relative;
    text-indent: 0.15rem;
    h3 {
      font-weight: bold;
      &:after {
        content: "";
        display: block;
        width: 0.04rem;
        height: 0.16rem;
        background-color: #f79727;
        border-radius: 0.02rem;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
  .group {
    overflow-x: scroll;
    overflow-y: scroll;
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      height: 6.45rem;
      width: 11rem;
    }
    li {
      border: 0.01rem solid #e4e8ed;
      width: 3.34rem;
      display: inline-block;
      margin-right: 0.07rem;
      &:last-child {
        margin-right: 0;
      }
      h4 {
        background: rgba(245, 246, 248, 1);
        color: #333;
        font-size: 0.14rem;
        padding: 0.2rem;
      }
      .teamMain {
        padding: 0.1rem 0.1rem 0.1rem 0.13rem;
        box-sizing: border-box;
        max-height: 5.34rem;
        overflow-y: scroll;

      }
      .teamBlock {
        margin-bottom: 0.12rem;
        display: flex;
      }
      .teamAvatar {
        flex: 1;
        max-width: 0.7rem;
        img {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 100%;
        }
        span {
          color: #333;
          font-size: 0.14rem;
          display: block;
          margin: 0.1rem 0 0;
          font-weight: bold;
        }
      }
      .teamText {
        flex: 1;
        width: 2.3rem;
        font-size: 0.12rem;
        font-family: ArialMT;
        color: #999;
        line-height: 0.2rem;
      }
      &:hover {
        h4 {
          background: #fff3e5;
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
}
.team /deep/ .el-dialog {
  margin-top: 0.45rem !important;
  overflow: hidden !important;
  height: 6.45rem;
}
.team /deep/ .el-dialog__wrapper {
  overflow: hidden !important;
}
</style>
