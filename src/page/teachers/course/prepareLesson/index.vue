<template>
  <div class="fillcontain category" ref="category" v-show="visible">
    <section class="category-wrap">
      <div class="group-header-wrap">
        <div class="group-header clearfix">
          <div class="group-line is-inline"></div>
          <div class="group-title-1 is-inline">备课资料</div>
        </div>

        <div class="group-opeator clearfix">
          <!-- <div class="group-min is-inline"></div>
          <div class="group-max is-inline"></div>-->
          <div class="is-inline" @click="close">
            <i class="el-dialog__close el-icon el-icon-close group-close"></i>
          </div>
        </div>
      </div>
      <div class="lesson-content">
        <ul class="lesson-list">
          <li class="lesson-item" v-for="item in 20" :key="item">
            <div class="lesson-img">
              <img class="less-image" src="../../../../assets/images/img3.png" alt>
              <div class="img-hover" v-if="false">
                <div class="online-view">在线查看</div>
                <div class="click-download">点击下载</div>
              </div>
            </div>
            <div class="lesson-intro">
              <div class="lesson-title">课程名称课程名称</div>
              <div class="lesson-data">
                <img class="lesson-icon" src="../../../../assets/images/icon/43.png" alt>
                <span class="lesson-text">2019.01.01</span>
              </div>
              <div class="lesson-teacher">
                <img class="lesson-icon" src="../../../../assets/images/icon/44.png" alt>
                <span class="lesson-text">刘青云老师</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    showLesson: {
      type: Boolean,
      default: false
    },
    handleClose: {
      type: Function,
      default: () => {}
    },
    handleConfirm: {
      type: Function,
      default: () => {}
    },
    context: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      labelPosition: "left",
      visible: false,
      feedback: {
        type: "SG",
        title: "",
        content: ""
      }
    };
  },
  watch: {
    showLesson(newVal, oldVal) {
      this.visible = newVal;
      this.$emit("update:showLesson", newVal);
    }
  },
  created() {},
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    close() {
      this.visible = false;
      this.$emit("update:showLesson", false);
      this.handleClose && this.handleClose();
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: auto;

  .category-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 1100px;
    max-height: 584px;
    border-radius: 5px;
    z-index: 4445;
    animation: slide 0.5s ease-out;
    border-radius: 8px;

    .category-title {
      font-size: 18px;
      text-align: center;
      padding-bottom: 30px;
    }

    .close-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      font-size: 20px;
      color: #999;
      display: block;
      transition: all 0.5s ease;
      cursor: pointer;
    }
  }
}

.lesson-main-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding-left: 20px;
  height: 50px;
  line-height: 50px;
  position: relative;
  border-bottom: 1px solid #e4e8ed;
  margin-bottom: 10px;

  &:before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 10px;
    background: #f79727;
    border-radius: 3px;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 10px;
  }
}

.lesson-list {
  width: 100%;
  overflow: auto;
  margin-bottom: 30px;
  padding: 0 5px;
  box-sizing: border-box;
  max-height: 500px;
  padding-left: 20px;
}
.lesson-item {
  width: 190px;
  height: 240px;
  flex: 1;
  display: inline-block;
  margin: 10px 10px;
  border: 1px solid #e4e8ed;
  border-radius: 4px;
  cursor: pointer;

  .lesson-img {
    .less-image {
      width: 100%;
      height: 150px;
    }
  }
}

.lesson-intro {
  padding: 10px 0 0 12px;
  text-align: left;
  font-size: 16px;

  .lesson-title {
    font-weight: bold;
  }

  .lesson-title,
  .lesson-data,
  .lesson-teacher {
    padding-bottom: 10px;
    color: #666666;
    font-size: 14px;
  }

  .lesson-icon,
  .lesson-text {
    display: inline-block;
    vertical-align: middle;
  }

  .lesson-icon {
    width: 12px;
  }
}

.group-header-wrap {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #cccc;
  position: relative;
}

.group-header {
  padding-left: 30px;
}
.group-opeator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  padding: 12px 0;
  margin-right: 12px;
}

.is-inline {
  display: inline-block;
  vertical-align: middle;
}

.group-line {
  width: 4px;
  height: 16px;
  background: orange;
  display: inline-block;
  width: 3px;
  height: 10px;
  background: rgba(247, 151, 39, 1);
  border-radius: 3px;
}

.group-title-1 {
  font-size: 16px;
  font-weight: bold;
  padding: 0 8px 0 5px;
}

.group-title-2 {
  font-size: 14px;
  color: rgba(247, 151, 39, 1);
}

.group-min,
.group-max {
  width: 10px;
  height: 1px;
  border: 1px solid #000;
  box-sizing: border-box;
}

.group-min,
.group-max,
.group-close {
  vertical-align: middle;
}

.group-max {
  height: 10px;
  margin: 0 20px;
  margin-right: 30px;
}

.group-close {
  font-size: 18px;
  font-size: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}

@keyframes slide {
  from {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>


