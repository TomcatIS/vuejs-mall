<template>
  <div id="app">
    <router-view/>
    <maintabbar/>
  </div>
</template>

<script>
import maintabbar from 'components/content/MainTabBar'
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
  @import url('assets/css/base.css');
</style>
