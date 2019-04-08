<template>
  <div class="team" v-loading="loading">
    <el-dialog :visible.sync="state" width="70%" :before-close="handleClose">
      <span slot="title" class="teamTitle">
        <h3>我的小组</h3>
      </span>
      <div class="group">
        <ul class="list-group">
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
      <div class="group1-prev" @click="handlePrev('.list-group', 'group1Index', -320)">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div
          class="group1-next"
          @click="handleNext('.list-group', 'group1Index', -310, 'data', 3)"
        >
          <i class="el-icon-arrow-right"></i>
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
      data: [1, 2, 3, 4, 5, 6, 7],
      group1Index:0
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
     handlePrev(el, listIndex, distance) {
      if (this[listIndex] <= 0) {
      } else {
        this[listIndex]--;
        let ele = document.querySelector(el);
        ele.style.transform = `translateX( ${distance * this[listIndex]}px)`;
        ele.style.transition = "all 0.3s ease";
      }
    },
    handleNext(el, listIndex, distance, list, baseIndex) {
      if (this[listIndex] < this[list].length - baseIndex) {
        this[listIndex]++;
        let ele = document.querySelector(el);
        ele.style.transform = `translateX( ${distance * this[listIndex]}px)`;
        ele.style.transition = "all 0.3s ease";
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.team {
  .teamTitle {
    font-size: 16px;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    position: relative;
    text-indent: 15px;
    h3 {
      font-weight: bold;
      &:after {
        content: "";
        display: block;
        width: 4px;
        height: 16px;
        background-color: #f79727;
        border-radius: 2px;
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
      height: 645px;
      width: 1100px;
    }
    li {
      border: 1px solid #e4e8ed;
      width: 334px;
      display: inline-block;
      margin-right: 7px;
      &:last-child {
        margin-right: 0;
      }
      h4 {
        background: rgba(245, 246, 248, 1);
        color: #333;
        font-size: 14px;
        padding: 20px;
      }
      .teamMain {
        padding: 10px 10px 10px 13px;
        box-sizing: border-box;
        max-height: 534px;
        overflow-y: scroll;

      }
      .teamBlock {
        margin-bottom: 12px;
        display: flex;
      }
      .teamAvatar {
        flex: 1;
        max-width: 70px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 100%;
        }
        span {
          color: #333;
          font-size: 14px;
          display: block;
          margin: 10px 0 0;
          font-weight: bold;
        }
      }
      .teamText {
        flex: 1;
        width: 230px;
        font-size: 12px;
        font-family: ArialMT;
        color: #999;
        line-height: 20px;
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
.group1-prev,
.group1-next {
  width: 34px;
  height: 34px;
  background: #eee;
  border-radius: 34px;
  text-align: center;
  line-height: 34px;
  font-size: 18px;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;

  &:hover {
    background: rgba(247, 151, 39, 1);
    color: #fff;
  }
}
.group1-prev{
  left: -60px;
}
.group1-next{
  right: -60px;
}
.team /deep/ .el-dialog {
  margin-top: 45px !important;
  height: 645px;
}
.team /deep/ .el-dialog__body {
  overflow: hidden !important;
  max-height: 594px;
}
.team /deep/ .el-dialog__wrapper {
  overflow: hidden !important;
}
</style>
