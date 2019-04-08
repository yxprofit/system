<template>
  <div class="trends">
    <section>
      <h2>任务中心</h2>
      <p>待定</p>
    </section>
    <div>
      <section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trends',
  data () {
    return {
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.trends{
  margin: 14px 14px 14px 0;
  background-color: #fff;
  border-radius: 6px;
  padding: 0 20px;
  &>section {
    display: flex;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #E4E8ED;
    h2{
      flex: 1;
      display: block;
      height: 20px;
      text-indent: 40px;
      position: relative;
      font-size: 18px;
      font-weight: 600;
      &:after{
        content: '';
        position: absolute;
        width: 18px;
        height: 20px;
        top: 25px;
        left: 8px;
        background-image: url('../../../../assets/images/icon/icon_mycourse.png');
      }
    }
    .search {
      margin-right: 10px;
      width: 160px;
      height: 32px;
    }
  }
}
</style>
