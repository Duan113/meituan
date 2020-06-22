<template>
	<div id="borrow">
		<div id="borrow_top">
			<img class="borrow_top_img1" src="../../assets/my/箭头左.png" />
			<span class="borrow_top_span1">美团生活费·借钱</span>
			<img class="borrow_top_img2" src="../../assets/my/客服.png" />
		</div>

		<div id="borrow_div1">
			<div>
				<span class="borrow_div1_span1">最高可借(元)</span>
				<span class="borrow_div1_span2">200,000</span>
				<span class="borrow_div1_span3">利息低，借1千元日利息最低0.2元</span>
			</div>
			<div style="margin-top: 25px;">
				<img src="../../assets/my/borrow/b1.jpg" />
			</div>
		</div>
		
		<div id="borrow_div2">
			<div id="borrow_div2_top">
				<span style="margin-left: 10px;">现金急速到账</span>&nbsp;|
				&nbsp;<span>随借随还</span>&nbsp;|
				&nbsp;<span>美团自营品牌</span>&nbsp;
			</div>
			<div id="borrow_div2_middle">
				<span style=" position: relative;top: 8px;font-weight: 600;">领取额度</span>
			</div>
			<div id="borrow_div2_bottom">
				<span>点击按钮即表示你已阅读并同意<span style="color: #0066FF;">《相关协议》</span></span>
			</div>
		</div>
		<div id="borrow_div3">
			<span>产品详情</span>
			<img src="../../assets/my/borrow/b2.jpg" />
		</div>
		<div id="borrow_div3">
			<span>开通简便 急速借出</span>
			<img src="../../assets/my/borrow/b3.jpg" />
		</div>
		<div id="borrow_div3">
			<span>还款灵活方便</span>
			<img src="../../assets/my/borrow/b4.jpg" />
		</div>
		<div id="borrow_div4">
			<span class="borrow_div4_span1">美团自营 四大安全保障</span>
			<div class="borrow_div4_l1" style="margin-top: 10px;">
				<img src="../../assets/my/borrow/bz1.jpg" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">严格遵守国家法律规定</span>
					<span style="font-size: 13px; color: #646566;">资质齐全，符合国家监督政策要求……</span>
				</div>
			</div>
			<div class="borrow_div4_l1" style="margin-top: 10px;">
				<img src="../../assets/my/borrow/bz2.jpg" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">信息透明</span>
					<span style="font-size: 13px; color: #646566;">免费申请，息费透明……</span>
				</div>
			</div>
			<div class="borrow_div4_l1"  style="margin-top: 10px;">
				<img src="../../assets/my/borrow/bz3.jpg" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">严格遵守国家法律规定</span>
					<span style="font-size: 13px; color: #646566;">系统全程加密个人信息，监控账户安全……</span>
				</div>
			</div>
			<div class="borrow_div4_l1"  style="margin-top: 10px;">
				<img src="../../assets/my/borrow/bz4.jpg" />
				<div style="margin-left: 10px;">
					<span style="font-weight: 500; font-size: 14px;display: block;">严格遵守国家法律规定</span>
					<span style="font-size: 13px; color: #646566;">贷款服务由重庆美团三块小贷及合作银行……</span>
				</div>
			</div>
		</div>
		<div id="borrow_div5">
			<span>温馨提示：请根具个人能力合理贷款，理性消费，避免逾期；贷款额度、放款时间以实际审批结果为准</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#borrow {
		position: absolute;
		width: 100%;
		height: 1300px;
	}

	#borrow_top {
		width: 90%;
		margin-left: 5%;
		height: 50px;
		text-align: left;
	}

	.borrow_top_img1 {
		width: 24px;
		height: 24px;
		margin-top: 12px;
	}

	.borrow_top_span1 {
		font-size: 19px;
		margin-left: 80px;
	}

	.borrow_top_img2 {
		width: 24px;
		height: 24px;
		margin-left: 50px;
	}

	#borrow_div1 {
		background-color: #FFCC00;
		height: 260px;
	}


	#borrow_div1:after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		box-shadow: 0 -50px 20px 0 #ffffff inset;

	}
	#borrow_div1 div{
		position: relative;
		top: 20px;
		width: 90%;
		margin-left: 5%;
		text-align: left;
	}
	.borrow_div1_span1{
		display: block;
		margin-top: 10px;
		font-size: 14px;
	}
	.borrow_div1_span2{
		display: block;
		margin-top: 10px;
		font-size: 35px;
		font-weight: 600;;
	}
	.borrow_div1_span3{
		display: block;
		margin-top: 10px;
		font-size: 14px;
	}
	#borrow_div1 div img{
		position: absolute;
		width: 100%;
		border-radius: 10px;
	}
	#borrow_div2 {
	}
	#borrow_div2_top {
		width: 90%;
		margin-top: 20px;
		margin-left: 20px;
	}
	
	#borrow_div2_top span {
		font-size: 14px;
		color: #656666;
	}
	#borrow_div2_middle{
		width: 80%;
		margin-left: 10%;
		height: 40px;
		margin-top: 10px;
		border-radius: 20px;
		background-color: #FFCC00;
	}
	#borrow_div2_bottom{
		width: 90%;
		margin-left: 5%;
		margin-top: 10px;
	}
	#borrow_div2_bottom span {
		font-size: 14px;
		color: #656666;
	}
	
	#borrow_div3 {
		width: 90%;
		margin-left: 5%;
		margin-top: 20px;
	}
	#borrow_div3 span{
		display: block;
		font-weight: 600;
	}
	#borrow_div3 img{
		margin-top: 10px;
		border-radius: 10px;
		width: 100%;
	}
	
	#borrow_div4{
		width: 90%;
		margin-left: 5%;
		margin-top: 10px;
	}
	.borrow_div4_l1{
		position: relative;
		text-align: left;
	}
	.borrow_div4_span1{
		display: block;
		font-weight: 600;
	}
	.borrow_div4_l1 img{
		position: relative;
		float: left;
		width: 28px;
		height: 28px;
		left: 30px;
	}
	.borrow_div4_l1 span{
		position: relative;
		left: 40px;
	}
	#borrow_div5{
		width: 86%;
		margin-left: 5%;
		margin-top: 30px;
		padding: 2%;
		background-color: #F7F7F7;
		border-radius: 10px;
		text-align: left;
	}
	#borrow_div5 span{
		font-size: 12px;
		color: #646566;
	}
</style>
