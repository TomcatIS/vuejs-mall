<template>
  <div>
    <tabbar>
      <tabbaritem path="/home" activeColor="blue">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tabbaritem>

      <tabbaritem path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tabbaritem>

      <tabbaritem path="/shopcart" activeColor="yellow">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
    <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tabbaritem>

      <tabbaritem path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/TabBar'
import tabbaritem from 'components/common/tabbar/TabBarItem'

export default {
  components: {
      tabbar,
      tabbaritem
  },
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style>
</style>