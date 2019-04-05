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
          <el-form-item label="内容" prop="name" label-width="55px">
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
      state: true,
      config: {
        /*//可以在此处定义工具栏的内容
            toolbars: [
              ['fullscreen', 'source','|', 'undo', 'redo','|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',
                '|','superscript','subscript','|', 'forecolor', 'backcolor','|', 'removeformat','|', 'insertorderedlist', 'insertunorderedlist',
                '|','selectall', 'cleardoc','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify','|',
                'link','unlink']
            ],*/
        autoHeightEnabled: false,
        autoFloatEnabled: true, //是否工具栏可浮动
        initialContent: "六神磊磊的唐诗课上线两个月，已经有数万名孩子通过小鹅通在学习。感谢小鹅通把我们便捷地连接起来。而且它每一天都在进步，提供更好的体验。六神磊磊的唐诗课上线两个月，已经有数万名孩子通过小鹅通在学习。感谢小鹅通把我们便捷地连接起来。而且它每一天都在进步，提供更好的体验。六神磊磊的唐诗课上线两个月，已经有数万名孩子通过小鹅通在学习。感谢小鹅通把我们便捷地连接起来。而且它每一天都在进步，提供更好的体验。", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        autoClearinitialContent: true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: 902,
        initialFrameHeight: 460,
        BaseUrl: "",
        UEDITOR_HOME_URL: "/static/Ueditor/"
      }
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
    this.editor = UE.getEditor("editor", this.config);
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
#editor /deep/ .edui-editor-toolbarboxinner{
  height: 64px;
}
#editor /deep/ .edui-toolbar{
  height: 64px;
  // line-height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#editor /deep/ #edui1_iframeholder{
    height: 364px !important;
  }
  #editor /deep/ #edui1_bottombar{
    display:  none;
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
.teacher_editor /deep/ .el-button{
  width:120px;
height:36px;
background:linear-gradient(-90deg,rgba(255,183,38,1),rgba(255,129,38,1));
border-radius:4px;
border: none;
float: right;
margin-right: 50px;
}
</style>

