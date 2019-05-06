<template>
  <div class="group">
    <div class="group-header-wrap">
      <div class="group-header clearfix">
        <div class="group-line is-inline"></div>
        <div class="group-title-1 is-inline">学习小组</div>
        <div class="group-title-2 is-inline">班级人数20人</div>
      </div>
    </div>

    <div class="group-content">
      <div class="group1-wrap">
        <div class="content-1 group-content-1">
          <div class="content-1-wrap group1--1-wrap" ref="listGroup">
            <draggable
              class="list-group list-group-1"
              :list="list1"
              @change="log"
              @start="start"
              @end="handleEnd"
              dragable="true"
              :move="getdata"
              :clone="clone"
              :group="{ name: 'people', pull: pullFunction }"
              :style="{ width: 1.4*Number(list1.length - 1) + 'rem' }"
            >
              <div class="list-group-item" v-for="(item, index) in list1" :key="index">
                <div class="group1-list-inner">
                  <img class="avatar-img" :src="item.avatar" alt>
                  <div class="avatar-name">{{ item.name }} {{ index }}</div>
                  <div class="icon-list">
                    <img class="icon-item" src="../../../../assets/images/teacher/g2.png" alt>
                    <img class="icon-item" src="../../../../assets/images/teacher/g3.png" alt>
                    <img class="icon-item" src="../../../../assets/images/teacher/g4.png" alt>
                  </div>
                </div>
              </div>
            </draggable>
          </div>
        </div>
        <div class="group1-prev" @click="handlePrev('.list-group', 'group1Index', -143, 'group1')">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div
          class="group1-next"
          @click="handleNext('.list-group', 'group1Index', -143, 'list1', 7, 'group1')"
        >
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <div class="group1-wrap group2-wrap">
        <div class="content-1">
          <div
            class="content-1-wrap content-group2-list"
            :style="{ width: 3.42*Number(list3.length + 1) + 'rem' }"
          >
            <div class="group-slide" v-for="(item, index) in  list3" :key="index">
              <div class="group-slide-innder">
                <div>
                  <div class="group-title">0{{index+1}}组</div>
                  <div class="group2-inner">
                    <draggable
                      class="list-group list-group2"
                      :id="'list-group2-' + index"
                      :list="list2[index]"
                      group="people"
                      @change="log1"
                      @start="start"
                      @end="handleEnd1"
                      dragable="true"
                      :move="getdata"
                      :clone="clone"
                    >
                      <div
                        class="avatar-list"
                        v-for="(gItem, gIndex) in list2[index]"
                        :key="gIndex"
                      >
                        <img class="avatar-img avatar-img2" :src="gItem.avatar" alt>
                        <div class="avatar-name">{{ gItem.name }}</div>
                        <div class="icon-list icon-list2">
                          <img
                            class="icon-item icon-item-2"
                            src="../../../../assets/images/teacher/g2.png"
                            alt
                          >
                          <img
                            class="icon-item icon-item-2"
                            src="../../../../assets/images/teacher/g3.png"
                            alt
                          >
                          <img
                            class="icon-item icon-item-2"
                            src="../../../../assets/images/teacher/g4.png"
                            alt
                          >
                        </div>
                      </div>
                    </draggable>
                  </div>
                </div>
              </div>
            </div>
            <div class="group-slide" ref="addSlide">
              <div class="add-btn">
                <i class="el-icon-plus"></i>
                <span class="add-text">添加小组</span>
              </div>
              <draggable class="addGroupDistrict" group="people"></draggable>
            </div>
          </div>
        </div>
        <div
          class="group1-prev"
          @click="handlePrev('.content-group2-list', 'group2Index', -328, 'group2')"
        >
          <i class="el-icon-arrow-left"></i>
        </div>
        <div
          class="group1-next"
          @click="handleNext('.content-group2-list', 'group2Index', -328,  'list3', 2, 'group2')"
        >
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="group-btn">
      <div class="submit base-btn">提交</div>
      <div class="reset base-btn" @click="resetGroup">重置</div>
    </div>
  </div>
</template>

<script>
/* 组件方式引用 */
import draggable from 'vuedraggable'
import avatar from '@/assets/images/teacher/g1.png'

