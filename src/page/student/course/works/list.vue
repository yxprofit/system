<template>
  <div class="container-tends">
    <div class="tendsHead">
      <section>
        <h2>课堂作品</h2>
        <div class="teandsearch">
          <a class="upload" @click="changeUpload"><img :src="icon_task_close" />上传作品</a>
        </div>
      </section>
      <div class="head">
        <h3>当前课时：<span>课时1名称</span></h3>
        <div class="search-panel">
          <el-select
            class="search"
            v-model="classHoure"
            placeholder="课时"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in classHoureOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
            class="search"
            v-model="course"
            placeholder="课程筛选"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in courseOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
            class="search"
            v-model="works"
            placeholder="作品分类"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in worksOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
            class="search"
            v-model="classes"
            placeholder="班级筛选"
            clearable
            @change="handleConditionChange">
            <el-option
              v-for="item in classesOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="waterfall-wraper">   
      <waterfall :col='col' :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  v-loading="loading">
        <template >
          <div class="cell-item" v-for="(item,index) in data" :key="index">
            <div>
              <div class="taskimg">
                <img :src="item.img" />
                <div class="but">
                  <el-tooltip effect="dark" @click="deleteHandler(item)" content="删除" placement="top">
                    <i><img :src="icon_40" /></i>
                  </el-tooltip>
                  <el-tooltip effect="dark" content="下载" placement="top">
                    <i @click="changedetails(item)"><img :src="icon_39" /></i>
                  </el-tooltip>
                  <el-tooltip effect="dark" content="添加" placement="top">
                    <i><img class="add" :src="icon_42" /></i>
                  </el-tooltip>
                </div>
              </div>
              <div class="item-body" @click="changedetails(item)">
                <div class="item-desc">{{item.worksTitle}}</div>
                <div class="task-name">{{item.jobTitle ? '任务名称： ' + item.jobTitle : ''}}</div>
                <div class="name">课时1：课时名称</div>
                <div class="dianzan">
                  <div class="dianzan-head">
                    <span><img src="../../../../assets/images/head.png" alt=""></span>
                    <span class="tname">余周周</span>
                  </div>
                  <div class="good" :class="{'is-zan':item.isZan}">
                    <span>6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </waterfall>
    </div>
    <button class="more-btn" @click="loadmore">查看更多</button>

    <!--  -->
    <work-details :info="itemInfo" :state="detailsShow" v-on:close="changedetails" />
    <upload :state="uploadShow" v-on:close="changeUpload" />

  </div>
</template>

<script>
import WorkDetails from './details.vue'
import Upload from './upload.vue'
import pic1 from 'assets/images/pic1.png'
import pic2 from 'assets/images/pic2.png'
import pic3 from 'assets/images/pic3.png'
import pic4 from 'assets/images/pic4.png'
import pic5 from 'assets/images/pic5.png'
import pic6 from 'assets/images/pic6.png'
import pic8 from 'assets/images/pic8.png'
import icon_39 from 'assets/images/icon/icon_39.png'
import icon_40 from 'assets/images/icon/icon_40.png'
import icon_42 from 'assets/images/icon/icon_42.png'
import icon_task_close from 'assets/images/icon/icon_task_close.png'

export default{
	components: {
    WorkDetails,
    Upload
	},
  data () {
    return {
      itemInfo: {},
      icon_39,
      icon_40,
      icon_42,
      icon_task_close,
      detailsShow: false,
      uploadShow: false,
      data: [],
      loading: true,
      col: 3,
      classHoure: '',
      course: '',
      works: '',
      classes: '',
      classHoureOptions: [],
      courseOptions: [],
      worksOptions: [],
      classesOptions: []
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
      this.loadmore()
    }, 1000)
    this.getSearchOptions()
  },
  computed: {
    itemWidth () {
      return (138 * 0.5 * (document.documentElement.clientWidth / 375))
    },
    gutterWidth () {
      return (9 * 0.5 * (document.documentElement.clientWidth / 375))
    }
  },
  methods: {
    handleConditionChange() {
      let data = {
        classHoure: this.classHoure,
        course: this.course,
        works: this.works,
        classes: this.classes
      }
      // 发送请求筛选Lists

    },
    getSearchOptions() {
      // 发送请求获取搜索框选项
      setTimeout(()=>{
        this.classHoureOptions = [{
          value: '1',
          label: '课时1'
        }, {
          value: '2',
          label: '课时2'
        }]
        this.courseOptions = [{
          value: '1',
          label: '课程1'
        }, {
          value: '2',
          label: '课程2'
        }]
        this.worksOptions = [{
           value: '1',
          label: '作品1'
        }, {
          value: '2',
          label: '作品2'
        }]
        this.classesOptions=[{
          value: '1',
          label: '班级1'
        }, {
          value: '2',
          label: '班级1'
        }]
      }, 100)
    },
    mix () {
      this.$waterfall.mix()
    },
    switchCol (col) {
      this.col = col
    },
    loadmore (index) {
      let arr = [
        {
          img: pic1,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试',
          liked: '12',
          isZan: true,
          id: 1111
        },
        {
          img: pic2,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: '12',
          isZan: false,
          id: 1112
        },
        {
          img: pic3,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: '12',
          isZan: true,
          id: 1113
        },
        {
          img: pic4,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '33',
          liked: '12',
          isZan: false,
          id: 1114
        },
        {
          img: pic5,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: '12',
          isZan: false,
          id: 1115
        },
        {
          img: pic6,
          worksTitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: '12',
          isZan: false,
          id: 1116
        },
        {
          img: pic8,
          worksitle: '作品名称作品名称.jpg',
          avatar: '33',
          jobTitle: '完成课时测试,复习先下功课完成测试',
          liked: '12',
          isZan: false,
          id: 1117
        }
      ]
      this.data = this.data.concat(arr)
    },
    changedetails(data){
      this.itemInfo = data;
      this.detailsShow = !this.detailsShow;
    },
    changeUpload(){
      this.uploadShow = !this.uploadShow;
    }
  },
}
</script>

