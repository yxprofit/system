<template>
  <div class="courseware" v-loading="loading">
    <div class="taskleft">
      <div class="backclass" @click="goback">< 返回课程</div>
      <div class="step">
        <div class="stepimg" v-if="page === 1">
          <img :src="material">
        </div>
        <div class="stepimg" v-if="page === 2">
          <img :src="details1">
        </div>
      </div>
      <div class="stepbut">
        <button class="pre" :class="{'active':page === 1}" @click="page = 1">上一页</button>
        <span class="pages">
          <var>{{page}}</var>/2
        </span>
        <button class="next" :class="{'active':page === 2}" @click="page = 2">下一页</button>
      </div>
      <div class="allprint" @click="screenF">
        <img :src="allprint">
        {{fullShow ? '退出全屏' : '全屏' }}
      </div>
    </div>
    <hgroup :class="{'active':isHidden}">
      <div>
        <p>本课时任务</p>
      </div>
      <ul class="task">
        <li
          v-for="(item, index) in $route.query.type === 'teacherTask' ? teacherTask : studentTask"
          :key="index"
        >
          <h4 :class="'icon-' + item.type">
            <b>{{ item.name }}</b>
            <span
              :class="item.type"
              v-if="item.btn"
              @click="handleTaskList(item.type)"
            >{{ item.btn }}</span>
          </h4>
        </li>
      </ul>
      <ul class="operation" v-if="$route.query.type === 'teacherTask'">
        <li class="edit">
          <span>
            <i class="el-icon-check"></i>保存修改
          </span>
        </li>
        <li class="add" @click="addworks">
          <span>
            <i class="el-icon-plus"></i>添加任务
          </span>
        </li>
      </ul>
      <img
        :class="['bottom',{'hidden':isHidden}]"
        @click="changeIsHidden"
        src="../../assets/images/icon/icon_open.png"
        alt
      >
    </hgroup>

    <popup-modal v-model="isShowSaveTask">
<<<<<<< HEAD
      <save-task @taskClose="handleTaskClose"></save-task>
=======
      <save-task @confirmDel='confirmDel'></save-task>
>>>>>>> 4db64cc55f6c5d0bcb2d145d67f2db60631afcbc
    </popup-modal>
    <delete-work :state='isdelete' @close='handleClose'></delete-work>
    <add-works :state='addwork' @close='addworkClose' @handleJump='jump'></add-works>
    <teacher-editor :state='editor' @close='editorClose'></teacher-editor>
  </div>
</template>

<script>
import screenfull from "screenfull";
import material from "assets/images/student/material.png";
import details1 from "assets/images/details1.png";
import allprint from "assets/images/allprint.png";
import PopupModal from '@/components/popup';
import SaveTask from "@/page/teachers/course/saveTask";
import DeleteWork from "@/page/teachers/course/deleteWork/deleteWork";
import AddWorks from "@/page/teachers/course/addworks/addWorkTypes";
import TeacherEditor from "@/page/ueditor/ueditor";


export default {
  name: "tasks",
  data() {
    return {
      editor:false,
      addwork:false,
      isdelete:false,
      loading: true,
      material,
      details1,
      allprint,
      fullShow: false,
      page: 1,
      isHidden: false,
      isShowSaveTask: false,
      teacherTask: [
        {
          name: "课件任务名称",
          btn: "查看结果",
          type: "course"
        },
        {
          name: "测试任务名称",
          btn: "",
          type: "test"
        },
        {
          name: "问卷任务名称",
          btn: "删除",
          type: "questionnaire"
        },
        {
          name: "作品上传",
          btn: "删除",
          type: "works"
        },
        {
          name: "优势打卡",
          btn: "删除",
          type: "clock"
        }
      ],
      studentTask: [
        {
          name: "课件任务名称",
          btn: "去完成",
          type: "course"
        },
        {
          name: "测试任务名称",
          btn: "去完成",
          type: "test"
        },
        {
          name: "问卷任务名称",
          btn: "已完成",
          type: "questionnaire"
        },
        {
          name: "作品上传",
          btn: "已完成",
          type: "works"
        },
        {
          name: "优势打卡任务名称",
          btn: "已完成",
          type: "clock"
        }
      ]
    };
  },
  created() {
    let _this = this;
    setTimeout(() => {
      _this.loading = false;
    }, 1000);
  },
  methods: {
    handleTaskClose (bool)  {
      this.isShowSaveTask = bool;
    },
    handleTaskList(type) {
      let queryType = this.$route.query.type;
      if (queryType === 'teacherTask') {
        if (type === 'works') {
          this.isShowSaveTask = !this.isShowSaveTask;
        }
      }
    },
    goback() {
      screenfull.exit();
      this.$router.go(-1);
    },
    screenF() {
      this.fullShow = !this.fullShow;
      screenfull.toggle();
    },
    changeIsHidden() {
      this.isHidden = !this.isHidden;
    },
    handleClose(){
      this.isdelete = false
    },
    confirmDel(){
      this.isdelete = true
    },
    addworkClose(){
      this.addwork = false
    },
    addworks(){
      this.addwork = true
    },
    editorClose(){
      this.editor = false
    },
    jump(){
      this.editor = true
      this.addwork = false
    }
  },
  components: {
    PopupModal,
    SaveTask,
    DeleteWork,
    AddWorks,
    TeacherEditor
  }
};
</script>