const groupList = [
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  },
  {
    avatar: avatar,
    name: '欧阳娜娜'
  }
]
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
  data () {
    return {
      labelPosition: 'left',
      visible: false,
      feedback: {
        type: 'SG',
        title: '',
        content: ''
      },
      // 学员总人人数
      list1: JSON.parse(JSON.stringify(groupList)),
      // 每组人数
      list2: [],
      // 分组数组
      list3: [],
      list4: [],
      controlOnStart: true,
      group1Index: 0,
      group2Index: 0,
      timer: null,
      className: '',
      currentEle: {},
      currentLen: 0
    }
  },
  watch: {
    showLesson (newVal, oldVal) {
      this.visible = newVal
      this.$emit('update:showLesson', newVal)
    },
    list2 (newVal) {
      // console.log(newVal, "list2");
    }
  },
  created () {
    // Firefox中拖拽会新开页面的bug修复
    document.body.addEventListener('drop', (e) => {
      e.preventDefault()
      e.stopPropagation()
    })
  },
  methods: {
    // 重置分组
    resetGroup () {
      this.list1 = JSON.parse(JSON.stringify(groupList))
      let list2Len = JSON.parse(JSON.stringify(this.list2.length))
      console.log(list2Len)
      this.list2 = []
      this.list3 = []
      if (list2Len >= 2) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.handlePrev('.content-group2-list', 'group2Index', -328, 'group2')
        }, 100)
      }
    },
    pullFunction () {
      // console.log(this.controlOnStart, 'pullFunction')
      return this.controlOnStart ? 'clone' : true
    },
    start ({ originalEvent }) {
      console.log(originalEvent, 'start-originalEvent')
      this.controlOnStart = originalEvent.ctrlKey
    },
    getdata (evt) {
      // console.log(evt, 'evt')
      let className = evt.to.className
      if (className && className === 'addGroupDistrict') {
        this.$refs.addSlide.style.borderColor = 'red'
      }
    },
    handleEnd (e) {
      console.log(e.to.id, 'handleEnd')
      let className = e.to.className
      this.className = className
      this.$refs.addSlide.style.borderColor = '#fafbfd'
      if (this.className === 'addGroupDistrict') {
        this.className = ''
        this.list3.push({})
        this.list2[this.list3.length - 1] = [this.currentEle]
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.handleNext(
            '.content-group2-list',
            'group2Index',
            -328,
            'list3',
            2,
            'group2'
          )
        }, 100)
      }
    },
    handleEnd1 (e) {
      let className = e.to.className
      this.className = className
      this.$refs.addSlide.style.borderColor = '#fafbfd'
      if (this.className === 'addGroupDistrict') {
        this.className = ''
        this.list3.push({})
        this.list2[this.list3.length - 1] = [this.currentEle]
        for (var i = 0; i < this.list3.length; i++) {
          if (this.list2[i].length == 0) {
            this.list3.splice(i, 1)
            this.list2.splice(i, 1)
          }
        }
        // console.log(this.list2);
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.handleNext(
            '.content-group2-list',
            'group2Index',
            -328,
            'list3',
            2,
            'group2'
          )
        }, 100)
      }
    },
    handlePrev (el, listIndex, distance, type) {
      if (this[listIndex] <= 0) {
      } else {
        let ele = document.querySelector(el)
        if (type === 'group2') {
          this[listIndex]--
        } else {
          if (this[listIndex] <= 5) {
            this[listIndex] = 0
          } else {
            this[listIndex] -= 5
          }
        }
        // console.log(listIndex, this.list2)
        ele.style.transform = `translateX( ${distance *
          0.01 *
          this[listIndex]}rem)`
        ele.style.transition = 'all 0.5s ease'
      }
    },
    handleNext (el, listIndex, distance, list, baseIndex, type) {
      let ele = document.querySelector(el)
      if (this[listIndex] < this[list].length - baseIndex) {
        if (type == 'group2') {
          this[listIndex]++
        } else {
          if (this[list].length - this[listIndex] - baseIndex <= 5) {
            this[listIndex] += this[list].length - this[listIndex] - baseIndex
          } else {
            this[listIndex] += 5
          }
        }
        // console.log(this[listIndex], list)
        ele.style.transform = `translateX( ${distance *
          0.01 *
          this[listIndex]}rem)`
        ele.style.transition = 'all 0.5s ease'
      }
    },
    add: function () {
      // console.log('add')
      if (this.className !== 'addGroupDistrict') {
        this.list.push({ name: 'Juan' })
      }
    },
    replace: function () {
      // console.log('replace')
      this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      // console.log(el, 'clone')
      if (this.className !== 'addGroupDistrict') {
        return {
          name: el.name,
          avatar: el.avatar
        }
      }
    },
    log: function (evt) {
      console.log(evt, 'log')
      try {
        this.currentEle = Object.assign({}, evt.removed.element)
        console.log(this.currentEle)
        let originList3 = JSON.parse(JSON.stringify(this.list3))
        this.list3 = JSON.parse(
          JSON.stringify(this.list2.filter(item => item.length))
        )

        console.log(originList3, this.list3, 'list3')

        if (originList3.length !== this.list3.length) {
           clearTimeout(this.timer)
            this.timer = setTimeout(() => {
              this.handlePrev(
                '.content-group2-list',
                'group2Index',
                -328,
                'group2'
              )
            }, 100)
        }
      } catch (err) {}
    },
    log1: function (evt) {
      console.log(evt, 'log1')
      try {
        this.currentEle = Object.assign({}, evt.removed.element)

       let originList3 = JSON.parse(JSON.stringify(this.list3))
        this.list3 = JSON.parse(
          JSON.stringify(this.list2.filter(item => item.length))
        )

        console.log(originList3, this.list3, 'list3')

        for (var i = 0; i < this.list2.length; i++) {
          if (this.list2[i].length == 0) {
            this.list2.splice(i, 1)
          }
        }

        if (originList3.length !== this.list3.length) {
           clearTimeout(this.timer)
            this.timer = setTimeout(() => {
              this.handlePrev(
                '.content-group2-list',
                'group2Index',
                -328,
                'group2'
              )
            }, 100)
        }
      } catch (err) {}
    }
  },
  mounted () {},
  components: {
    draggable
  }
}
</script>

