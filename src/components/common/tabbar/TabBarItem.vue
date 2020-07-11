<template>
  <div class="tab-bar-item" @click="itemClick">
      <!-- 插槽会被整个替换掉，所以一般用div包装起来 -->
      <div v-if="isActive">
          <slot  name="item-icon"></slot>
      </div>
      <div v-else>
          <slot  name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle" >
          <slot  name="item-text"></slot>
      </div>
      <!-- <div :class="{active: !isActive}" >
          <slot  name="item-text"></slot>
      </div> -->
      <!-- <img src="../../assets/img/tabbar/home.svg" />
      <div>首页</div> -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path) != -1;
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path)
    },
    activeStyle() {
      return !this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>
<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
      height: 24px;
      width: 24px;
      margin-top: 3px;
      margin-bottom: 2px;
      vertical-align: middle;
  }
  .active {
      color: red;
  }
</style>
