<template>
  <div class="trends">
    <section>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="我收到的任务" name="1">
          <span slot="label" class="nav_img_1">
            <img :src="activeName==='1'?t10:t9" alt>我收到的任务
          </span>
          <div class="search-panel">
            <el-select
              class="search"
              v-model="type"
              clearable
              placeholder="类型筛选"
              @change="handleConditionChange"
            >
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              class="search"
              v-model="status"
              clearable
              placeholder="状态筛选"
              @change="handleConditionChange"
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              class="search"
              clearable
              v-model="timer"
              placeholder="周期筛选"
              @change="handleConditionChange"
            >
              <el-option
                v-for="item in timerOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <div class="search-box">
              <input type="text" placeholder="发起人搜索" v-model="teacher">
              <i class="el-icon-search"></i>
            </div>
          </div>
          <!-- <el-scrollbar style="height:100%;" tag="div" class="table-wrap"> -->
            <div class="table-wrap">

            <el-table
              :data="tableData1"
              style="width: 100%"
              row-class-name="tableRow"
            >
              <el-table-column label="任务类型" sortable align="center" width="180">
                <template slot-scope="scope">
                  <div @click="todoType(scope.row)">
                    <img :src="scope.row.icon" alt class="icon">
                    <span style="margin-left: 0.1rem">{{ scope.row.type }}</span>
                    <p class="look">查看明细 ></p>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="任务名称" sortable align="center" width="180"></el-table-column>
              <el-table-column prop="date" label="任务周期" sortable align="center"></el-table-column>
              <el-table-column prop="todoStatus" label="完成状态" sortable align="center"></el-table-column>
              <el-table-column prop="taskStatus" label="发起人" align="center"></el-table-column>
              <el-table-column prop="pancel" label="操作" align="center">
                <template slot-scope="scope">
                  <p @click="todo(scope.row)">{{ scope.row.pancel }}</p>
                </template>
              </el-table-column>
            </el-table>
            </div>
          <!-- </el-scrollbar> -->
        </el-tab-pane>

        <el-tab-pane label="我发起的任务" name="2">
          <span slot="label" class="nav_img_2">
            <img :src="activeName==='2'?t7:t6" alt>我发起的任务
          </span>
          <div class="search-panel">
            <el-select
              class="search"
              v-model="type"
              clearable
              placeholder="类型筛选"
              @change="handleConditionChange"
            >
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              class="search"
              v-model="status"
              clearable
              placeholder="状态筛选"
              @change="handleConditionChange"
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              class="search"
              clearable
              v-model="timer"
              placeholder="周期筛选"
              @change="handleConditionChange"
            >
              <el-option
                v-for="item in timerOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <button @click="addWorks">
              <i>+</i>&nbsp;添加任务
            </button>
          </div>
          <!-- <el-scrollbar style="height:100%;" tag="div" class="table-wrap"> -->
            <div class="table-wrap">
            <el-table
              :data="tableData2"
              style="width: 100%"
              row-class-name="tableRow"
            >
              <el-table-column label="任务类型" sortable align="center" width="180">
                <template slot-scope="scope">
                  <div @click="todoType(scope.row)">
                    <img :src="scope.row.icon" alt class="icon">
                    <span style="margin-left: 0.1rem">{{ scope.row.type }}</span>
                    <p class="look">查看明细 ></p>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="任务名称" sortable align="center" width="180"></el-table-column>
              <el-table-column prop="date" label="任务周期" sortable align="center"></el-table-column>
              <el-table-column prop="todoStatus" label="完成状态" sortable align="center"></el-table-column>
              <el-table-column prop="taskStatus" label="任务状态" align="center"></el-table-column>
              <el-table-column prop="pancel" label="操作" align="center"></el-table-column>
            </el-table>

            </div>
          <!-- </el-scrollbar> -->
        </el-tab-pane>
      </el-tabs>
    </section>

    <!-- 任务弹窗区域 -->

    <!-- 我的优势打卡 -->
    <prediction-task :state.sync="isShowTask"></prediction-task>

    <!-- 优势打卡状态 -->
    <punch-card :state='isShowPanchCard' :status='punchStatus' @close='parentClose' @showActivity='handleActivityShow'></punch-card>

    <!-- 我的活动 -->
    <activity-name :state='isShowActivity' @close='parentClose'></activity-name>

    <!-- 添加任务弹框 -->
    <add-works :state='isShowAddWork' @close='parentClose' @handleJump='handleJump'></add-works>
    <Ueditor :state='isShowEditor' @close='parentClose'></Ueditor>

    <!-- 测试弹窗组件区域 -->
    <!-- <my-advantage :state="isShowAdvantage"></my-advantage> -->
    <!-- <courseware-upload :state.sync="isShowAdvantage"></courseware-upload> -->
    <!-- <no-select :state.sync="isShowAdvantage"></no-select> -->
    <!-- <invitation-success :state.sync="isShowAdvantage"></invitation-success> -->
    <!-- <invitation-comments :state.sync="isShowAdvantage"></invitation-comments> -->
    <!-- <invitation-comments :state.sync="isShowAdvantage"></invitation-comments> -->

  </div>
