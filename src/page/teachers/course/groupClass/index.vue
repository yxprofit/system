<template>
  <div class="group">
    <div class="group-header-wrap">
      <div class="group-header clearfix">
        <div class="group-line is-inline"></div>
        <div class="group-title-1 is-inline">学习小组</div>
        <div class="group-title-2 is-inline">班级人数20人</div>
      </div>

      <div class="group-opeator clearfix">
        <div class="group-min is-inline"></div>
        <div class="group-max is-inline"></div>
        <div class="group-close is-inline" @click="closeModal">
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </div>
      </div>
    </div>

    <div class="group-content">
      <draggable class="list-group" :list="list1" group="people" @change="log"></draggable>
      <draggable class="list-group" :list="list2" group="people" @change="log"></draggable>
    </div>
  </div>
</template>

<script>
/*组件方式引用*/
// import "swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";
import draggable from "vuedraggable";
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
      },
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  watch: {
    showLesson(newVal, oldVal) {
      this.visible = newVal;
      this.$emit("update:showLesson", newVal);
    }
  },
  created() {},
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
    closeModal() {
      this.$emit("closeModal", false);
    }
  },
  mounted() {},
  components: {
    swiper,
    swiperSlide,
    draggable
  }
};
</script>

<style lang="scss" scoped>
.group {
  width: 1100px;
  height: 620px;

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
    margin: 0 10px;
    margin-right: 20px;
  }

  .group-close {
    font-size: 18px;
    font-size: 18px;
    position: absolute;
    top: 49%;
    transform: translateY(-50%);
    right: 0;
  }
}
</style>