<style lang="scss" scoped>
.courseware {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(228, 232, 237, 1);
  border-radius: 6px;
  padding: 5px 10px;
  display: flex;
  height: 100vh;
  position: relative;
  .taskleft {
    position: relative;
    flex: 1;
  }
  .step {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(228, 232, 237, 1);
    border-radius: 6px;
    margin: 15px;
    height: 94%;
    .stepimg {
      // width: 992px;
      text-align: center;
      img {
        width: auto;
        max-height: 600px;
      }
    }
  }
  .stepbut {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    button {
      margin: 0 20px;
      cursor: pointer;
      width: 170px;
      height: 44px;
      border-radius: 4px;
      font-size: 16px;
      border: 1px solid rgba(0, 0, 0, 1);
      background: linear-gradient(
        -90deg,
        rgba(255, 183, 38, 1),
        rgba(255, 129, 38, 1)
      );
      border: none;
      color: #fff;
    }
    .active {
      background: transparent;
      border: rgba(255, 129, 38, 1) 1px solid;
      color: #ff8126;
    }
    .pages {
      font-size: 12px;
      color: #666;
      var {
        color: #f79727;
      }
    }
  }
  .backclass {
    color: #666666;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
  }
  .allprint {
    color: #666;
    font-size: 18px;
    position: absolute;
    right: 30px;
    bottom: 30px;
    z-index: 10;
    cursor: pointer;
    img {
      width: auto;
      margin-right: 10px;
    }
  }
}
hgroup {
  flex: 1;
  max-width: 275px;
  width: 275px;
  min-height: 700px;
  padding-bottom: 50px;
  float: right;
  border-left: 1px solid rgba(228, 232, 237, 1);
  transition: width 0.3s;
  background-color: #fff;
  position: relative;
  & > div {
    padding: 0 20px;
    height: 70px;
    line-height: 70px;
    background-image: url("../../assets/images/task_bg.png");
    display: flex;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    p {
      width: 100%;
      text-align: center;
    }
  }
  & > ul > li {
    padding: 15px 14px 0 16px;
    h4 {
      height: 16px;
      line-height: 16px;
      font-weight: 600;
      text-indent: 26px;
      background-size: 16px 16px;
      margin-bottom: 15px;
      background-position: 0 0;
      background-repeat: no-repeat;
      &.icon-course {
        background-image: url("../../assets/images/icon/icon_course_name.png");
      }
      &.icon-test {
        background-image: url("../../assets/images/icon/icon_course_content.png");
      }
      &.icon-questionnaire {
        background-size: 14px 16px;
        background-image: url("../../assets/images/icon/icon_course_look.png");
      }
      &.icon-works {
        background-size: 16px 14px;
        background-position: 1px 0;
        background-image: url("../../assets/images/icon/icon_course_completed.png");
      }
      &.icon-clock {
        background-image: url("../../assets/images/icon/icon_clock.png");
      }
    }
    div {
      background-color: #f2f5f7;
      padding: 15px 12px 3px;
      p {
        display: block;
        font-size: 12px;
        line-height: 12px;
        text-indent: 16px;
        position: relative;
        color: #888;
        margin-bottom: 11px;
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #c2c8cc;
          top: 3px;
          left: 0;
        }
      }
    }
  }
  &.active {
    max-width: 103px;
    width: 103px;
    padding-bottom: 0;
    // margin-top: 28px;
    background-color: transparent;
    // border: none;
    & > div {
      padding: 0;
      width: 100%;
      height: 70px;
      font-size: 14px;
      text-align: center;
      span:nth-child(2) {
        display: none;
      }
    }
    ul {
      li {
        position: relative;
        &::before {
          position: absolute;
          content: "";
          width: 6px;
          height: 6px;
          background: rgba(39, 137, 247, 1);
          background: rgba(204, 204, 204, 1);
          border-radius: 50%;
          top: 60%;
          right: 29px;
        }
        b,
        span {
          display: none;
        }
      }
    }
    .operation {
      display: none;
    }
    .bottom {
      display: block;
    }
  }
  .task {
    b {
      font-weight: 700;
    }
    span {
      float: right;
      border: 1px solid #ccc;
      border-radius: 4px;
      color: #ccc;
      font-weight: normal;
      text-indent: 0;
      display: inline-block;
      padding: 3px 10px;
      font-size: 12px;
      cursor: pointer;
      &.active {
        border: 1px solid #f79727;
        color: #f79727;
      }
    }
  }
  .operation {
    position: absolute;
    bottom: 20px;
    left: 50px;
    span {
      border: 2px solid rgba(187, 187, 187, 1);
      border-radius: 22px;
      color: #999;
      font-size: 16px;
      padding: 10px 20px;
      display: inline-block;
    }
    i {
      margin-right: 10px;
    }
    .edit {
      span {
        border: 2px solid rgba(247, 151, 39, 1);
        color: #f79727;
      }
    }
    .add {
    }
  }
  // .bottom {
  //   margin: 56px auto;
  //   width: 22px;
  //   height: 14px;
  //   // transform:rotate(180deg);
  // }
  .bottom {
    margin: 56px 0 0 21px;
    width: 22px;
    height: 14px;
    &.hidden {
      margin: 56px auto;
      transform: rotate(180deg);
    }
  }
}
</style>