</template>

<script>
import t1 from '@/assets/images/icon/t1.png'
import t2 from '@/assets/images/icon/t2.png'
import t3 from '@/assets/images/icon/t3.png'
import t4 from '@/assets/images/icon/t4.png'
import t5 from '@/assets/images/icon/t5.png'
import t6 from '@/assets/images/icon/t6.png'
import t7 from '@/assets/images/icon/t7.png'
import t8 from '@/assets/images/icon/t8.png'
import t9 from '@/assets/images/icon/t9.png'
import t10 from '@/assets/images/icon/t10.png'
import t11 from '@/assets/images/icon/t11.png'
import PredictionTask from '../prediction'
import PunchCard from '@/components/advantagePunchCard'
import ActivityName from '@/components/activityName'
import AddWorks from '../addworks/addWorkTypes'
import Ueditor from '@/page/ueditor/ueditor'
// import MyAdvantage from '@/components/myAdvantageModal'
// import CoursewareUpload from '@/components/coursewareUpload'
// import NoSelect from '@/components/notSelectTag'
// import InvitationSuccess from '@/components/invitationSuccess'
// import InvitationComments from '@/components/invitationComments'
export default {
  name: 'Trends',
  data () {
    return {
      isShowAddWork: false,
      isShowEditor: false,
      isShowActivity: false,
      isShowPanchCard: false,
      isShowAdvantage: false,
      punchStatus: '1',
      teacher: '',
      activeName: '1',
      type: '',
      status: '',
      timer: '',
      t1,
      t2,
      t3,
      t4,
      t5,
      t6,
      t7,
      t8,
      t9,
      t10,
      t11,
      typeOptions: [
        {
          value: '1',
          label: '问卷'
        },
        {
          value: '2',
          label: '测试'
        },
        {
          value: '3',
          label: '优势打卡'
        },
        {
          value: '4',
          label: '上传作品'
        }
      ],
      statusOptions: [
        {
          value: '1',
          label: '未完成'
        },
        {
          value: '2',
          label: '已完成'
        }
      ],
      timerOptions: [
        {
          value: '1',
          label: '3-7天'
        },
        {
          value: '2',
          label: '7-30天'
        },
        {
          value: '3',
          label: '1月-3月'
        },
        {
          value: '4',
          label: '1月-3月'
        }
      ],
      // id=> 1 :问卷 2：测试 3：优势打卡 4：上传作品 5图文
      tableData1: [
        {
          date: '2019/03/05-2019/05/08',
          name: '成长档案',
          type: '问卷',
          todoStatus: '已完成',
          taskStatus: '余老师',
          pancel: '去查看 >',
          icon: t4,
          id: 1
        },
        {
          date: '2019/03/13-2019/06/28',
          name: '随堂测试',
          type: '测试',
          todoStatus: '已完成',
          taskStatus: '余老师',
          pancel: '去完成 >',
          icon: t1,
          id: 2
        },
        {
          date: '2019/03/05-2019/07/30',
          name: '阶段考试',
          type: '优势打卡',
          todoStatus: '未完成',
          taskStatus: '开放',
          pancel: '去查看 >',
          icon: t5,
          id: 3,
          status: '1'
        },
        {
          date: '2019/03/05-2019/07/30',
          name: '阶段考试',
          type: '优势打卡',
          todoStatus: '已完成',
          taskStatus: '开放',
          pancel: '去查看 >',
          icon: t5,
          id: 3,
          status: '3'
        },
        {
          date: '2019/03/05-2019/05/08',
          name: '优势打卡',
          type: '上传作品',
          todoStatus: '已完成',
          taskStatus: '余老师',
          pancel: '去查看 >',
          icon: t2,
          id: 4
        },
        {
          date: '2019/03/13-2019/06/28',
          name: '优势打卡',
          type: '图文',
          todoStatus: '未完成',
          taskStatus: '开放',
          pancel: '去查看 >',
          icon: t3,
          id: 5
        }
      ],
      tableData2: [
        {
          date: '2019/03/05-2019/05/08',
          name: '成长档案',
          type: '问卷',
          todoStatus: '已完成',
          taskStatus: '已关闭',
          pancel: '删除',
          icon: t4,
          id: 1
        },
        {
          date: '2019/03/13-2019/06/28',
          name: '随堂测试',
          type: '测试',
          todoStatus: '已完成',
          taskStatus: '已关闭',
          pancel: '删除',
          icon: t1,
          id: 2
        },
        {
          date: '2019/03/05-2019/07/30',
          name: '阶段考试',
          type: '优势打卡',
          todoStatus: '未完成',
          taskStatus: '开放',
          pancel: '删除',
          icon: t5,
          id: 3,
          status: '1'
        },
        {
          date: '2019/03/05-2019/07/30',
          name: '阶段考试',
          type: '优势打卡',
          todoStatus: '已完成',
          taskStatus: '开放',
          pancel: '删除',
          icon: t5,
          id: 3,
          status: '3'
        },
        {
          date: '2019/03/05-2019/05/08',
          name: '优势打卡',
          type: '上传作品',
          todoStatus: '已完成',
          taskStatus: '已关闭',
          pancel: '删除',
          icon: t2,
          id: 4
        },
        {
          date: '2019/03/13-2019/06/28',
          name: '优势打卡',
          type: '图文',
          todoStatus: '未完成',
          taskStatus: '开放',
          pancel: '删除',
          icon: t3,
          id: 5
        },
        {
          date: '2019/03/05-2019/07/30',
          name: '阶段考试',
          type: '优势打卡',
          todoStatus: '已完成',
          taskStatus: '开放',
          pancel: '删除',
          icon: t5,
          id: 3,
          status: '3'
        }
      ],
      isShowTask: false
    }
  },
  created () {
    if (this.$route.query.type === 'showPunchCard') {
      this.isShowPanchCard = true
    }
  },
  methods: {
    addWorks () {
      this.isShowAddWork = true
    },
    handleJump () {
      this.isShowEditor = true
    },
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    handleConditionChange () {},
    parentClose () {
      this.isShowPanchCard = false
      this.isShowActivity = false
      this.isShowAddWork = false
      this.isShowEditor = false
    },
    handleActivityShow () {
      this.isShowActivity = true
    },
    todo (row) {
      if (row.id === 1) {
        this.$router.push({
          path: '/questionnaire'
        })
      } else if (row.id === 2) {
        this.isShowTask = true
        // this.isShowAdvantage = true
      } else if (row.id === 3) {
        this.punchStatus = row.status
        this.isShowPanchCard = true
      }
    },
    todoType (row) {
      if (row.id === 1) {
        this.$router.push({
          path: '/questionnaire'
        })
      } else if (row.id === 2) {
        this.isShowTask = true
        // this.isShowAdvantage = true
      } else if (row.id === 3) {
        this.$router.push('/superiority-clockin/empty')
      }
    }
  },
  components: {
    PredictionTask,
    PunchCard,
    ActivityName,
    AddWorks,
    Ueditor
    // MyAdvantage,
    // CoursewareUpload,
    // NoSelect,
    // InvitationSuccess,
    // InvitationComments
  }
}
</script>

