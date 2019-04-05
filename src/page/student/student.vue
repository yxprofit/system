<template>
  <div class="g_main">
    <section class="main">
      <aside>
        <router-link :to="{path:'student'}" class="logo">
          <img src="../../assets/images/logo.png" alt>
        </router-link>
        <img src="../../assets/images/head.png" alt>
        <div class="user">
          余周周
          <span>
            <img src="../../assets/images/icon/icon_sex_nv.png" alt>
          </span>
        </div>
        <p>高中三年级</p>
        <div class="nav active">
          <span>
            <img src="../../assets/images/icon/icon_course.png" alt>
          </span>
          <span>课程中心</span>
        </div>
        <div class="nav">
          <span>
            <img src="../../assets/images/icon/icon_task.png" alt>
          </span>
          <span>任务中心</span>
        </div>
      </aside>
      <section class="content">
        <BHeader></BHeader>
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script>
import BHeader from "@/components/common/header.vue";
export default {
  name: "Student",
  components: {
    BHeader
  }
};
</script>

<style lang="scss" scoped>
.g_main {
  width: 1366px;
  height: 100%;
  margin: 0 auto;
}
.main {
  display: flex;
  height: 100%;
  & > aside {
    width: 150px;
    height: 100%;
    min-height: 700px;
    background-color: #fff;
    margin-top: 1px;
    border-right: 1px solid rgba(228, 232, 237, 1);
    text-align: center;
    padding-top: 20px;
    & > img {
      width: 80px;
      border-radius: 50%;
    }
    & .logo {
      width: 49px;
      height: 49px;
      display: block;
      margin: 0 auto;
      margin-bottom: 32px;
    }
    & > .user {
      text-align: center;
      height: 16px;
      line-height: 16px;
      font-weight: 600;
      margin: 14px 0 12px;
      & > span {
        width: 16px;
        display: inline-block;
        margin-left: 6px;
        font-weight: 400;
      }
    }
    & > p {
      font-size: 13px;
      line-height: 13px;
      margin-bottom: 36px;
      color: #888;
    }
    & > .nav {
      height: 66px;
      margin-bottom: 11px;
      text-align: left;
      font-size: 15px;
      color: #666;
      &.active {
        border-left: 3px solid #f79727;
        background: rgba(252, 244, 235, 1);
        font-size: 16px;
        color: #f79727;
      }
      & > span:nth-child(1) {
        display: inline-block;
        width: 20px;
        height: 22px;
        line-height: 1;
        margin: 22px 13px 0 25px;
      }
      & > span:nth-child(2) {
        display: inline-block;
        margin-top: 25px;
      }
    }
  }
  & > section {
    flex: 1;
    width: calc(100% - 150px);
    height: 100%;
  }
}
</style>
