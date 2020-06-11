<template>
	<div>
	<router-view></router-view>
	<van-tabbar v-model="active">
	  <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
	  <van-tabbar-item to="/found" icon="browsing-history-o">发现</van-tabbar-item>
	  <van-tabbar-item to="/orde" icon="friends-o">订单</van-tabbar-item>
	  <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
	</van-tabbar>
	</div>
</template>
<script>
export default {
		name: "layout",
		data() {
			return {
				active: 0
			};
		},
		components: {},
		created() {},
		mounted() {},
		methods: {},
		computed: {}
	};
</script>

<style scoped lang="scss">
</style>
