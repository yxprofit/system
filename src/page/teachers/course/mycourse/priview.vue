<template>
  <el-dialog custom-class="priview_dialog" :visible.sync="is_show" width="11.9rem">
    <div class="dialog-title" slot="title">
      <span>预览学生效果</span>
    </div>
    <div class="course-detail">
      <!-- 左侧课程封面 -->
      <div class="course-img">
        <img src="../../../../assets/images/student/workimg.png">
      </div>
      <!-- 课程描述部分 -->
      <div class="course-desc">
        <h3>外交1对11英语课程 口语轻松说</h3>
        <div class="sub-desc">
          <p>外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC , 随时随地对话全球外教</p>
          <p>
            外教英语培训班 , 外教英语培训班 , 每天45分钟 , 随时纠正 , 学英语上TutorABC , 随时随地对话全球外教
            <span class="read-btn">查看详情</span>
          </p>
        </div>
        <div class="start-time">
          <p class="task-time">开始时间: 2019.01.01</p>
          <p class="task-time">结束时间: 2019.06.30</p>
        </div>
      </div>
    </div>
    <!-- 课程任务部分 -->
    <div class="course-task">
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="li nowork">
            <h4>第1课时：课时名称课时名称课时名称课时名称</h4>
            <div class="icon_no">
              <div>
                <i></i>
                <span>已禁用课件</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="li">
            <h4>相关任务</h4>
            <div class="tasks">
              <ul>
                <li>
                  <el-row>
                    <el-col :span="11">
                      <h5 class="common-li">完成当前课时测试内容</h5>
                    </el-col>
                    <el-col :span="7">
                      <small>截止时间：2019.03.11</small>
                    </el-col>
                    <el-col :span="6">
                      <span>去完成 ></span>
                    </el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="11">
                      <h5 class="common-li li2">完成当前课时问卷调查</h5>
                    </el-col>
                    <el-col :span="7">
                      <small>截止时间：2019.03.11</small>
                    </el-col>
                    <el-col :span="6">
                      <span>去完成 ></span>
                    </el-col>
                  </el-row>
                </li>
                <li>
                  <el-row>
                    <el-col :span="11">
                      <h5 class="common-li li3">完成作品上传</h5>
                    </el-col>
                    <el-col :span="7">
                      <small>截止时间：2019.03.11</small>
                    </el-col>
                    <el-col :span="6">
                      <span class="active">去完成</span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
              <div class="tasksall taskNoMore"></div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-for="(item, index) in computedData" :key="item.id">
        <el-col :span="12" class="workList-item">
          <div class="li">
            <h4>
              第{{index + 1}}课时：课时名称课时名称课时名称课时名称
              <!-- <i></i> -->
            </h4>
            <div class="workdes">
              <router-link tag="span" to="/courseware?type=teacherTask">课件名称课件名称课件名称课件名称01</router-link>
              <p>
                <span class="read-pdf">查看课件</span>
              </p>
            </div>
            <div class="myteam clearfix">
              <span class="i">我的小组</span>
              <span class="read right">查看></span>
            </div>
          </div>
        </el-col>
        <el-col :span="12" class="workList-item">
          <div class="li">
            <h4>相关任务</h4>
            <div class="tasks">
              <ul>
                <li v-for="(i, index) in item.taskListStr" :key="index">
                  <el-row>
                    <el-col :span="11">
                      <h5 :class="i.className">{{i.name}}</h5>
                    </el-col>
                    <el-col :span="7">
                      <small>截止时间：{{i.time}}</small>
                    </el-col>
                    <el-col :span="6">
                      <span v-text="i.status ? '已完成':'去完成 >'"></span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      is_show: true,
      computedData: [],
      data: [
        {
          id: 1,
          taskList: [
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0,
              className: "li1"
            },
            {
              name: "完成当前课时问卷调查",
              time: "2019.03.11",
              status: 0,
              className: "li2"
            },
            {
              name: "完成作品上传",
              time: "2019.03.11",
              status: 1,
              className: "li3"
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0,
              className: "li1"
            },
            {
              name: "完成当前课时问卷调查",
              time: "2019.03.11",
              status: 0,
              className: "li2"
            }
          ],
          taskListStr: []
        },
        {
          id: 2,
          taskList: [
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0,
              className: "li1"
            },
            {
              name: "完成当前课时问卷调查",
              time: "2019.03.11",
              status: 0,
              className: "li2"
            },
            {
              name: "完成作品上传",
              time: "2019.03.11",
              status: 1,
              className: "li3"
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0,
              className: "li1"
            },
            {
              name: "完成当前课时问卷调查",
              time: "2019.03.11",
              status: 0,
              className: "li2"
            }
          ],
          taskListStr: []
        },
        {
          id: 3,
          taskList: [
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 1
            }
          ],
          taskListStr: []
        },
        {
          id: 4,
          taskList: [
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 1
            }
          ],
          taskListStr: []
        },
        {
          id: 5,
          taskList: [
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 1
            }
          ],
          taskListStr: []
        },
        {
          id: 6,
          taskList: [
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 1
            }
          ],
          taskListStr: []
        },
        {
          id: 7,
          taskList: [
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 0
            },
            {
              name: "完成当前课时测试内容",
              time: "2019.03.11",
              status: 1
            }
          ],
          taskListStr: []
        }
      ]
    };
  },
  //   props: ["is_show"],
  created() {
    this.computedtaskList();
  },
  methods: {
    computedtaskList() {
      let data = this.data;
      for (let i = 0; i < data.length; i++) {
        if (data[i].taskList.length > 3) {
          data[i].showText = "查看全部";
          data[i].taskListStr = data[i].taskList.slice(0, 3);
        } else {
          data[i].taskListStr = data[i].taskList;
          data[i].showText = "";
        }
      }
      this.computedData = data;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .priview_dialog {
  .el-dialog__header {
    padding-bottom: 0.18rem;
    border-bottom: 1px solid #e4e8ed;
  }
  .dialog-title {
    span {
      font-size: 0.16rem;
      color: #333;
      font-weight: bold;
      padding-left: 0.1rem;
      border-left: 0.04rem solid #f79727;
      display: inline-block;
      height: 0.16rem;
    }
  }
  .el-dialog__body {
    padding-top: 0.14rem;
    height: 6.5rem;
    overflow: auto;
  }
  //   课程详情
  .course-detail {
    border: 1px solid #e4e8ed;
    padding: 0.21rem 0.26rem;
    display: flex;
    .course-img {
      margin-right: 0.26rem;
      img {
        width: 1.88rem;
        height: 1.98rem;
      }
    }
    // 课程介绍部分
    .course-desc {
      flex: 1;
      > h3 {
        color: #333;
        font-size: 0.2rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
      }
      .sub-desc {
        color: #888;
        font-size: 0.14rem;
        line-height: 0.24rem;
        .read-btn {
          color: #f79727;
          cursor: pointer;
        }
      }
      .start-time {
        margin-top: 0.2rem;
        background-color: #f2f5f7;
        padding: 0.15rem 0.12rem 0.03rem;
        > p {
          font-size: 0.13rem;
          text-indent: 0.14rem;
          position: relative;
          color: #333;
          margin-bottom: 0.18rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          &:before {
            content: "";
            display: block;
            position: absolute;
            width: 0.04rem;
            height: 0.04rem;
            background-color: #f79727;
            top: 0.03rem;
            left: 0;
          }
        }
      }
    }
  }
  //   课程任务
  .course-task {
    margin-top: 0.1rem;
    .nowork {
      border: 1px solid #e4e8ed;
      padding: 0.19rem 0.19rem 0.32rem 0.38rem;
      height: 1.87rem;
      position: relative;
      h4 {
        color: #333;
      }
      .icon_no {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 0.05rem;
        div {
          width: 0.75rem;
          margin: 0.7rem auto 0;
        }
        i {
          height: 0.46rem;
          width: 0.46rem;
          border: #ccc 0.03rem solid;
          border-radius: 100%;
          display: inline-block;
          position: relative;
          &:before {
            content: "";
            position: absolute;
            top: 52%;
            background: #ccc;
            width: 105%;
            height: 0.03rem;
            transform: rotate(-30deg);
          }
        }
        span {
          color: #ccc;
          font-weight: bold;
          display: block;
          margin: 0.1rem 0 0 -0.1rem;
        }
      }
      .nowork_myteam {
        margin-top: 1.35rem;
        position: relative;
        z-index: 100;
        .i {
          color: #666;
        }
      }
    }
    .li {
      margin: 0;
      background: #fff;
      border: 0.01rem solid #e4e8ed;
      border-radius: 0.05rem;
      padding: 0.15rem;
      margin-bottom: 0.1rem;
      > h4 {
        font-size: 0.16rem;
        color: #333333;
        text-indent: 0.15rem;
        position: relative;
        margin-bottom: 0.2rem;
        font-weight: bold;
        &:after {
          content: "";
          display: block;
          width: 0.05rem;
          height: 0.05rem;
          background-color: #f79727;
          border-radius: 100%;
          position: absolute;
          left: 0;
          top: 0.06rem;
        }
      }
      .tasks {
        border-top: #e4e8ed 0.01rem solid;
        margin: 0 -0.15rem;
        ul {
          margin: 0.1rem 0.1rem 0 0.1rem;
          li {
            padding: 0.1rem 0.2rem;
            cursor: pointer;
            .common-li,
            .li1,
            .li2,
            .li3 {
              height: 0.16rem;
              text-indent: 0.25rem;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOTMwNzRENTUwNzMxMUU5QjI1MTk5MkFGNjhCMjExMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOTMwNzRENjUwNzMxMUU5QjI1MTk5MkFGNjhCMjExMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5MzA3NEQzNTA3MzExRTlCMjUxOTkyQUY2OEIyMTEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5MzA3NEQ0NTA3MzExRTlCMjUxOTkyQUY2OEIyMTEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hRP+lwAAAWxJREFUeNqEUk2LglAU9ekLKlpF0aYSWkT9hHbWpg/6kVr0DySwiFq0FHfiyoISCq1dFJRoZ8aZmnljzVn5jufed869j4RhyL3Gfr+fz+fX67XRaFSrVTD0jXq3202nU0mSMpnMeDwOgqBWq9E3ak3TeJ5Pp9PZbLbf76uqSinlwjhALcvyer22bVtRFM/zQB4Oh8FgQGN9ozeciKIYMfDT6/VOp1MikSBM6EjdbDbL5fKDXK1Wy+WSENLpdCijnkwmrVarVCr95JPJJMK02+18Pv/MADUsbjYbJo/jOMPh0HXd6Mg91GC3222sOgr9LPB9H6MwDINRo55RAzws4kcqlbIsC/0evvG9WCyQMpfL/RoiimazmWma6DQajSJXSPK395el2+2GHV0uFxyiGl3XkT5W/WEJLTEsDO58PiM6lo/but0u6+QbBM/L/8TxeMRqK5VKsVjE1F+9MYqrC4VCvV6HThAE7j/cBRgAjg9yxhKnJzkAAAAASUVORK5CYII=)
                top left no-repeat;
              background-size: contain;
            }
            .li2 {
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NzA3MDhFOTUwNzMxMUU5OUU0QUVFQkQ1Q0M5NEU2OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NzA3MDhFQTUwNzMxMUU5OUU0QUVFQkQ1Q0M5NEU2OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3MDcwOEU3NTA3MzExRTk5RTRBRUVCRDVDQzk0RTY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ3MDcwOEU4NTA3MzExRTk5RTRBRUVCRDVDQzk0RTY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fBHV6gAAAV5JREFUeNqUUkuLglAUTr3YpFIUJLmqhWEQQUvJXYIQSNs2+QNbCbUQXLiMdu0C92W0VFDKXnOmO/iYkZg5i3u/8/gO3zn3Es/nc7VaHY/H0h9MEAQEF1RPJpNarfa+2vd9y7IQdliWrVar7wm32w1OsvRPQwm6XC6LxQJGyqYlSZJlOVEhimJKKJfLuq4/Ho8sgeM4UOK6bhRFrVZrPB6jbLrRaPzWbZomQRDNZtNxnMFggLK57XabSKrX691u1/M8iM9mM5Ik2+32er1OCdDmer3e73fsYsDzvKqqUP21n9eZEiiKGo1GPyR9vAxAHMebzabX6+VmCIIAEhhXKhVYC8ag07ZtYA6Hw5QA0eVyCdvALuxkOp1ivN/vT6eTYRigKjfDfD4vfKzz+cwwDE3TuRneWKfTSX7aNyEMQ4QKyKAbGkMqRwC58A0Le/f7fUVRDofDbrfTNA0inwIMAEOyg7t+vvmnAAAAAElFTkSuQmCC);
            }
            .li3 {
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MTZERDA0MTUwNzMxMUU5QTE3N0JENTI3MjcxOTNBQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MTZERDA0MjUwNzMxMUU5QTE3N0JENTI3MjcxOTNBQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxNkREMDNGNTA3MzExRTlBMTc3QkQ1MjcyNzE5M0FDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxNkREMDQwNTA3MzExRTlBMTc3QkQ1MjcyNzE5M0FDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+l1GyIgAAARlJREFUeNqUUrGORFAURTYaH6AQySYKzSYShUZEswqJxu/xC6LRScTQUZEoVUp0QhDs3mFizW52xpzi5d7zzsk994HGcZym6bIsyDNgGMZxHGIYxjAMXycAMtM0MahwHEdOAGQQ5G3vi6IIwxAKWZZpmv432F4FQfC5AopHmxwbiPfruu/7tm2P/E8kSZI8z4M7iARtXddRFFVVBdGnaWJZluf5O8P7im1OkiRZlgmCoKoqvCYMAcayrJsBdgd2s3Vd5/s+MLquEwSxkVCIokhRlOu6V53jOGVZzvOc57lt2yRJapq2q48RbhMYhrlcLk3TgFRRFDgfvNLV8LECOQcMRdFxHM9IQQaroq/+fOjfj/XEhryIbwEGAEkdrqAf7cZyAAAAAElFTkSuQmCC);
            }
            small {
              color: #888;
              font-size: 0.12rem;
            }
            .el-col-6 {
              text-align: right;
            }
          }
        }
      }
    }
    .workList-item {
      .workdes {
        background: #fff8f0;
        padding: 0.2rem;
        border-radius: 0.03rem;
        width: 100%;
        > p {
          font-size: 0.14rem;
          color: #999999;
          margin-top: 0.23rem;
          cursor: pointer;
        }
      }
      .myteam {
        margin-top: 0.1rem;
        span {
          font-size: 0.14rem;
          color: #666666;
          float: left;
          cursor: pointer;
          &.i {
            text-indent: 0.25rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAIAAACpTQvdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRTgxNzVBMTUwNzMxMUU5QTVGMEJBMURFRkJBNDgyMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRTgxNzVBMjUwNzMxMUU5QTVGMEJBMURFRkJBNDgyMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFFODE3NTlGNTA3MzExRTlBNUYwQkExREVGQkE0ODIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFFODE3NUEwNTA3MzExRTlBNUYwQkExREVGQkE0ODIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YtvelwAAAcNJREFUeNp8kbvLgXEUxz2PWy65pSySopSISa9kUnZKshkMRgNZDMpsNFjEgEFK2QyIMhmQcskf4FKSkFue98uDt7f38l2ec37P7/M753sOQVEU46X1ek2SpEQiabfb9Xp9uVxKpVKbzeZ0OplMJn2HoIHj8VgoFAaDgcPhuFwu4/HY6/WqVKrValUul1ksVjAYJAjiTlAPZbPZdDp9Pp/n83k4HN7v99RL4BOJRL/fp1MSzPV67Xa7Pp+PzWaPRiOTycTn89994nmLxTIcDun0DhwOB6BCofB5RJKM74KB2+32BYhEIrFYPJ1OEWu1Wjg5nU7v27iK+jqd7gnH43F85HJ5Lpfj8XhKpXKz2TSbTY1GIxAIttttPp+HN7fbTZt+TqnT6ZRKJQAfDyWTSWBI8ddqtbpcLi6X+zXWSqXS6/X8fr9arW40GtVq1W63m81mlIUx+mH4BH+PMZZoNIrSILGsWCyGfVE/lMlkisXivZ1UKtVqtRBhzaFQaLFYUL9pt9tFIhEMhgn7Ho8H5Wq1GnpAx4zfxOFwMG50Tur1eowVR7PZzGg0Mv6WwWCYTCasQCBA56irUCj+AWQyGTb4KcAA2uYQSPDBr6UAAAAASUVORK5CYII=)
              top left no-repeat;
          }
          &.read {
            float: right;
          }
        }
      }
    }
  }
}
</style>
