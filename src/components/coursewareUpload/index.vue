<template>
  <div class="my-advantage">
    <el-dialog :visible.sync="visible" width="5.63rem" :before-close="handleClose">
      <div class="adt-title-wrap">
        <div class="adt-line"></div>
        <div class="adt-title">我的优势打卡</div>
        <div class="back">
          <i class="el-icon-arrow-left"></i>
          <span class="back-text">返回上一步</span>
        </div>
      </div>
      <div class="upload-desc">这个活动中你有完成作品吗？上传留下记录，赢得积分</div>
      <div class="content-wrap">
        <div class="courseware-content">
          <!-- <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :on-error="handleError"
            :auto-upload="false"
            multiple
          >
            <div class="course-title-wrap">
              <img src="../../assets/images/icon/icon_course_name.png" alt class="course-file-icon">
              <span class="course-title">从你的课堂作品中选择</span>
            </div>
          </el-upload>-->
          <div class="course-title-wrap" @click="handleUploadSelect">
            <img src="../../assets/images/icon/icon_course_name.png" alt class="course-file-icon">
            <span class="course-title">从你的课堂作品中选择</span>
          </div>

          <ul class="course-list">
            <li class="course-item" v-for="(list, index) in uploadList" :key="index">{{ list.fileName }}</li>
          </ul>
        </div>
        <div class="upload-content">
          <div class="upload-btn">上传本地文件</div>
          <div class="upload-warn">选择文件( 不超过 100 M),,支持 PDF,PPT,MP4,JPG,DOCX</div>
        </div>
      </div>
      <div class="submit-wrap">
        <div class="over-btn" @click="submit">跳过</div>
        <div class="submit" @click="submit">下一步</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Boolean,
      default: false
    },
    uploadList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      visible: false,
      fileList: []
    }
  },
  watch: {
    state (newVal) {
      this.visible = newVal
      this.$emit('update:state', newVal)
    },
    uploadList (newVal, oldVal) {
      console.log(newVal, 'newVal')
    }
  },
  methods: {
    handleClose () {
      this.visible = false
      this.$emit('update:state', false)
      this.$emit('close')
    },
    handleChange (file, fileList) {
      console.log(file, fileList, 'filelist')
    },
    handleUploadSelect () {
      this.$emit('uploadSelect')
    },
    submit () {
      this.visible = false
      this.$emit('update:state', false)
      this.$emit('invitative')
    },
    handleSuccess () {
      this.$message({
        type: 'success',
        message: '上传成功',
        customClass: 'unpload-message'
      })
    },
    handleError () {
      this.$message({
        message: '上传失败',
        type: 'error',
        customClass: 'unpload-message'
      })
    },
    handleSubmit () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-advantage /deep/ .el-dialog__header,
.my-advantage /deep/ .el-dialog__body {
  padding: 0;
}

.content-wrap /deep/ .el-upload-list {
  display: flex;
  padding: 0 0.7rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 0.2rem;
}

.content-wrap /deep/ .el-upload-list__item {
  flex: 1;
  width: 50%;
  flex: 0 0 50%;
  text-align: left;
  height: 0.3rem;
  line-height: 0.3rem;
  margin: 0;
  display: flex;
  align-items: center;
  // margin-right: 0.3rem;
  // margin-bottom: 0.2rem;

  &:nth-child(2n) {
    margin-right: 0;
    float: right;
  }

  &:nth-child(2n + 1) {
    float: left;
  }
}

.content-wrap /deep/ .el-icon-document {
  display: none;
}

.content-wrap /deep/ .el-upload-list__item-name {
  margin-right: 0;
  height: 0.3rem;
  line-height: 0.3rem;
  flex: 1;
}
</style>

<style lang="scss" scoped>
@import '../../assets/css/mixins.scss';
.my-advantage {
  border-radius: 0.06rem;
}
.adt-title-wrap {
  height: 0.6rem;
  line-height: 0.6rem;
  padding-left: 0.3rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #e4e8ed;
  border-radius: 0.06rem 0.06rem 0 0;
  font-size: 0;
  position: relative;
  font-weight: bold;
  .adt-line {
    width: 0.04rem;
    height: 0.16rem;
    background: rgba(247, 151, 39, 1);
    border-radius: 0.02rem;
    margin-right: 0.1rem;
  }

  .adt-line,
  .adt-title {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
  }

  .back {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    margin-left: 0.14rem;
    color: #f79727;
    font-weight: 400;
  }
}

.upload-desc {
  margin: 0.3rem 0 0.2rem 0;
  color: #888;
  text-align: center;
}

.content-wrap {
  padding: 0 0.4rem;

  .course-file-icon,
  .course-title {
    display: inline-block;
    vertical-align: middle;
    color: #333;
  }

  .course-file-icon {
    width: 0.17rem;
    margin-right: 0.14rem;
  }

  .course-title-wrap {
    cursor: pointer;
    padding: 0.2rem 0 0.17rem 0;
  }

  .courseware-content,
  .upload-content {
    height: 1.24rem;
    background: rgba(255, 255, 255, 1);
    border: 0.01rem solid rgba(228, 232, 237, 1);
    border-radius: 0.06rem;
    margin-bottom: 0.16rem;
    text-align: center;
    background:rgba(245,246,248,0.88);
  }

  .courseware-content {
    overflow: auto;
  }

  .course-list {
    display: flex;
    padding: 0 0.35rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    @include mix-text-overflow;

    .course-item {
      // flex: 1;
      margin-right: 0.3rem;
      margin-bottom: 0.2rem;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }

  .upload-btn {
    margin: 0.2rem auto;
    width: 1.1rem;
    height: 0.38rem;
    line-height: 0.38rem;
    background: rgba(247, 151, 39, 0.1);
    border-radius: 0.03rem;
    color: #f79727;
    text-align: center;
  }

  .upload-warn {
    color: #999;
    font-size: 12px;
  }
}

.submit-wrap {
  text-align: center;
  padding: 0.2rem 0;
  font-size: 0;
}

.submit,
.over-btn {
  width: 1.8rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 16px;
  color: #fff;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  vertical-align: middle;
}

.submit {
  background: linear-gradient(
    -90deg,
    rgba(255, 183, 38, 1),
    rgba(255, 129, 38, 1)
  );
}

.over-btn {
  border: 0.01rem solid rgba(221, 221, 221, 1);
  color: #999;
  margin-right: 0.2rem;
}

</style>