<style lang="scss" scoped>
@import '@~assets/css/mixins.scss';
.group {
  width: 11.5rem;
  height: 6.9rem;
  margin: 0 auto;
  background: #fff;
  border-radius: 0.05rem;

  .group-header-wrap {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 0.01rem solid #cccc;
    position: relative;
  }

  .group-header {
    padding-left: 0.3rem;
  }
  .group-opeator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.1rem;
    padding: 0.12rem 0;
    margin-right: 0.12rem;
  }

  .is-inline {
    display: inline-block;
    vertical-align: middle;
  }

  .group-line {
    width: 0.04rem;
    height: 0.16rem;
    background: orange;
    display: inline-block;
    width: 0.03rem;
    height: 0.1rem;
    background: rgba(247, 151, 39, 1);
    border-radius: 0.03rem;
  }

  .group-title-1 {
    font-size: 0.16rem;
    font-weight: bold;
    padding: 0 0.08rem 0 0.05rem;
  }

  .group-title-2 {
    font-size: 0.14rem;
    color: rgba(247, 151, 39, 1);
  }

  .group-min,
  .group-max {
    width: 0.1rem;
    height: 0.01rem;
    border: 0.01rem solid #000;
    box-sizing: border-box;
  }

  .group-min,
  .group-max,
  .group-close {
    vertical-align: middle;
  }

  .group-max {
    height: 0.1rem;
    margin: 0 0.2rem;
    margin-right: 0.3rem;
  }

  .group-close {
    position: absolute;
    top: 49%;
    transform: translateY(-50%);
    right: 0;
    width: 0.24rem;
    height: 0.24rem;
    text-align: center;
    line-height: 0.24rem;
    color: #fff;
    background: #f79727;
    border-radius: 100px;

    &:hover {
      color: #333;
    }
  }
}

.content-group2-list {
  margin-bottom: 0.05rem;
}

.group-content {
  padding-top: 0.2rem;
}

