<template>
  <div id="app">
    <router-view v-wechat-title='$route.meta.title' img-set="/static/images/logo.png"></router-view>
  </div>
</template>
<script>
		export default {
		  name: 'app'
		}
</script>

<style>
	@import "assets/css/base/reset.css";
</style>
