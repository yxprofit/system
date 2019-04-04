<template>
  <div class="container-tends">
    <div class="tendsHead">
      <section>
        <h2>课堂作品</h2>
        <div class="teandsearch">
        <el-input placeholder="姓名检索" prefix-icon="el-icon-search" class="teandsearchInput"></el-input>
        <a>搜索</a>
        </div>
      </section>
      <div class="head">
        <h3>当前课时：<span>课时1名称</span></h3>
        <div>
          <el-select class="search" v-model="value" placeholder="课时">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select class="search"  v-model="value" placeholder="课程筛选">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select class="search"  v-model="value" placeholder="作品分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select class="search"  v-model="value" placeholder="班级筛选">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="serachNum">共找到相关作品：<span>978件</span></div>
    <waterfall :col='col' :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore"  v-loading="loading">
      <template >
        <div class="cell-item" v-for="(item,index) in data" :key="index">
          <div>
            <div class="taskimg">
              <img :src="item.img" />
            </div>
            <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="task-name">{{item.user}}</div>
              <div class="name">课时1：课时名称</div>
              <div class="dianzan">
                <div class="head">
                  <span><img src="../../../../assets/images/head.png" alt=""></span>
                  <span class="tname">余周周</span>
                </div>
                <div class="good">
                  <span>6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
    <button  @click="loadmore">查看更多</button>

  </div>
</template>

<script>
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

	},
  data () {
    return {
      icon_39,
      icon_40,
      icon_42,
      icon_task_close,
      data: [],
      loading: true,
      col: 3,
      value: '课程3',
      options: [{
        value: '选项1',
        label: '课程1'
      }, {
        value: '选项2',
        label: '课程2'
      }, {
        value: '选项3',
        label: '课程3'
      }, {
        value: '选项4',
        label: '课程4'
      }, {
        value: '选项5',
        label: '课程5'
      }]
    }
  },
  // components: {
  //   waterfall
  // },
  created () {
    setTimeout(() => {
      this.loading = false
      this.loadmore()
      this.loadmore()
    }, 1000)
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
          title: '作品名称作品名称.jpg',
          avatar: '33',
          user: '任务名称：完成课时测试',
          liked: '12'
        },
        {
          img: pic2,
          title: 'wewq',
          avatar: '33',
          user: '任务名称：完成课时测试,复习先下功课完成测试',
          liked: '12'
        },
        {
          img: pic3,
          title: '33333',
          avatar: '33',
          user: '任务名称：完成课时测试,复习先下功课完成测试',
          liked: '12'
        },
        {
          img: pic4,
          title: 'wewq',
          avatar: '33',
          user: '任务名称：完成课时测试,复习先下功课完成测试',
          liked: '12'
        },
        {
          img: pic5,
          title: '33333',
          avatar: '33',
          user: '任务名称：完成课时测试,复习先下功课完成测试',
          liked: '12'
        },
        {
          img: pic6,
          title: '33333',
          avatar: '33',
          user: '任务名称：完成课时测试,复习先下功课完成测试',
          liked: '12'
        },
        {
          img: pic8,
          title: '33333',
          avatar: '33',
          user: '任务名称：完成课时测试,复习先下功课完成测试',
          liked: '12'
        }
      ]
      this.data = this.data.concat(arr)
    }
  },
}
</script>

<style lang="scss" scoped>
.container-tends{
  box-sizing: border-box;
  padding-bottom: 30px;
  height: 100%;
  overflow: auto;
  .tendsHead {
    background-color: #fff;
    border-radius: 6px 6px 0 0;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
  section {
    display: flex;
    margin-right: 10px;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #E4E8ED;
    h2{
      flex: 1;
      display: block;
      height: 20px;
      text-indent: 40px;
      position: relative;
      font-size: 18px;
      font-weight: 600;
      &:after{
        content: '';
        position: absolute;
        width: 18px;
        height: 20px;
        top: 25px;
        left: 8px;
        background-image: url('../../../../assets/images/icon/icon_mycourse.png');
      }
    }
    .teandsearch {
      .teandsearchInput {
        float: left;
        width:242px;
        input.el-input__inner {
          width:242px;
          height:400px;
          background:rgba(238,242,245,1);
          border-radius:10px;
        }
      }
      a {
        float: left;
        width: 70px;
        height: 40px;
        cursor: pointer;
        line-height: 40px;
        margin-top: 15px;
        margin-left: 15px;
        color: #fff;
        text-align: center;
        border-radius: 20px;
        background-color: #F79727;
      }
    }
  }
  .head{
    height: 58px;
    line-height: 58px;
    display: flex;
    margin-right: 10px;
    h3{
      color: #888;
      flex: 1;
      span{
        color:#333;
        font-weight: 600;
      }
    }
    .search {
      width: 150px;
    }
    img {border-radius: 100%}
    .tname {margin-left: 5px}
  }
  &>button {
    display: block;
    width: 120px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 17px;
    margin: 20px auto 0;
    color: #999;
    font-size: 13px;
    font-family: '微软雅黑';
    cursor: pointer;
  }
  .cell-item {
    padding-right: 10px;
    margin-bottom: 10px;
    .item-body{
      padding: 11px;
      background: #fff;
      border-radius: 5px;
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
        .head{
          float: 1;
          display: flex;
          span:nth-child(1){
            display: inline-block;
            width: 30px;
            border-radius: 50%;
            overflow: hidden;
          }
        }
        .good {
          position: absolute;
          right: 0px;
          bottom: 20px;
          span {
            position: relative;
            text-indent: 25px;
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
      }
    }
  }
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
  border-radius:4px;
  border:1px solid rgba(228,232,237,1)
}
.serachNum {
  background:rgba(255,255,255,1);
  border:1px solid rgba(228,232,237,1);
  border-radius:6px;
  font-size: 14px;
  color: #333;
  margin: 15px 0;
  padding: 20px;
  font-weight: bold;
  span {
    color: #F79727;
    font-weight: normal;
  }
}
</style>
