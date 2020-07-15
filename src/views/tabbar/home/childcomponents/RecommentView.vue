<template>
  <div class="recommend">
    <a v-for="(item, index) in recommends" :key="index" :href="item.link" class="recommend-item">
      <img :src="item.image" />
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return []
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
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: solid 8px #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend img {
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
  }
</style>