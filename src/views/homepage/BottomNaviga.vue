<template>
	<div>
	<router-view></router-view>
	<van-tabbar v-model="active">
	  <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
	  <van-tabbar-item icon="browsing-history-o">发现</van-tabbar-item>
	  <van-tabbar-item icon="friends-o">订单</van-tabbar-item>
	  <van-tabbar-item icon="contact">我的</van-tabbar-item>
	</van-tabbar>
	</div>
</template>
<script>
	
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>

</style>