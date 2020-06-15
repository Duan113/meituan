<template>
	<div id="recharge">
		<div id="recharge_div1">
			<span>充值中心</span>
			<div class="recharge_div1">
				<img src="../../assets/my/recharge/更多.png" />&nbsp;
				<span style="position: relative;top: -25px;left: 40px;color: #bbb;">|</span>
				&nbsp;<img src="../../assets/my/recharge/错误.png" />
			</div>
		</div>

		<div id="recharge_div2">
			<img src="../../assets/advertising4.jpg" />
		</div>
		<div id="recharge_div3">
			<div class="recharge_div3">
				<span class="recharge_div3_span1">152****5216</span>
				<span class="recharge_div3_span2">首次充值,请仔细核对充值号码(江苏移动)</span>
			</div>
			<img src="../../assets/my/recharge/通讯录.png" />
		</div>

		<div style="position: absolute;width: 100%;height: 1px;background-color: #eee;margin-top: 200px;"></div>

		<div id="recharge_div5">
			<img src="../../assets/my/recharge/支付.png" />
			<span>使用美团支付，最高再享<a style="color: #ff3300;">5元</a>优惠</span>
		</div>
		<div id="recharge_div6">
			<van-tabs v-model="active" :color="'#FFCC00'">
				<van-tab title="充话费">
					<van-grid :column-num="3">
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">5元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价5.00元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">10元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价9.99元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">30元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价29.97元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">50元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价49.85元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">100元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价99.70元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">200元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价199.80元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">300元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价299.70元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">500元</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价499.50元</span>
						</van-grid-item>
					</van-grid>
				</van-tab>
				<van-tab title="冲流量">
					<van-grid :column-num="3">
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">500M</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价24.24元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">1G</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价40.40元</span>
						</van-grid-item>
						<van-grid-item>
							<span style="font-size: 16px;font-weight: 600;display: block;">2G</span>
							<span style="font-size: 10px;color: #888;margin-top: 10px;">售价56.56元</span>
						</van-grid-item>
					</van-grid>
				</van-tab>
			</van-tabs>
		</div>

		<div style="position: absolute;width: 100%;height: 10px;background-color: #eee;margin-top: 530px;"></div>

		<div id="recharge_div8">
			<span class="recharge_div8_span1">其他充值</span>
			<div id="recharge_div8_bottom">
				<img class="recharge_div8_img1" src="../../assets/my/recharge/会员.png" />
				<span class="recharge_div8_span2">视频会员</span>
				<span class="recharge_div8_span3">百万补贴优惠</span>
				<img class="recharge_div8_img2" src="../../assets/my/箭头.png" />
			</div>
		</div>

		<div id="recharge_div9">
			<span>充值记录&nbsp;|&nbsp;充值提醒&nbsp;|&nbsp;常见问题</span>
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
	#recharge {
		position: absolute;
		width: 100%;
		height: 700px;
	}

	#recharge_div1 {
		position: absolute;
		width: 90%;
		height: 40px;
		margin-left: 5%;
		background-color: #fff;
	}

	#recharge_div1 span {
		float: left;
		position: relative;
		font-size: 20px;
		font-weight: 500;
		top: 5px;
	}

	.recharge_div1 {
		position: relative;
		border: #aaa 1px solid;
		border-radius: 10px;
		width: 80px;
		height: 26px;
		left: 270px;
		top: 4px;
	}

	#recharge_div1 img {
		position: relative;
		width: 25px;
		height: 25px;
		top: -25px;
	}

	#recharge_div2 {
		position: absolute;
		width: 100%;
		margin-top: 40px;
	}

	#recharge_div2 img {
		width: 100%;
	}

	#recharge_div3 {
		position: absolute;
		width: 90%;
		height: 70px;
		margin-left: 5%;
		margin-top: 130px;
		background-color: #fff;
	}

	.recharge_div3 {
		float: left;
		position: absolute;
		width: 80%;
		height: 90%;
		top: 5%;
	}

	.recharge_div3_span1 {
		position: relative;
		display: block;
		font-size: 24px;
		font-weight: 600;
		left: -70px;

	}

	.recharge_div3_span2 {
		position: relative;
		font-size: 13px;
		left: -15px;
		top: 10px;
		color: #ff3300;
	}

	#recharge_div3 img {
		position: relative;
		width: 30px;
		height: 30px;
		left: 140px;
		top: 20px;
	}

	#recharge_div5 {
		position: absolute;
		width: 90%;
		height: 30px;
		margin-left: 5%;
		margin-top: 210px;
		background-color: #eee;
		border-radius: 5px;
	}

	#recharge_div5 img {
		position: relative;
		width: 20px;
		height: 20px;
		top: 5px;
		left: -60px;
	}

	#recharge_div5 span {
		position: relative;
		font-size: 13px;
		left: -55px;
	}

	#recharge_div6 {
		position: absolute;
		width: 90%;
		margin-left: 5%;
		margin-top: 250px;
	}

	#recharge_div8 {
		position: absolute;
		width: 90%;
		margin-left: 5%;
		height: 120px;
		margin-top: 550px;
	}

	.recharge_div8_span1 {
		position: relative;
		top: 10px;
	}

	#recharge_div8_bottom {
		position: relative;
		width: 100%;
		height: 70px;
		top: 20px;
		width: 95%;
		border-radius: 5px;
		border: 1px #999 solid;
		margin-left: 2.5%;
	}

	.recharge_div8_img1 {
		position: relative;
		top: 15px;
		left: -55px;
		width: 20px;
		height: 20px;
	}

	.recharge_div8_span2 {
		position: relative;
		top: 10px;
		left: -45px;
	}

	.recharge_div8_span3 {
		position: relative;
		top: 30px;
		left: -110px;
		font-size: 13px;
		color: #999;
	}

	.recharge_div8_img2 {
		position: relative;
		width: 20px;
		height: 20px;
		top: 25px;
		left: 60px;
	}

	#recharge_div9 {
		margin-top: 675px;
		color: #FFCC00;
	}
</style>
