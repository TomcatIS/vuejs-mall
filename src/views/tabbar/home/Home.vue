<template>
  <div id="home">
      <nav-bar class="nav-home"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :titles="['流行', '新款', '精选']"></tab-control>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </div>
</template>

<script>

import HomeSwiper from './childcomponents/HomeSwiper'
import RecommendView from './childcomponents/RecommentView'
import HomeFeatureView from './childcomponents/HomeFeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultiData} from 'network/home'

export default {
  components: {
    
    HomeSwiper,
    RecommendView,
    HomeFeatureView,
    NavBar,
    TabControl
  },
  props: {},
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    getHomeMultiData().then(result => {
      // 箭头函数中的this指向会一层层往上查找
      this.banners = result.data.data.banner.list;
      this.recommends = result.data.data.recommend.list;
    })
  },
  mounted() {}
}
</script>
<style>
  #home {
    padding-top: 44px;
  }

  .nav-home {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9;
  }
</style>