<style lang="scss" scoped>
.container-tends{
  .tendsHead {
    background-color: #fff;
    border-radius: 6px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 10px;
    margin-top: 20px;
    padding: 12px 20px 14px;
    margin-right: 14px;
    border:1px solid rgba(228,232,237,1);
  }
  section {
    display: flex;
    height: 51px;
    line-height: 50px;
    border-bottom: 1px solid #E4E8ED;
    h2{
      flex: 1;
      display: block;
      height: 40px;
      line-height: 40px;
      text-indent: 40px;
      position: relative;
      font-size: 18px;
      font-weight: bold;
      color: #333;
      &:after{
        content: '';
        position: absolute;
        width: 18px;
        height: 20px;
        top: 11px;
        left: 10px;
        background-image: url('../../../../assets/images/icon/icon_mycourse.png');
      }
    }
    .teandsearch {
      width: 137px;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      box-sizing: border-box;
      background-color: #F79727;
      padding: 0 20px;
      margin-right: 20px;
      .el-input {
        float: left;
        width:242px;
        input.el-input__inner {
          width:242px;
          height:40px;
          background:rgba(238,242,245,1);
          border-radius:10px;
        }
      }
      a {
        float: left;
        height: 40px;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }
      .upload {
        img {
          width: 22px;
          height: 22px;
          transform: rotate(-90deg);
          margin-right: 10px;
        }
      }
    }
  }
  .head{
    height: 32px;
    line-height: 32px;
    display: flex;
    align-items: center;
    font-size: 0;
    margin-top: 13px;
    h3{
      color: #888;
      flex: 1;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      text-indent: 10px;
      span{
        color:#333;
        font-weight: bold;
      }
    }
    .search {
      width: 150px;
      height: 32px;
    }
    img {border-radius: 100%}
    .tname {margin-left: 8px}
  }
  &>button {
    display: block;
    width: 120px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 17px;
    margin-top: 20px;
    color: #999;
    font-size: 13px;
    font-family: '微软雅黑';
    cursor: pointer;
  }
  .cell-item {
    padding-right: 10px;
    margin-bottom: 14px;
    .item-body{
      padding: 16px;
      background: #fff;
      border-radius: 4px;
      .item-desc{
        font-size: 13px;
        line-height: 14px;
        margin-bottom: 10px;
      }
      .task-name{
        font-size: 13px;
        color:#999;
        margin-bottom: 10px;
      }
      .name {
        background-color: rgba(153,153,153,.1);
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        font-weight:bold;
        color: rgba(153,153,153,1);
        margin-bottom: 10px;
      }
      .dianzan{
        display: flex;
        position: relative;
        .dianzan-head{
          float: 1;
          display: flex;
          span:nth-child(1){
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
          }
          .tname {
            display: inline-block;
            line-height: 30px;
            margin-left: 8px;
            font-size: 12px;
          }
        }
        .good {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          
          span {
            position: relative;
            text-indent: 27px;
            display: inline-block;
            color: #999;
            font-size: 12px;
            &:after {
              content: '';
              position: absolute;
              width: 16px;
              height: 16px;
              top: -2px;
              left: 0;
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTJGRjhGMjU1MzcxMUU5QUU2OUVDQjlGOTkzNEQ3QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QTJGRjhGMzU1MzcxMUU5QUU2OUVDQjlGOTkzNEQ3QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMkZGOEYwNTUzNzExRTlBRTY5RUNCOUY5OTM0RDdBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBMkZGOEYxNTUzNzExRTlBRTY5RUNCOUY5OTM0RDdBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+tjw++AAAANlJREFUeNqUkUsPRTAQhZV6LDxC0p3/4P+v7e1FbCywk8hFxKMOTUTEvbfOojnT9utMZwjnXHlSlmV1XUdR5LrudV9VvqhpmnEc0zS97T8Dy7J0XQfTtq0UUJYlGBh+6A/Q932e58IbhkEI+QUMw5AkyTzPIvQ873aBoBvTNME5jhOGYRzH+Ot5bNv2lUHHaFEU67oisCwLwPU29Dl0hlVVqbquK9LCoyqlVB5A2e8A/OddSb7vv8hgmuZeknyGIAj2wclnYIztADolYk3TsGIUwtyEkQlgE2AAwPpTUmAwyA0AAAAASUVORK5CYII=);
            }
          }
        }
        .good.is-zan {
          span:after {

          }
        }
      }
    }
  }
}

.search-panel {
  margin-right: 20px;
  .el-select + .el-select {
    margin-left: 10px;
  }
}
.waterfall-wraper {
  width: calc(100% - 10px);
}
.vue-waterfall-column {
  img{
    width: 100%;
  }
  &:nth-child(5n){
    .cell-item {
      padding-right: 0;
    }
  }
}
.cell-item>div{
  overflow: hidden;
  border-radius:4px;
  border:1px solid rgba(228,232,237,1)
}

.taskimg {
  position: relative;
  .but {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    display: none;
    img {width: 20px}
    .add {
      width: 26px;
    }
    i {
      background: #fff;
      width: 58px;
      height: 58px;
      line-height: 58px;
      text-align: center;
      border-radius: 100%;
      display: inline-block;
      margin: 0 10px;
    }
  }
  &:hover {
    .but {
      display: block;
    }
  }
}

.more-btn {
  background-color: #EEF2F5!important;
}
</style>
