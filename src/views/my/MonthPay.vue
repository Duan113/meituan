<template>
	<div id="monthPay">
		<div id="monthPay_title">
			<img src="../../assets/my/箭头左.png" />
			<span>美团月付</span>
		</div>
		<div id="monthPay_adv">
			<img src="../../assets/my/monthpay/jt1.jpg" />
		</div>
		
		<div id="monthPay_middle">
			<ul id="monthPay_middle_ul">
				<li>
					<img src="../../assets/my/monthpay/券.png"/>
					<span class="middle_ul_span1">立减</span>
					<span class="middle_ul_span2">下单随机减</span>
					<span class="middle_ul_span3">支付笔笔享优惠</span>
				</li>
				<li>
					<img src="../../assets/my/monthpay/券.png"/>
					<span class="middle_ul_span1">免息</span>
					<span class="middle_ul_span2">最长38天</span>
					<span class="middle_ul_span3">本月买下月还</span>
				</li>
				<li>
					<img src="../../assets/my/monthpay/券.png"/>
					<span class="middle_ul_span1">优惠</span>
					<span class="middle_ul_span2">周周领88礼包</span>
					<span class="middle_ul_span3">消费满88即领</span>
				</li>
			</ul>
		</div>
		
		<div id="monthPay_div1">
			<span>领取权益</span>
		</div>
		<div id="monthPay_div2">
			<span style="color: #646566;">点击即阅读并同意
			<span style="color: #663300;">《美团月付授信付款合同》</span>和
			<span style="color: #663300;">《美团金融隐私政策》</span>
			</span>
		</div>
		<div id="monthPay_div3">
			<span>新客礼包</span>
			<img src="../../assets/my/monthpay/jt2.jpg" />
			<span style="font-size: 12px;color: #bbb;">*新客开通红包 可与全场消费券叠加使用</span>
		</div>
		<div id="monthPay_div3">
			<span>让月付更省钱</span>
			<img src="../../assets/my/monthpay/jt3.jpg" />
		</div>
		<div id="monthPay_div4">
			<span class="monthPay_div4_title">让月付更轻松</span>
			<div class="monthPay_div4_l1" style="margin-top: 10px;">
				<img src="../../assets/my/monthpay/券.png" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">自动还款</span>
					<span style="font-size: 13px; color: #646566;">支付帮应急</span>
				</div>
			</div>
			<div class="monthPay_div4_l1" style="margin-top: 10px;">
				<img src="../../assets/my/monthpay/券.png" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">分期无忧</span>
					<span style="font-size: 13px; color: #646566;">可分期延期</span>
				</div>
			</div>
			<div class="monthPay_div4_l1" style="margin-top: 10px;">
				<img src="../../assets/my/monthpay/券.png" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">亲友代付</span>
					<span style="font-size: 13px; color: #646566;">助力轻松还</span>
				</div>
			</div>
			<div class="monthPay_div4_l1" style="margin-top: 10px;">
				<img src="../../assets/my/monthpay/券.png" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">自动还款</span>
					<span style="font-size: 13px; color: #646566;">绑卡超省心</span>
				</div>
			</div>
		</div>
		
		<div id="monthPay_div5">
			<span class="monthPay_div5_title">如何使用月付</span>
			<div id="monthPay_div5_left">
				<img src="../../assets/my/monthpay/jt4.jpg" />
				<span class="div5_left_span1">1.查看现金券</span>
				<span class="div5_left_span2">美团app-我的钱包-现金券</span>
			</div>
			<div id="monthPay_div5_left">
				<img src="../../assets/my/monthpay/jt5.jpg" />
				<span class="div5_left_span1">2.月付支付</span>
				<span class="div5_left_span2">使用月付支付可直接抵扣</span>
			</div>
		</div>
		<div id="monthPay_div6">
			<span style="font-size: 16px;font-weight: 600;display: block;">美团月付</span>
			<span style="font-size: 14px;">-美团旗下金融服务-</span>
		</div>
		<div id="monthPay_div1">
			<span>领取权益</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#monthPay {
		position: absolute;
		width: 100%;
		height: 250%;
	}

	#monthPay_title {
		width: 100%;
		height: 50px;
		text-align: left;
	}

	#monthPay_title img {
		position: relative;
		width: 25px;
		height: 25px;
		top: 12.5px;
		left: 10px;
	}

	#monthPay_title span {
		position: relative;
		font-size: 19px;
		font-weight: 500;
		top: 8px;
		left: 130px;
	}
	#monthPay_adv{
		width: 100%;
	}
	#monthPay_adv img{
		width: 100%;
	}
	
	#message_middle {
		width: 90%;
		margin-left: 5%;
		border-radius: 10px;
	
	}
	
	ul {
		list-style: none;
	}
	
	#monthPay_middle_ul {
		overflow: hidden;
	}
	
	#monthPay_middle_ul li {
		float: left;
		width: 100px;
		padding: 10px;
	
	}
	
	#monthPay_middle_ul li img {
		display: block;
		width: 30px;
		height: 30px;
		padding: 10px;
		border-radius: 10px;
		margin: 0 auto;
	}
	.middle_ul_span1{
		display: block;
		font-size: 14px;
		font-weight: 600;
	}
	.middle_ul_span2{
		display: block;
		font-size: 14px;
		font-weight: 600;
	}
	.middle_ul_span3 {
		display: block;
		font-size: 10px;
		margin-top: 5px;
		color: #bbb;
	}
	#monthPay_div1{
		margin-top: 20px;
		width: 85%;
		margin-left: 7.5%;
		background-color: #ffcc00;
		border-radius: 20px;
		height: 40px;
	}
	#monthPay_div1 span{
		position: relative;
		color: #663300;
		font-size: 18px;
		font-weight: 600;
		top: 5px;
	}
	#monthPay_div2{
		margin-top: 8px;
		width: 90%;
		margin-left: 5%;
		text-align: left;
	}
	#monthPay_div2{
		font-size: 12px;
	}
	
	#monthPay_div3 {
		width: 90%;
		margin-left: 5%;
		margin-top: 20px;
	}
	#monthPay_div3 span{
		display: block;
		font-weight: 600;
	}
	#monthPay_div3 img{
		margin-top: 10px;
		border-radius: 10px;
		width: 100%;
	}
	
	#monthPay_div4 {
		width: 86%;
		margin-left: 8%;
		margin-top: 20px;
	}
	.monthPay_div4_title{
		display: block;
		font-weight: 600;
	}
	
	.monthPay_div4_l1{
		float: left;
		width: 40%;
		margin-left: 10px;
		margin-top: 10px;
		text-align: left;
	}
	.monthPay_div4_l1 img{
		position: relative;
		float: left;
		width: 28px;
		height: 28px;
		left: 30px;
	}
	.monthPay_div4_l1 span{
		position: relative;
		left: 40px;
	}
	
	#monthPay_div5 {
		width: 90%;
		margin-left: 5%;
		margin-top: 12px;
	}
	.monthPay_div5_title{
		margin-top: 120px;
		display: block;
		font-weight: 600;
	}
	
	#monthPay_div5_left{
		width: 160px;
		float: left;
		text-align: left;
	}
	#monthPay_div5_left img{
		display: block;
		width: 100%;
	}
	.div5_left_span1{
		position: relative;
		display: block;
		font-size: 15px;
	}
	.div5_left_span2{
		font-size: 10px;
		color: #bbb;
	}
	#monthPay_div6{
		color: #bbb;
		margin-top: 220px;
	}
</style>
