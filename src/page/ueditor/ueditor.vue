<template>
  <div class="teacher_editor" v-loading="loading" v-show="state">
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
          <el-form-item label="内容" prop="name" label-width="55px">
            <div id="editor">
              <!-- <vue-html5-editor :content="content" :height="425"></vue-html5-editor> -->
              <smeditor :config="config"></smeditor>
            </div>
          </el-form-item>

          <el-form-item label="相关文件" prop="name">
            <div class="upload-item">余周周的课件作品.doc</div>
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
import SMEditor from "../../components/editor/SMEditor";
const config = {
  // 接口地址
  uploadUrl: "https://jsonplaceholder.typicode.com/posts/",
  // form 里的 filename
  uploadName: "upload_file",
  // 其他参数
  uploadParams: {},
  sticky: true,
  // 上传成功回调
  uploadCallback: data => {
    // console.log(data)
    return (
      data.image.url ||
      "https://ws1.sinaimg.cn/large/006tNc79gy1fp1rdw7e90j30rs0rsacb.jpg"
    );
  },
  // 上传失败回调, 可选
  uploadFailed: err => {
    // console.log('仅供测试, 并非真正上传')
    alert("仅供测试, 并非真正上传!", err);
  }
};
export default {
  data() {
    return {
      editor: null,
      loading: true,
      content: "",
      config: config
    };
  },
  props: ["state"],
  created() {
    let _this = this;
    setTimeout(() => {
      _this.loading = false;
    }, 1000);
  },
  mounted() {},
  methods: {
    gettext() {},
    handleClose() {
      this.$emit("close");
      console.log(this.content);
    }
  },
  components: {
    smeditor: SMEditor
  },
  destroyed() {}
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
// dialog样式修改
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
#editor {
  width: 902px;
  height: 460px;
  margin-left: 25px;
}
#editor /deep/ .edui-editor-toolbarboxinner {
  height: 64px;
}
#editor /deep/ .edui-toolbar {
  height: 64px;
  // line-height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#editor /deep/ #edui1_iframeholder {
  height: 364px !important;
}
#editor /deep/ #edui1_bottombar {
  display: none;
}
// form 表单样式修改
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
}
.teacher_editor /deep/ .el-input {
  width: 370px;
}
.teacher_editor /deep/ .el-button {
  width: 120px;
  height: 36px;
  background: linear-gradient(
    -90deg,
    rgba(255, 183, 38, 1),
    rgba(255, 129, 38, 1)
  );
  border-radius: 4px;
  border: none;
  float: right;
  margin-right: 50px;
}
.upload-item {
  display: inline-block;
  padding: 8px;
  color: #2691ff;
  border: 1px solid #e4e4e4;
  border-radius: 2px;
  line-height: 14px;
  background-color: #f5f6f8;
  cursor: pointer;
}
</style>