.content-1 {
  width: 9.9rem;
  margin: 0 auto;
  overflow-x: hidden;
  /*三角箭头的颜色*/
  // scrollbar-arrow-color: #f00;
  /*滚动条滑块按钮的颜色*/
  scrollbar-face-color: #f79727;
  /*滚动条整体颜色*/
  // scrollbar-highlight-color: #ccc;
  /*滚动条阴影*/
  scrollbar-shadow-color: #eee;
  /*滚动条轨道颜色*/
  scrollbar-track-color: #ccc;

  &::-webkit-scrollbar {
    /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
    width: 5px;
    height: 5px;
  }

  &::-ms-scrollbar {
    /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-button {
    /*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
    // background: #74d334;
  }
  &::-webkit-scrollbar-track {
    /*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
    // background: #ff66d5;
  }
  &::-webkit-scrollbar-track-piece {
    /*内层轨道，滚动条中间部分（位置4）*/
    background: #ccc;
  }
  &::-webkit-scrollbar-thumb {
    /*滚动条里面可以拖动的那部分（位置5）*/
    background: #ffa711;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-corner {
    /*边角（位置6）*/
    background: #82afff;
  }
  &::-webkit-scrollbar-resizer {
    /*定义右下角拖动块的样式（位置7）*/
    // background: #ff0bee;
  }

  .content-1-wrap {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .group1--1-wrap {
    overflow-x: hidden;
    /*三角箭头的颜色*/
    // scrollbar-arrow-color: #f00;
    /*滚动条滑块按钮的颜色*/
    scrollbar-face-color: #f79727;
    /*滚动条整体颜色*/
    // scrollbar-highlight-color: #ccc;
    /*滚动条阴影*/
    scrollbar-shadow-color: #eee;
    /*滚动条轨道颜色*/
    scrollbar-track-color: #ccc;

    &::-webkit-scrollbar {
      /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
      width: 5px;
      height: 5px;
    }

    &::-ms-scrollbar {
      /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-button {
      /*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
      // background: #74d334;
    }
    &::-webkit-scrollbar-track {
      /*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
      // background: #ff66d5;
    }
    &::-webkit-scrollbar-track-piece {
      /*内层轨道，滚动条中间部分（位置4）*/
      background: #ccc;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面可以拖动的那部分（位置5）*/
      background: #ffa711;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-corner {
      /*边角（位置6）*/
      background: #82afff;
    }
    &::-webkit-scrollbar-resizer {
      /*定义右下角拖动块的样式（位置7）*/
      // background: #ff0bee;
    }
  }
}

.group-content-1 {
  overflow: hidden;
}

.list-group-1 {
  min-width: 9.54rem;
  margin-bottom: 0.05rem;
  height: 1.46rem;
}

.list-group-item,
.group-slide {
  width: 1.3rem;
  height: 1.46rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  background: #fff;
  border: 0.01rem solid #e4e8ed;
  margin-right: 0.13rem;
  box-sizing: border-box;
  position: relative;
}

.list-group-item:hover {
  background: #fff3e5;
  border-color: #ffa711;
}

.icon-list {
  display: flex;
  justify-content: center;
  width: 100%;

  &.icon-list2 {
    height: 0.2rem;
  }
}

.group1-list-inner {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate3d(-50%, -50%, 0);
  margin-top: 0.15rem;
}

.add-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background: rgba(153, 153, 153, 0.1);
  border-radius: 0.2rem;
  font-size: 0.16rem;
  color: #bfbfbf;
}

.group1-wrap {
  width: 100%;
  position: relative;
}

.group2-wrap {
  height: 3.45rem;
}

.group1-prev,
.group1-next {
  width: 0.34rem;
  height: 0.34rem;
  background: #eee;
  border-radius: 0.34rem;
  text-align: center;
  line-height: 0.34rem;
  font-size: 0.18rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background: rgba(247, 151, 39, 1);
    color: #fff;
  }
}

.group1-prev {
  left: 0.2rem;
}

.group1-next {
  right: 0.2rem;
}

.group-slide {
  width: 3.2rem;
  height: 3.25rem;
  background: #fafbfd;
  margin-right: 0.12rem;
  margin-top: 0.2rem;
}

.group-title {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.16rem;
  font-weight: bold;
  background: rgba(255, 243, 229, 1);
}

.group-list {
  height: 2.15rem;
}

.avatar-list {
  display: inline-block;
  width: 25%;
  text-align: center;
  margin-bottom: 0.2rem;
  padding: 0.05rem 0;
  box-sizing: border-box;
}

.avatar-list:hover {
  background: #fff3e5;
  border: 0.01rem solid #ffa711;
}

.avatar-img {
  width: 0.5rem;
  height: 0.5rem;
  margin-bottom: 0.05rem;
  border-radius: 50%;
  overflow: hidden;
  &.avatar-img2 {
    margin-left: 0.08rem;
  }
}

.avatar-name {
  font-size: 0.14rem;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 0.26rem;
  @include mix-text-overflow;
}

.group2-inner {
  height: 2.7rem;
  overflow-y: scroll;
}

.list-group2 {
  // overflow-y: scroll;
  height: 2.9rem;
  text-align: left;
  white-space: pre-wrap;
  // padding-top: 0.2rem;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
}

.addGroupDistrict {
  width: 100%;
  height: 100%;
}

.group-btn {
  text-align: center;
  margin-top: 0.5rem;
}

.base-btn {
  display: inline-block;
  vertical-align: middle;
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 0.2rem;
}

.submit {
  background: rgba(247, 151, 39, 1);
  color: #fff;
  margin-right: 0.2rem;
}
.reset {
  border: 0.01rem solid #999;
  color: #ccc;
}

.icon-item {
  width: 0.22rem;
  margin-top: 0.1rem;
  margin-right: 0.05rem;
}

.icon-item-2 {
  width: 0.2rem;
  margin: 0 auto;
}
</style>
