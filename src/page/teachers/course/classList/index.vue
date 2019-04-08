<template>
  <div class="fillcontain category" ref="category" v-show="visible">
    <section class="category-wrap">
      <h2 class="lesson-main-title">
        <div class="class-title">
          <div class="class-title-left">班级列表</div>
          <div class="class-title-right">
            <input type="text" placeholder="搜索班级">
          </div>
        </div>
        <i class="el-icon-close close-icon" @click="close"></i>
      </h2>
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
              <div class="lesson-data">2019.01.01</div>
              <div class="lesson-teacher">刘青云老师</div>
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

  .category-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    // max-height: 80%;
    // min-width: 640px;
    max-width: 80%;
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
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-height: 400px;
  width: 100%;
  overflow: auto;
  margin-bottom: 30px;
  padding: 0 5px;
  box-sizing: border-box;
}
.lesson-item {
  width: 110px;
  height: 140px;
  flex: 1;
  display: inline-block;
  margin: 10px 5px;
  border: 1px solid #e4e8ed;
  border-radius: 4px;
  cursor: pointer;

  .lesson-img {
    .less-image {
      width: 100%;
      height: 75px;
    }
  }
}

.lesson-intro {
  padding: 5px;
  text-align: left;
  font-size: 12px;

  .lesson-title {
    font-weight: bold;
  }

  .lesson-title,
  .lesson-data {
    padding-bottom: 5px;
    color: #666666;
  }
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


