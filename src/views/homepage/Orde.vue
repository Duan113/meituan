<template>
	<div>
		<div id="orde_title">
			<van-form>
				<van-field>
				</van-field>
			</van-form>
			<img id="title_icon" src="../../assets/orde/搜索.png" />
			<span id="title_span">搜索我的订单</span>
		</div>
		<div id="orde">
			<van-tabs v-model="active" :color="'#FF9900'">
				<van-tab id="orde_all" title="全部">
					<div id="advertising">
						<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
							<van-swipe-item><img src="../../assets/advertising1.jpg" /></van-swipe-item>
							<van-swipe-item><img src="../../assets/advertising2.jpg" /></van-swipe-item>
							<van-swipe-item><img src="../../assets/advertising3.jpeg" /></van-swipe-item>
						</van-swipe>
					</div>
					<div id="orde_all1">
						<img class="orde_all_img1" src="../../assets/orde/汽车1.png" />
						<span class="orde_all_span1">美团打车</span>
						<span class="orde_all_span2">已完成</span>
						<van-divider style="position: relative; margin-top: 40px;" />
						<div>
							<img class="orde_all_img2" src="../../assets/orde/汽车.png" />
							<div style="position: absolute;margin-left: 100px;">
								<span class="orde_all_span3">自行车租债点(仙境路)南京工…</span>
								<span class="orde_all_span3">下单时间：2020-05-28 15:21</span>
								<span class="orde_all_span3">支付金额：￥7.20</span>
							</div>
						</div>
						<span class="orde_all_span4">再来一单</span>
					</div>
					<div id="orde_all1" style="margin-top: 290px;">
						<img class="orde_all_img1" src="../../assets/orde/汽车1.png" />
						<span class="orde_all_span1">美团打车</span>
						<span class="orde_all_span2">已取消</span>
						<van-divider style="position: relative; margin-top: 40px;" />
						<div>
							<img class="orde_all_img2" src="../../assets/orde/汽车.png" />
							<div style="position: absolute;margin-left: 100px;">
								<span class="orde_all_span3">上五旗(公交站)对面-中山学院…</span>
								<span class="orde_all_span3">下单时间：2020-02-04 08:20</span>
							</div>
						</div>
						<span class="orde_all_span4">再来一单</span>
					</div>
					<div id="orde_all1" style="margin-top: 465px;">
						<img class="orde_all_img1" src="../../assets/orde/汽车1.png" />
						<span class="orde_all_span1">美团打车</span>
						<span class="orde_all_span2">已完成</span>
						<van-divider style="position: relative; margin-top: 40px;" />
						<div>
							<img class="orde_all_img2" src="../../assets/orde/汽车.png" />
							<div style="position: absolute;margin-left: 100px;">
								<span class="orde_all_span3">自行车租债点(仙境路)南京工…</span>
								<span class="orde_all_span3">下单时间：2020-02-03 19:21</span>
								<span class="orde_all_span3">支付金额：￥9.47</span>
							</div>
						</div>
						<span class="orde_all_span4">再来一单</span>
					</div>
				</van-tab>
				<van-tab title="待付款">待付款</van-tab>
				<van-tab title="待使用">待使用</van-tab>
				<van-tab title="待评价(1)">待评价</van-tab>
				<van-tab title="退款/售后">退款/售后</van-tab>
			</van-tabs>
		</div>
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
	#orde_title {
		position: absolute;
		width: 100%;
		height: 50px;
		background-color: #FFCC00;
	}

	.van-form {
		position: absolute;
		width: 90%;
		margin-left: 5%;
	}

	.van-field {
		position: absolute;
		border-radius: 10px;
		width: 100%;
		height: 40px;
		margin-top: 5px;
	}

	#title_icon {
		position: relative;
		top: 15px;
		left: -110px;
		width: 20px;
		height: 20px;
	}

	#title_span {
		position: relative;
		font-size: 13px;
		top: 9px;
		left: -100px;
		color: #999;
	}

	#orde {
		position: absolute;
		width: 100%;
		height: 730px;
		background-color: #f7f7f7;
		margin-top: 50px;
	}

	#advertising {
		position: absolute;
		width: 90%;
		margin-left: 5%;
		margin-top: 10px;
		border-radius: 10px;
	}

	.my-swipe .van-swipe-item {
		line-height: 100px;
		text-align: center;
		border-radius: 10px;
	}

	.my-swipe .van-swipe-item img {
		border-radius: 10px;
		width: 100%;
		height: 100px;
	}

	#orde_all1 {
		position: absolute;
		background-color: #FFFFFF;
		width: 90%;
		height: 170px;
		border-radius: 10px;
		margin-left: 5%;
		margin-top: 115px;
	}

	.orde_all_img1 {
		position: absolute;
		float: left;
		width: 20px;
		height: 20px;
		background-color: #0570DB;
		border-radius: 50%;
		padding: 5px;
		margin-left: -150px;
		margin-top: 5px;

	}

	.orde_all_span1 {
		position: absolute;
		float: left;
		font-weight: 600;
		font-size: 15px;
		margin-left: -110px;
		margin-top: 8px;
	}

	.orde_all_span2 {
		position: absolute;
		font-size: 14px;
		margin-left: 110px;
		margin-top: 10px;
	}

	.orde_all_img2 {
		position: absolute;
		float: left;
		width: 60px;
		height: 60px;
		background-color: #f7f7f7;
		border-radius: 10px;
		padding: 5px;
		margin-left: -150px;
	}

	.orde_all_span3 {
		display: flex;
		font-size: 14px;
		margin-top: 5px;
		color: #646566;
	}

	.orde_all_span4 {
		position: absolute;
		margin-top: 75px;
		margin-left: 90px;
		border-radius: 5px;
		padding: 2px;
		font-size: 13px;
		border: #bbb solid;
	}
</style>
