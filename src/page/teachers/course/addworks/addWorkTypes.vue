<template>
  <div class="addwork" v-loading="loading" v-show="state">
    <el-dialog :visible.sync="state" width="38%" :before-close="handleClose">
      <span slot="title" class="taddwork_title">
        <h3>选择添加任务类型</h3>
      </span>
      <div class="types">
        <div class="types_img">
          <img v-if="ischeck===1" src="@/assets/images/teacher/4.png" alt>
          <img v-if="ischeck===2" src="@/assets/images/teacher/3.png" alt>
          
          <p :class="ischeck===1?'active':''">图文信息/超链接</p>
          <div :class="ischeck===1?'select':'radio'" @click="check(1)">
            <div class="dot"></div>
          </div>
        </div>
        <div class="types_img">
          <img v-if="ischeck===1" src="@/assets/images/teacher/1.png" alt>
          <img v-if="ischeck===2" src="@/assets/images/teacher/2.png" alt>
          <p :class="ischeck===2?'active':''">优势打卡</p>
           <div :class="ischeck===2?'select':'radio'" @click="check(2)">
            <div class="dot"></div>
          </div>
        </div>
      </div>
      <button @click='handleClick'>下一步</button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      ischeck:1
    };
  },
  props:['state'],
  created() {
    let _this = this;
    setTimeout(() => {
      _this.loading = false;
    }, 1000);
  },
  mounted() {},
  methods: {
    handleClose() {
      this.$emit("close");
    },
    check(id){
      this.ischeck = id
    },
    handleClick(){
      this.$emit('handleJump')
    }
  }
};
</script>
<style lang="scss" scoped>
.addwork {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
// dialog样式修改
.addwork /deep/ .el-dialog__header {
  height: 60px;
  border-bottom: 1px solid rgba(228, 232, 237, 1);
  padding: 22px 30px;
  box-sizing: border-box;
  .addwork_title {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    h3 {
      font-size: 16px;
      font-family: MicrosoftYaHei-Bold;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 26px;
    }
  }
}
.addwork /deep/ .el-dialog__body {
  padding: 29px 106px 26px;
}
.types {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .types_img {
    width: 130px;
    img {
      width: 94px;
      height: 94px;
      background: rgba(242, 242, 242, 1);
      border-radius: 8px;
      margin: 0 auto;
      display: block;
    }
    p {
      text-align: center;
      margin: 20px 0 24px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      &.active{
        color: #F79727;
      }
    }
    // .radio {
    //   width: 16px;
    //   height: 16px;
    //   margin: 0 auto;
    //   display: block;
    // }
    .radio{
      width: 16px;
      height: 16px;
      margin: 0 auto;
      border: 1px solid #bbb;
      border-radius: 50%;
    }
    .select{
      width: 16px;
      height: 16px;
      margin: 0 auto;
      border: 1px solid #F79727;
      border-radius: 50%;
      .dot{
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: #F79727;
        margin: 3px auto;
        
      }
    }
  }
}
.addwork button {
  width: 120px;
  height: 36px;
  background: linear-gradient(
    -90deg,
    rgba(255, 183, 38, 1),
    rgba(255, 129, 38, 1)
  );
  border-radius: 4px;
  margin: 34px auto 0;
  display: block;
  color: #fff;
  font-size: 14px;
  font-family: MicrosoftYaHei;
}
</style>

