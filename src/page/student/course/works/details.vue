<template>
	<div class="details" v-loading="loading">
    <el-dialog class="details-dialog" :visible.sync="state" width="60%" :before-close="handleClose">
			<div slot="title" class="detailsHead">
        <div class="avatar"><img :src="head" /></div>
        <div class="name">
          <h3>课程作品文件名称课程作品文件名称.pdf</h3>
          <span class="time"><var>156.33kb</var><time>更新时间：2019.3.14 16:32</time></span>
        </div>
        <div class="but">
          <span class="action-btn"><img class="bimg40" :src="icon_40" /><span class="text">删除</span></span>
          <span class="action-btn"><img class="bimg39" :src="icon_39" /><span class="text">下载</span></span>
          <span class="action-btn"><img class="bimg42" :src="icon_42" /><span class="text">添加到成长档案</span></span>
        </div>
			</div>
			<div class="group">
        <div><img :src="details1" /></div>
        <div><img :src="details1" /></div>
        <div>课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称课程作品文件名称</div>
        <video controls>
            <source :src="movie1"  type="video/mp4">
        </video>
			</div>
    </el-dialog>
	</div>
</template>

<script>
import details1 from 'assets/images/details1.png'
import movie1 from 'assets/images/movie.mp4'
import head from 'assets/images/head.png'
import icon_39 from 'assets/images/icon/icon_39.png'
import icon_40 from 'assets/images/icon/icon_40.png'
import icon_42 from 'assets/images/icon/icon_42.png'

export default {
  name: "workDetails",
  props: {
    state: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
	data() {
		return {
      loading: true,
      details1,
      head,
      icon_39,
      icon_40,
      icon_42,
      movie1
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
        }
    }
};
</script>

<style lang="scss" scoped>
.details {
  img {width: auto;}
  .detailsHead {
    display: flex;
    margin-right: 30px;
    padding: 10px 0;
    border-right: 1px solid rgba(228, 232, 237, 1);
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      img { width: 40px; height: 40px; border-radius: 100%}
    }

    .name {
     flex: 1;
     font-size: 14px;
     margin-left: 10px;
     h3{color: #333; font-weight: bold; margin: 4px 0 7px 0;}
     span {
      color: #999;
      time {margin-left: 11px;}
     }
    }

    .but {
      flex: 1;
      text-align: right;
      height: 40px;
      line-height: 40px;
      .action-btn {
        display: inline-block;
        color: #666;
        font-size: 13px;
        cursor: pointer;
        vertical-align: middle;
        margin-right: 20px;
        .text {
          display: inline-block;
          vertical-align: middle;
        }
      }
      img {
        height: 20px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .bimg39 {width: 15px;}
      .bimg40 {width: 16px;}
      .bimg42 {width: 20px;}
    }
    .time {
      font-size: 13px;
      color: #999;
    }
  }

  .group {
    overflow-x: scroll;
    max-height: 600px;
    margin-top: -30px;
    margin-bottom: -30px;
    text-align: center;
    padding-bottom: 20px;
    border-left:1px solid rgba(228,232,237,1);
    border-right:1px solid rgba(228,232,237,1);

    video{
        width: 80%;
    }
  }
  
}
</style>
<style lang="scss">
.details {
  .el-dialog__header {
    position: relative;
    padding: 0 20px;
    border-bottom: #E4E8ED 1px solid;
    .el-dialog__headerbtn {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .details-dialog .el-dialog__body {
    padding: 30px 50px;
  }
}
</style>
