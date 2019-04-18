<template>
  <div class="questionnaire-input">
    <el-input
      v-model="inputVal"
      :type="type"
      :class="type === 'textarea' ?  'limit-textarea' : ''"
      @focus="foucsing=true"
      @blur="foucsing=false"
      @change="handlechange">
    </el-input>
    <span v-show="showPlaceholder" class="place-holder"><img :src="inputImg"><span class="text">请输入</span></span>
  </div>
</template>
<script>
import inputImg from 'assets/images/icon/input.png'
export default {
  props:{
    type: String,
    itemValue: '',
    prop: String
  },
  data() {
    return {
      inputVal: '',
      foucsing: '',
      inputImg,
    }
  },
  computed: {
    showPlaceholder() {
      return !this.inputVal && !this.foucsing;
    }
  },
  methods:{
    handlechange(val) {
      this.$emit('change', {
        prop: this.prop,
        val: val
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.questionnaire-input {
  position: relative;
  width: 100%;
  
  .limit-textarea {
    height: 1rem;
  }
  .el-input {
    height: 0.4rem;
  }
    
  .place-holder {
    position: absolute;
    left: 0.18rem;
    top: 0.14rem;
    font-size: 0.12rem;
    color: #ccc;
    img {
      display: inline-block;
      width: 0.13rem;
      height: 0.12rem;
      margin-right: 0.07rem;
      vertical-align: top;
    }
    text {
      display: inline-block;
      height: 0.12rem;
      line-height: 0.12rem;
      vertical-align: middle;
    }
  }
} 
</style>
<style lang="scss">
.questionnaire-input {
  .el-textarea__inner,
  .el-input__inner {
    height: 100%;
    min-height: 0.4rem;
    border-radius: 0.06rem;
    width: 100%;
    border-color: #eee;
  }
  .el-textarea__inner:hover,
  .el-input__inner:hover {
    border-color: #C0C4CC;
  }
  .el-textarea__inner:focus,
  .el-input__inner:focus {
    border-color: #F79727;
  }
}
</style>


