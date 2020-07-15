<template>
  <div>
    <swiper>
        <swiper-item v-for="(item, key) in banners" :key=key>
          <a :href="item.link">
            <img :src="item.image"/>
          </a>
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
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