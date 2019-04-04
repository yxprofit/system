<template>
  <header>
    <!-- <router-link :to="{path:'student'}" class="logo">
      <img src="../../assets/images/logo.png" alt="">
    </router-link> -->
    <div class="userinfo">
      <span class='msg'><img src="../../assets/images/icon/icon_message.png" alt=""></span>
      <span @click='faq'><img src="../../assets/images/icon/icon_problem.png" alt=""></span>
      <div class="userinfo-menu">
        <div><img src="../../assets/images/head.png" alt=""></div>
        <div>
          <h3>余周周</h3>
          <!-- <p>高中三年级</p> -->
        </div>
        <!-- <span><img src="../../assets/images/icon/icon_arrow_bottom.png" alt=""></span> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BHeader',
  methods: {
    faq() {
      console.log('跳转后续')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 59px;
  line-height: 59px;
  background-color: #fff;
  padding: 0 30px;
  overflow: hidden;
  .logo {
    display: block;
    width: 209px;
    float: left;
    img {
      width: 100%;
    }
  }
  .userinfo {
    float: right;
    display: flex;
    & > span {
      margin-left: 40px;
      cursor: pointer;
    }
    .userinfo-menu {
      overflow: hidden;
      width: 146px;
      margin-left: 40px;
      display: flex;
      align-items: center;
      & > div:nth-child(1) {
        margin-top: 6px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-right: 12px;
        float: left;
        img {
          border-radius: 50%;
        }
      }
      & > div:nth-child(2) {
        float: left;
        position: relative;
        h3 {
          font-size: 14px;
          line-height: 12px;
          margin: 18px 0 6px;
        }
        p {
          font-size: 12px;
          line-height: 12px;
          color: #888;
        }
      }
      & > span {
        height: 20px;
        line-height: 20px;
        margin-top: 20px;
        float: right;
      }
    }
  }
  .msg {
    position: relative;
    // &::after {
    //   position: absolute;
    //   content: "";
    //   width: 7px;
    //   height: 7px;
    //   background: rgba(242, 42, 24, 1);
    //   border-radius: 50%;
    //   top: 40%;
    //   right: 0;
    // }
  }
}
</style>
