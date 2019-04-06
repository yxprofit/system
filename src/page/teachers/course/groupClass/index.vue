<template>
  <div class="group">
    <div class="group-header-wrap">
      <div class="group-header clearfix">
        <div class="group-line is-inline"></div>
        <div class="group-title-1 is-inline">学习小组</div>
        <div class="group-title-2 is-inline">班级人数20人</div>
      </div>

      <div class="group-opeator clearfix">
        <!-- <div class="group-min is-inline"></div>
        <div class="group-max is-inline"></div>-->
        <div class="group-close is-inline" @click="closeModal">
          <i class="el-dialog__close el-icon el-icon-close"></i>
        </div>
      </div>
    </div>

    <div class="group-content">
      <div class="group1-wrap">
        <div class="content-1">
          <div class="content-1-wrap" ref="listGroup">
            <draggable class="list-group" :list="list1" group="people" @change="log">
              <div class="list-group-item" v-for="(element, index) in list1" :key="element.name">
                <img class="avatar-img" src="../../../../assets/images/logo.png" alt>
                <div class="avatar-name">欧阳娜娜 {{ index }}</div>
              </div>
            </draggable>
          </div>
        </div>
        <div class="group1-prev" @click="handlePrev">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="group1-next" @click="handleNext">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <div class="group1-wrap group2-wrap">
        <div class="content-1">
          <div class="content-1-wrap">
            <div class="group-slide" v-for="item in  2" :key="item">
              <div class="group-slide-innder">
                <div class="group-title">09级2班 01组</div>
                <div class="group2-inner">
                  <draggable
                    class="list-group list-group2"
                    :list="list2"
                    group="people"
                    @change="log"
                  >
                    <div class="avatar-list" v-for="(element, index) in list2" :key="element.name">
                      <img class="avatar-img" src="../../../../assets/images/logo.png" alt>
                      <div class="avatar-name">欧阳娜娜</div>
                    </div>
                  </draggable>
                </div>
              </div>
            </div>

            <div class="group-slide">
              <div class="add-btn">
                <i class="el-icon-plus"></i>
                <span class="add-text">添加小组</span>
              </div>
            </div>
          </div>
        </div>
        <div class="group1-prev">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="group1-next">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="group-btn">
      <div class="submit base-btn">提交</div>
      <div class="reset base-btn">重置</div>
    </div>
  </div>
</template>

<script>
/*组件方式引用*/
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
        { name: "John1", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
        { name: "Juan1", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
        { name: "Juan", id: 8 },
        { name: "Edgard1", id: 9 },
        { name: "Johnson0", id: 10 }
      ],
      list2: [
        { name: "Juan2", id: 11 },
        { name: "Edgard2", id: 12 },
        { name: "Johnson1", id: 13 },
        { name: "Johnson2", id: 14 },
        { name: "Johnson3", id: 15 },
        { name: "Johnson4", id: 16 },
        { name: "Johnson5", id: 17 },
        { name: "Johnson6", id: 18 },
        { name: "Johnson7", id: 19 },
        { name: "Johnson8", id: 20 }
      ],
      list3: [
        { name: "Juan3", id: 8 },
        { name: "Edgard3", id: 9 },
        { name: "Johnson9", id: 10 }
      ],
      group1Index: 0,
      group2Index: 0
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
    handlePrev() {
      console.log(1111);
      if (this.group1Index <= 0) {
      } else {
        this.group1Index--;
        this.list1.splice(this.group1Index, 1)
        var list = JSON.parse(JSON.stringify(this.list1));
        var current = list.splice(this.group1Index, 0);
        list.push(current)
        console.log(list, 'list')
        console.log(this.group1Index)
      }
    },
    handleNext() {
      if (this.group1Index <= this.list1.length - 1) {
        this.group1Index++;
        var list = JSON.parse(JSON.stringify(this.list1));
        console.log(this.group1Index)
        var current = this.list1[this.group1Index - 1]
        this.list1.splice(this.group1Index, 1)
        // this.list1.unshift(current)
      }
    },
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
    margin: 0 20px;
    margin-right: 30px;
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

.group-content {
  padding-top: 20px;
}

.content-1 {
  width: 954px;
  margin: 0 auto;
  overflow-x: scroll;

  .content-1-wrap {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }
}

.list-group-item,
.group-slide {
  width: 126px;
  height: 146px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  background: #fff;
  border: 1px solid #e4e8ed;
  margin-right: 12px;
  box-sizing: border-box;
  position: relative;
}

.add-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: rgba(153, 153, 153, 0.1);
  border-radius: 20px;
  font-size: 16px;
  color: #bfbfbf;
}

.group1-wrap {
  width: 100%;
  position: relative;
}

.group2-wrap {
  height: 265px;
}

.group1-prev,
.group1-next {
  width: 34px;
  height: 34px;
  background: #eee;
  border-radius: 34px;
  text-align: center;
  line-height: 34px;
  font-size: 18px;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.group1-prev {
  left: 20px;
}

.group1-next {
  right: 20px;
}

.group-slide {
  width: 310px;
  height: 265px;
  background: #fafbfd;
  margin-right: 12px;
  margin-top: 20px;
}

.group-title {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
  background: rgba(255, 243, 229, 1);
}

.group-list {
  height: 215px;
}

.avatar-list {
  display: inline-block;
  width: 25%;
  text-align: center;
}

.avatar-img {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.avatar-name {
  font-size: 14px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 26px;
}

.group2-inner {
  height: 215px;
}

.list-group2 {
  overflow-y: scroll;
  height: 215px;
  text-align: left;
  white-space: pre-wrap;
}

.group-btn {
  text-align: center;
  margin-top: 50px;
}

.base-btn {
  display: inline-block;
  vertical-align: middle;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
}

.submit {
  background: rgba(247, 151, 39, 1);
  color: #fff;
  margin-right: 20px;
}

.reset {
  border: 1px solid #999;
  color: #ccc;
}
</style>


