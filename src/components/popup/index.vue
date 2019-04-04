<template>
  <div class="popup">
    <transition name="ry-fade">
      <div class="popup-mask" v-show="value && !hideMask" @click="$_cancel"></div>
    </transition>
    <transition name="slide">
      <div class="popup-content" v-show="value" :class="positionClass">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
const objTransitionSlideType = {
  bottom: "slide-bottom",
  left: "slide-left",
  top: "slide-top",
  right: "slide-right",
  center: "fade"
};
export default {
  name: "popup",
  props: {
    position: {
      type: String,
      default: "center"
    },
    value: {
      type: Boolean,
      required: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    hideMask: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    positionClass() {
      return [`popup-${this.position}`];
    },
    transitionSlideType() {
      return objTransitionSlideType[this.position];
    }
  },

  methods: {
    $_cancel() {
      if (!this.closeOnClickOverlay) return;
      this.$emit("input", false);
    }
  }
};
</script>

<style lang="scss" scoped>
// 定义基础变量

$prefixCls: popup;

.#{$prefixCls} {
  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  &-content {
    position: fixed;
    background-color: #fff;
    z-index: 9999;
    &.#{$prefixCls}-top {
      left: 0;
      right: 0;
      top: 0;
    }
    &.#{$prefixCls}-bottom {
      left: 0;
      right: 0;
      bottom: 0;
    }
    &.#{$prefixCls}-left {
      top: 0;
      left: 0;
      width: 60%;
      bottom: 0;
    }
    &.#{$prefixCls}-right {
      top: 0;
      right: 0;
      width: 60%;
      bottom: 0;
    }
    &.#{$prefixCls}-center {
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}

// 蒙层渐变动画
@keyframes ry-fade-enter {
  from {
    opacity: 0;
  }
}

@keyframes ry-fade-leave {
  to {
    opacity: 0;
  }
}

@keyframes slide-enter {
  from {
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes slide-leave {
  to {
    opacity: 1;
    transform: translate3d(-50%, -50%,  0);
  }
}

.ry-fade {
  &-enter-active {
    animation: ry-fade-enter 0.3s both ease;
  }

  &-leave-active {
    animation: ry-fade-leave 0.3s both ease;
  }
}

.slide {
  &-enter-active {
    animation: slide-enter 0.5s both ease-out;
  }
  &-leave-active {
    animation: slide-leave 0.5s both ease-out;
  }
}
</style>

