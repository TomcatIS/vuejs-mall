<template>
  <div class="tabControl">
    <div v-for="(title, index) in titles" :key=index>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    titles: {
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
</style>