<style lang="scss" scoped>
.trends {
  flex: 1;
  height: 100%;
  width: 11.85rem;
  margin: 0.4rem 0 0 0.2rem;
  background-color: #fff;
  border-radius: 6px;
  .look {
    display: none;
  }
  .nav_img_1,
  .nav_img_2 {
    img {
      width: 0.2rem;
      height: 0.2rem;
      margin-right: 0.08rem;
      margin-top: -0.03rem;
    }
  }
  .search-box {
    width: 2.42rem;
    height: 0.32rem;
    background: rgba(238, 242, 245, 1);
    border-radius: 0.16rem;
    margin: 0 0.46rem 0 0.2rem;
    position: relative;
    input {
      height: 100%;
      width: 100%;
      background-color: rgba(238, 242, 245, 1);
      border-radius: 0.16rem;
      padding-left: 0.24rem;
      padding-right: 0.4rem;
      box-sizing: border-box;
      &::-webkit-input-placeholder {
        color: rgba(170, 170, 170, 1);
      }
    }
    i {
      position: absolute;
      right: 0.24rem;
      top: 0.08rem;
    }
  }
}
</style>
<style lang="scss" scoped>
.trends /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item {
  height: 0.68rem;
  line-height: 0.68rem;
  width: 1.83rem;
  text-align: center;
  color: rgba(153, 153, 153, 1);
  border: none;
  font-size: 0.16rem;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
}
.trends /deep/ .el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
}
.trends /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item:hover {
  color: rgba(153, 153, 153, 1);
}
.trends /deep/ .el-tabs--card > .el-tabs__header {
  background: rgba(248, 248, 248, 1);
}
.trends /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border: none;
  color: #f79727;
  border-right: 1px solid rgba(228, 232, 237, 1);
  border-left: 1px solid rgba(228, 232, 237, 1);
}
.trends /deep/ #tab-1.is-active {
  background: #fff url("../../../../assets/images/icon/t11.png") no-repeat;
}
.trends /deep/ #tab-2.is-active {
  background: #fff url("../../../../assets/images/icon/t8.png") no-repeat;
}
.search-panel {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.2rem;
}
.search {
  width: 1.5rem;
  margin-right: 0.1rem;
}
button {
  width: 1.2rem;
  line-height: 0.32rem;
  height: 0.32rem;
  background: rgba(247, 151, 39, 1);
  border-radius: 0.16rem;
  font-size: 0.14rem;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin: 0 0.36rem 0 0.3rem;
  i {
    width: 0.15rem;
    height: 0.15rem;
    line-height: 0.1rem;
    font-size: 0.2rem;
    display: inline-block;
    vertical-align: middle;
  }
}

.table-wrap {
  margin: 0 0.36rem 0 0.4rem;
  height: 100%;
  // max-height: 5rem;
  .icon {
    width: 0.16rem;
    height: 0.16rem;
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.05rem;
  }
}
.table-wrap /deep/ .el-table__body-wrapper {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 6.6rem;
}
.table-wrap /deep/ .el-table td.is-center:nth-of-type(1),
.el-table th.is-center:nth-of-type(1) {
  text-align: left;
  padding-left: 0.43rem;
  box-sizing: border-box;
}
</style>
