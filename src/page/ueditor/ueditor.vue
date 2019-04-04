<template>
  <div class="teacher_editor" v-loading="loading">
    <el-dialog :visible.sync="state" width="82%" :before-close="handleClose">
      <span slot="title" class="teacher_editor_title">
        <h3>
          <i></i>课件编辑
        </h3>
      </span>
      <div class="form-wraper">
        <el-form ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="name" label-width='55px'>
             <div id="editor"></div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">确认添加</el-button>
          </el-form-item>
        </el-form>
      </div>
    
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      editor: null,
      loading: true,
      state: true
    };
  },
  // props: ["state"],
  created() {
    let _this = this;
    setTimeout(() => {
      _this.loading = false;
    }, 1000);
  },
  mounted() {
    // // 引入url
    // UEDITOR_CONFIG.UEDITOR_HOME_URL = '../../static/Ueditor/'
    // // 实例化editor编辑器
    // this.editor = UE.getEditor('editor')
  },
  methods: {
    gettext() {
      // 获取editor中的文本
      console.log(this.editor.getContent());
    },
    handleClose() {
      this.$emit("close");
    }
  },
  destroyed() {
    // 将editor进行销毁
    this.editor.destroy();
  }
};
</script>
<style lang="scss" scoped>
.teacher_editor {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.teacher_editor /deep/ .el-dialog__header {
  height: 60px;
  border-bottom: 1px solid rgba(228, 232, 237, 1);
  .teacher_editor_title {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    h3 {
      i {
        width: 4px;
        height: 16px;
        background: rgba(247, 151, 39, 1);
        border-radius: 2px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
}
.teacher_editor /deep/ .el-form-item__label {
  position: relative;
  &:after {
    position: absolute;
    content: ".";
    width: 6px;
    height: 6px;
    background: rgba(242, 42, 24, 1);
    border-radius: 50%;
    top: 50%;
    left: 0;
    margin-top: -3px;
  }
  .el-el-input {
    width: 700px !important;
  }
}
</style>

