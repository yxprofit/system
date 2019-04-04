<template>
	<div class="upload" v-loading="loading">
    <el-dialog :visible.sync="state" width="662px" :before-close="handleClose">
			<div slot="title" class="uploadHead">
        <h3>上传作品</h3>
			</div>
      <div class="form-wraper">
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="作品完成日期：">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="作品名称：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="作品介绍：">
                <el-input type="textarea" v-model="form.desc" :rows="4" placeholder="用140字以内的描述来介绍你的作品"></el-input>
            </el-form-item>
            <el-form-item label="所属课程：">
              <el-select v-model="form.cat1" placeholder="请选择课程">
                  <el-option label="课程一" value="1"></el-option>
                  <el-option label="课程二" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="作品归属：">
                <el-select v-model="form.cat2" placeholder="请选择小组/个人作品">
                    <el-option label="小组" value="1"></el-option>
                    <el-option label="个人" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="粘贴URL链接：">
                <el-input v-model="form.url" placeholder="输入URL链接"></el-input>
            </el-form-item>
            <el-form-item label="文件上传：">
                <div class="uploadFile">
                    <span class="but"><img :src="icon_course_name"/><span class="text">点击上传</span></span>
                    <div class="picList">
                        <div class="upok">已上传文件</div>
                        <ul>
                            <li v-for="(item, index) in 5">
                                <img src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" />
                            </li>
                        </ul>
                    </div>
                    <div class="changeUpdate">点击上传</div>
                    <div class="text">支持PDF,word，图片格式，PPT，视频上传（500M以内）</div>
                    <!-- <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="form.fileList"
                        list-type="picture">
                        <span class="but"><img :src="icon_course_name" /><span class="text">点击上传</span></span>
                        <div slot="tip" class="upok">已上传文件</div>
                    </el-upload>
                    <div class="text">支持PDF,word，图片格式，PPT，视频上传（500M以内）</div> -->
                </div>
            </el-form-item>

            <el-form-item>
                <div class="uploadSubmit" @click="handleClose"><span>完成</span></div>
            </el-form-item>
        </el-form>
      </div>
    </el-dialog>
	</div>
</template>

<script>
import icon_course_name from 'assets/images/icon/icon_course_name.png'
export default {
    name: "upload",
    props:['state'],
	components: {
		
	},
	data() {
		return {
            icon_course_name,
            loading: true,
            form: {
                name: '',
                desc: '',
                date: null,
                cat1: "1",
                cat2: "1",
                url: '',
                // fileList: [{url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
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
            this.$emit('close');
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>

<style lang="scss" scoped>
.upload {
  .uploadHead {
    
    h3 {
        margin-left: 20px;
        font-size: 18px;
    }
  }

  .el-form {
    .el-form-item {
      margin-bottom: 14px;
      textarea {
        height: 122px;
      }
      .el-select {
        width: 100%;
      }
    }
  }

  .uploadFile {
    border:1px solid rgba(220,224,230,1);
    border-radius:2px;
    padding: 10px;
    .but {
      font-size: 12px;
      color: #333;
      height: 40px;
      line-height: 38px;
      box-sizing: border-box;
      background:rgba(245,246,248,1);
      border:1px dashed rgba(228,228,228,1);
      border-radius:3px;
      display: block;
      padding: 0 10px;
      text-align: center;
      img {width: 14px; margin-right: 10px;}
    }
    .but .text {
      display: inline-block;
      vertical-align: middle;
      color: #333;
      font-size: 12px;
      margin: 0;
    }

    .picList {
      padding: 15px 5px;
      font-size: 0;
      background:rgba(245,246,248,1);
      border: 1px dashed rgba(228,228,228,1);
      margin-top: 10px;
      .upok {
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 10px;
        color: #333;
        box-sizing: border-box;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      li {
        width: 56px;
        height: 56px;
        border: #F79727 1px solid;
        display: inline-block;
        img {
            width: 56px;
            height: 56px;
        }
      }
    }
    .picdes {
        li {
            width: 50%;
            height: auto;
            border:none;
            margin: 5px 0;
        }
    }
    .changeUpdate {
        width: 110px;
        color: #F79727;
        font-size: 14px;
        height: 38px;
        line-height: 38px;
        margin: 10px auto;
        background:rgba(247,151,39,.1);
        border-radius: 3px;
        text-align: center;
    }

    .upok {
      text-align: center;
    }

    .text {
      text-align: center;
      color: #999;
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 7px;
    }
  }

  .uploadSubmit {
    text-align: center;
    height: 40px;
    line-height: 40px;
    span {
      font-size: 15px;
      font-weight: bold;
      display: inline-block;
      height: 100%;
      width: 200px;
      cursor: pointer;
      background:rgba(247,151,39,1);
      border-radius:20px;
      color: #fff;
    }
  }
}
</style>

<style lang="scss">
.upload {
  .el-dialog__header {
    padding: 20px;
    height: 60px;
    border-bottom: #E4E8ED 1px solid;
  }
  .el-dialog {
    border-radius: 6px;
  }
  .el-dialog__body {
    padding: 22px 162px 20px 41px;
    .el-form {
      .el-form-item__label {
        color:#666;
        font-size: 15px;
      }
      .el-form-item:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
