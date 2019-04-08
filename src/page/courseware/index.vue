<template>
  <div class="courseware" v-loading="loading">
    <div class="taskleft">
      <div class="backclass" v-if="$route.query.type !== 'teacherTask'" @click="goback">< 返回课程</div>
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
        <div class="allprint" @click="screenF">
          <img :src="allprint">
          <span>{{fullShow ? '退出全屏' : '全屏' }}</span>
        </div>
      </div>
    </div>
    <hgroup :class="{'active':isHidden}">
      <div>
        <p>本课时任务</p>
      </div>
      <ul class="task">
        <li
          class="task-item"
          v-for="(item, index) in $route.query.type === 'teacherTask' ? teacherTask : ($route.query.type === 'classTask' ? classTask: studentTask)"
          :key="index"
        >
          <h4 :class="'icon-' + item.type">
            <b class="task-item__title">{{ item.name }}</b>
            <span
              :class="[item.type, {'hidden':isHidden}]"
              class="task-item__btn"
              v-if="item.btn"
              @click="handleTaskList(item.type)"
            >{{ item.btn }}</span>
          </h4>
        </li>
      </ul>
      <img
        :class="['bottom',{'hidden':isHidden}]"
        @click="changeIsHidden"
        src="../../assets/images/icon/icon_open.png"
        alt
      >
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

    </hgroup>

    <popup-modal v-model="isShowSaveTask">
      <save-task @taskClose="handleTaskClose"  @confirmDel='confirmDel'></save-task>
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
        ],
        classTask: [
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
            btn: "查看结果",
            type: "questionnaire"
          },
          {
            name: "作品上传",
            btn: "查看结果",
            type: "works"
          },
          {
            name: "优势打卡",
            btn: "查看结果",
            type: "clock"
          }
        ]
      };
    },
    computed: {
      showCloseIcon() {
        let queryType = this.$route.query.type;
        if (queryType === 'teacherTask') {
          return false;
        } else {
          return true;
        }
      }
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
    background: #EEF2F5;
    border: 0.01rem solid rgba(228, 232, 237, 1);
    border-radius: 0.06rem;
    padding: 0.2rem 0 0.2rem 0.2rem;
    display: flex;
    height: 100vh;
    position: relative;
  .taskleft {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.06rem;
    padding: 0.2rem;
    margin-right: 0.12rem;
  }
  .step {
    background: rgba(255, 255, 255, 1);
    border: 0.01rem solid rgba(228, 232, 237, 1);
    border-radius: 0.06rem;
    flex: 1;
  .stepimg {
  // width: 9.92rem;
    text-align: center;
  img {
    width: auto;
    max-height: 6rem;
  }
  }
  }
  .stepbut {
    margin: 0 auto;
    text-align: center;
    margin-top: 0.19rem;
  button {
    margin: 0 0.2rem;
    cursor: pointer;
    width: 1.7rem;
    height: 0.44rem;
    border-radius: 0.04rem;
    font-size: 0.16rem;
    border: 0.01rem solid rgba(0, 0, 0, 1);
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
    border: rgba(255, 129, 38, 1) 0.01rem solid;
    color: #ff8126;
  }
  .pages {
    font-size: 0.12rem;
    color: #666;
  var {
    color: #f79727;
  }
  }
  }
  .backclass {
    color: #666666;
    font-size: 0.16rem;
    line-height: 0.16rem;
    height: 0.16rem;
    cursor: pointer;
    margin-bottom: 0.18rem;
  }
  .allprint {
    color: #666;
    font-size: 0;
    position: absolute;
    right: 0.2rem;
    bottom: 0.3rem;
    z-index: 10;
    height: 0.2rem;
    line-height: 0.2rem;
    cursor: pointer;
  img {
    width: 0.2rem;
    margin-right: 0.1rem;
    vertical-align: middle;
  }
  span {
    font-size: 0.18rem;
    display: inline-block;
    vertical-align: middle;
  }
  }
  }
  hgroup.has-btn {
    display: flex;
    flex-direction: column;
    .task {
      flex: 1;
    }
  }
  hgroup {
    flex: 1;
    max-width: 2.75rem;
    width: 2.75rem;
    min-height: 7rem;
    padding-bottom: 0.2rem;
    float: right;
    border-left: 0.01rem solid rgba(228, 232, 237, 1);
    transition: width 0.3s;
    background-color: #fff;
    position: relative;
  /*padding-bottom: 2.05rem;*/
  & > div {
        padding: 0 0.2rem;
        height: 0.7rem;
        line-height: 0.7rem;
        background-image: url("../../assets/images/task_bg.png");
        display: flex;
        font-size: 0.18rem;
        color: #fff;
        font-weight: 600;
  p {
    width: 100%;
    text-align: center;
  }
  }
  & > ul > li.task-item {
        padding: 0.2rem 0.1rem 0 0.2rem;
  h4 {
    height: 0.3rem;
    line-height: 0.3rem;
    font-weight: 600;
    text-indent: 0.26rem;
    background-size: 0.16rem 0.16rem;
    background-position: 0 0;
    background-repeat: no-repeat;
    position: relative;
  &:after {
     content: '';
     position: absolute;
     left: 0;
     top: 50%;
     transform: translateY(-50%);
     height: 0.16rem ;
     width: 0.16rem;
   }
  &.icon-course:after {
     background-image: url("../../assets/images/icon/icon_course_name.png");
   }
  &.icon-test:after {
     /*background-image: url("../../assets/images/icon/icon_course_content.png");*/
     background-image: url("../../assets/images/icon/icon_course_edit.png");
   }
  &.icon-questionnaire:after {
     content: '';
     background-size: 0.14rem 0.16rem;
     /*background-image: url("../../assets/images/icon/icon_course_look.png");*/
     background-image: url("../../assets/images/icon/icon_course_question.png");
   }
  &.icon-works:after {
     background-size: 0.16rem 0.14rem;
     background-position: 0.01rem 0;
     /*background-image: url("../../assets/images/icon/icon_course_completed.png");*/
     background-image: url("../../assets/images/icon/icon_course_pic.png");
   }
  &.icon-clock:after {
     /*background-image: url("../../assets/images/icon/icon_clock.png");*/
     background-image: url("../../assets/images/icon/icon_course_check.png");
   }
  }
  div {
    background-color: #f2f5f7;
    padding: 0.15rem 0.12rem 0.03rem;
  p {
    display: block;
    font-size: 0.12rem;
    line-height: 0.12rem;
    text-indent: 0.16rem;
    position: relative;
    color: #888;
    margin-bottom: 0.11rem;
  &:after {
     content: "";
     display: block;
     position: absolute;
     width: 0.04rem;
     height: 0.04rem;
     background-color: #c2c8cc;
     top: 0.03rem;
     left: 0;
   }
  }
  }
  }
  &.active {
     max-width: 1.03rem;
     width: 1.03rem;
     padding-bottom: 0;
   // margin-top: 0.28rem;
     background-color: #fff;
   // border: none;
  & > div {
        padding: 0;
        width: 100%;
        height: 0.7rem;
        font-size: 0.14rem;
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
     width: 0.06rem;
     height: 0.06rem;
     background: rgba(39, 137, 247, 1);
     background: rgba(204, 204, 204, 1);
     border-radius: 50%;
     top: 60%;
     right: 0.29rem;
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
  .has-btn.task {

  }
  .task {
    overflow: auto;
    margin-right: 0.1rem;
    max-height: calc(100vh - 1.4rem);
  b {
    font-weight: 700;
  }
  .task-item__title:hover {
    color: #f79727;
  }
  .task-item__btn.hidden {
    display: none;
  }
  span.task-item__btn {
    float: right;
    border: 0.01rem solid #ccc;
    border-radius: 0.04rem;
    color: #ccc;
    font-weight: normal;
    text-indent: 0;
    display: inline-block;
    padding: 0.06rem 0.14rem;
    font-size: 0.12rem;
    line-height: 0.12rem;
    margin-top: 0.02rem;
    cursor: pointer;
  &.active {
     border: 0.01rem solid #f79727;
     color: #f79727;
   }
  &:hover {
     border-color: #f79727;
     color: #f79727;
   }
  }
  }
  .operation {
    margin-bottom: 0.5rem;
    margin-top: 1.3rem;
    text-align: center;
  span {
    font-size: 0.16rem;
    line-height: 0.42rem;
    display: inline-block;
  }
  i {
    margin-right: 0.1rem;
  }
  .edit,
  .add {
    width: 1.7rem;
    height: 0.44rem;
    box-sizing: border-box;
    border: 0.01rem solid rgba(187, 187, 187, 1);
    border-radius: 0.22rem;
    line-height: 0.42rem;
    text-align: center;
    margin-left: 0.54rem;;
    color: #999;
    cursor: pointer;
  }
  .edit {
    border-color: rgba(247, 151, 39, 1);
    color: #f79727;
    margin-bottom: 0.14rem;
  }
  .add {
  }
  }
  // .bottom {
     //   margin: 0.56rem auto;
     //   width: 0.22rem;
     //   height: 0.14rem;
     //   // transform:rotate(180deg);
     // }
  .bottom {
    margin: 0.56rem 0 0 0.21rem;
    width: 0.22rem;
    height: 0.14rem;
  &.hidden {
     transform: rotate(180deg);
   }
  }
  }
</style>
