<template>
  <div class="save-task">
    <div class="task-wrap">
      <el-row class="save-header">
        <el-col :span="12" class="task-name">SDFFFFFFFFFFFFFFFFFFF</el-col>
        <el-col :span="12" class="btn-wrap">
          <div class="task-delete">删除</div>
          <div class="task-save">保存任务</div>
        </el-col>
      </el-row>
      <div class="preview">
        <img src="../../../../assets/images/preview.png" style="width: 110%;" alt>
        <!-- <div style="background: green; height:400px; width: 500px;"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.save-task {
  width: 440px;
  padding: 15px 18px 17px 18px;
}

.save-header {
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
}

.task-wrap {
  border: 1px solid rgba(228, 232, 237, 1);
}

.preview {
  height: 220px;
  overflow: auto;
}

.task-name {
  display: inline-block;
  vertical-align: middle;
}

.task-delete,
.task-save {
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  border-radius: 2px;
  color: #fff;
  width: 70px;
  height: 30px;
  line-height: 30px;
}

.btn-wrap {
  text-align: right;
}

.task-delete {
  color: #999;
  border: 1px solid rgba(204, 204, 204, 1);
  margin-right: 5px;
}

.task-save {
  background: linear-gradient(
    -90deg,
    rgba(255, 183, 38, 1),
    rgba(255, 129, 38, 1)
  );
}
</style>

