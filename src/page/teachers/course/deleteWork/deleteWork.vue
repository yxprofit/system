<template>
  <div class="deletework" v-loading="loading">
    <el-dialog :visible.sync="state" width="38%" :before-close="handleClose">
      <span slot="title" class="deletework_title">
        <h3>删除任务</h3>
      </span>
      <div class="content">
        <img src="@/assets/images/teacher/21.png" alt>
        <p>删除后不可撤销，请谨慎操作</p>
        <div class="buttons">
          <button @click="cancel">取消</button>
          <button @click="confirm">确认</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: true,
      loading: true,
      ischeck: 1
    };
  },
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
    check(id) {
      this.ischeck = id;
    },
    cancel(){
      this.state = false
    },
    confirm(){}
  }
};
</script>
<style lang="scss" scoped>
.deletework {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
// dialog样式修改
.deletework /deep/ .el-dialog__header {
  height: 60px;
  border-bottom: 1px solid rgba(228, 232, 237, 1);
  padding: 22px 30px;
  box-sizing: border-box;
  .deletework_title {
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
.deletework /deep/ .el-dialog__body {
  padding: 29px 106px 26px;
}
.deletework {
  .content {
    img {
      width: 82px;
      height: 82px;
      display: block;
      margin: 0 auto;
      background-color: rgb(253, 246, 236);
      border-radius: 10px;
    }
    p {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      // line-height: 26px;
      text-align: center;
      margin: 25px 0;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 120px;
        height: 36px;
        border: 1px solid rgba(204, 204, 204, 1);
        border-radius: 4px;
        color:rgba(153,153,153,1);
        font-size: 14px;
        &:nth-of-type(2){
          background:linear-gradient(-90deg,rgba(255,183,38,1),rgba(255,129,38,1));
          color: #fff;
          border: none;
        }
      }
    }
  }
}
</style>

