<template>
	<div id="wallet">
		<div id="wallet_div1">
			<img src="../../assets/my/箭头左.png" style="left: -120px;" />
			<img src="../../assets/my/客服.png" style="left: 100px;" />
			<img src="../../assets/my/wallet/消息.png" style="left: 110px;" />
			<img src="../../assets/my/设置.png" style="left: 120px;" />
		</div>

		<div id="wallet_div2">
			<span class="wallet_div2_span1">Shadows的钱包</span>
			<span class="wallet_div2_span2">
				<img src="../../assets/my/wallet/实名认证.png" />&nbsp;已实名认证
			</span>
		</div>

		<div id="wallet_div3">
			<div style="position: absolute;width: 100%;height: 33px;">
				<span class="wallet_div3_span1">余额(元)</span>
				<span class="wallet_div3_span2">银行卡</span>
			</div>
			<div style="margin-top: 10px;">
				<span class="wallet_div3_span3">0.00</span>
				<span class="wallet_div3_span4">去绑卡</span>
			</div>
			<div style="position: relative;width: 100%;height: 1px;background-color: #d7d7d7;top: 30px;"></div>
			<div style="margin-top: 14px;">
				<span class="wallet_div3_span5">
					现金券(张)
					<span style="color: #FF0000;">&nbsp;0</span>
				</span>
				<span class="wallet_div3_span6">领取更多新人优惠</span>
			</div>
		</div>

		<div id="wallet_div4">
			<img src="../../assets/jq.jpg" />
		</div>

		<div id="wallet_div5">
			<ul id="wallet_list_ul1">
				<router-link to="/jointCard" style="color: #000;">
				<li>
					<a>
						<img src="../../assets/my/wallet/信用卡.png" />
						<span>美团信用卡</span>
					</a>
				</li>
				</router-link>
				<li>
					<a>
						<img src="../../assets/my/wallet/互助.png" />
						<span>美团互助</span>
					</a>
				</li>
				<li>
					<a>
						<img src="../../assets/my/wallet/理财.png" />
						<span>美团理财</span>
					</a>
				</li>
				<li>
					<a>
						<img src="../../assets/my/wallet/生意贷.png" />
						<span>生意贷</span>
					</a>
				</li>
				<router-link to="/meituanCard" style="color: #000;">
					<li>
						<a>
							<img src="../../assets/my/wallet/账单.png" />
							<span>美团卡</span>
						</a>
					</li>
				</router-link>
			</ul>
		</div>

		<div id="wallet_div6">
			<ul id="wallet_div6_ul">
				<li>
					<div id="wallet_li_div">
						<span class="wallet_li_span1">新人福利</span>
						<span class="wallet_li_span2">专属权益等你拿</span>
					</div>
					<span class="wallet_li_span3">
						<img class="wallet_li_img" src="../../assets/my/领取红包.png" />
					</span>
				</li>
				<li>
					<div id="wallet_li_div">
						<span class="wallet_li_span1" style="margin-left: 1px;">银行卡立减</span>
						<span class="wallet_li_span2">最高可减210元</span>
					</div>
					<span class="wallet_li_span3">
						<img class="wallet_li_img" src="../../assets/my/领取红包.png" />
					</span>
				</li>
				<li style="position: relative; top: 5px;">
					<div id="wallet_li_div">
						<span class="wallet_li_span1" style="margin-left: 1px;">理财送3元</span>
						<span class="wallet_li_span2">存100元可得</span>
					</div>
					<span class="wallet_li_span3" style="margin-left: 10px;">
						<img class="wallet_li_img" src="../../assets/my/领取红包.png" />
					</span>
				</li>
				<li style="position: relative; top: 5px;">
					<div id="wallet_li_div">
						<span class="wallet_li_span1">推荐有奖</span>
						<span class="wallet_li_span2">邀友办卡享好礼</span>
					</div>
					<span class="wallet_li_span3">
						<img class="wallet_li_img" src="../../assets/my/领取红包.png" />
					</span>
				</li>
			</ul>
			<div style="position: relative;width: 100%;height: 1px;background-color: #d7d7d7;top: 55px;"></div>
			<div style="position: relative;width: 1px;height: 35px;background-color: #d7d7d7;top: 10px;left: 145px;"></div>
			<div style="position: relative;width: 1px;height: 35px;background-color: #d7d7d7;top: 30px;left: 145px;"></div>
		</div>

		<div id="wallet_div7">
			<span class="wallet_div7_span1">
				<img src="../../assets/my/wallet/理财(1).png" />&nbsp;理财|&nbsp;精选银行存款
			</span>
			<span class="wallet_div7_span2">
				50元起购,年化
				<span style="color: #EE3B3B;">4.1%</span>
			</span>
			<span class="wallet_div7_span3">本息保障,随时支取</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#wallet {
		position: absolute;
		width: 100%;
		height: 730px;
		background-color: #f7f7f7;
	}

	#wallet_div1 {
		position: absolute;
		width: 90%;
		height: 60px;
		margin-left: 5%;
	}

	#wallet_div1 img {
		position: relative;
		width: 25px;
		height: 25px;
		top: 17.5px;
	}

	#wallet_div2 {
		position: absolute;
		width: 90%;
		height: 60px;
		margin-left: 5%;
		margin-top: 60px;
	}

	.wallet_div2_span1 {
		position: relative;
		font-size: 22px;
		font-weight: 600;
		top: 16px;
		left: -45px;
	}

	.wallet_div2_span2 {
		position: relative;
		font-size: 8px;
		padding: 4px;
		border: 1px solid;
		border-radius: 5px;
		top: 12px;
		left: 45px;
	}

	.wallet_div2_span2 img {
		width: 8px;
		height: 8px;
	}

	#wallet_div3 {
		position: absolute;
		padding: 3%;
		width: 82%;
		height: 100px;
		margin-left: 5%;
		margin-top: 120px;
		border-radius: 10px;
		background-color: #fff;
	}

	.wallet_div3_span1 {
		position: relative;
		font-size: 12px;
		color: #646566;
		left: -120px;
	}

	.wallet_div3_span2 {
		position: relative;
		font-size: 12px;
		color: #646566;
		left: -10px;
	}

	.wallet_div3_span3 {
		left: -50px;
		position: relative;
		font-size: 22px;
		font-weight: 600;
		top: 16px;
		left: -96px;
	}

	.wallet_div3_span4 {
		left: -50px;
		position: relative;
		font-size: 22px;
		font-weight: 600;
		top: 16px;
		left: 15px;
	}

	.wallet_div3_span5 {
		left: -50px;
		position: relative;
		font-size: 12px;
		font-weight: 600;
		top: 25px;
		left: -70px;
	}

	.wallet_div3_span6 {
		left: -50px;
		position: relative;
		font-size: 12px;
		font-weight: 600;
		top: 25px;
		left: 20px;
	}

	#wallet_div4 {
		width: 100%;
		margin-left: 5%;
		margin-top: 260px;
	}

	#wallet_div4 img {
		border-radius: 10px;
		width: 200px;
		height: 110px;
		margin-left: -170px;
	}

	#wallet_div5 {
		position: absolute;
		padding: 3%;
		width: 82%;
		height: 45px;
		margin-left: 5%;
		margin-top: 15px;
		border-radius: 10px;
		background-color: #fff;
	}

	ul {
		list-style: none;
	}

	#wallet_list_ul1 li {
		float: left;
		width: 61px;
	}

	#wallet_list_ul1 {
		margin: 0 auto;
		overflow: hidden;
	}

	#wallet_list_ul1 a {
		color: black;
	}

	#wallet_list_ul1 li img {
		display: block;
		margin: 0 auto;
		width: 25px;
		height: 25px;
	}

	#wallet_list_ul1 li span {
		margin-top: 2px;
		display: block;
		font-size: 12px;
	}

	#wallet_div6 {
		position: absolute;
		padding: 3%;
		width: 82%;
		height: 100px;
		margin-left: 5%;
		margin-top: 100px;
		border-radius: 10px;
		background-color: #fff;
	}

	#wallet_div6_ul li {
		float: left;
		margin-top: 10px;
		width: 153px;
	}

	#wallet_li_div {
		float: left;
	}

	.wallet_li_span1 {
		display: block;
		font-size: 14px;
		font-weight: 600;
		margin-left: -15px;
	}

	.wallet_li_span2 {
		font-size: 11px;
		color: #646566;
	}

	.wallet_li_span3 {
		position: relative;
		border-radius: 50%;
		padding: 12px;
		background-color: #eed5d2;
		top: 5px;
	}

	.wallet_li_img {
		position: relative;
		top: 10px;
		width: 20px;
		height: 20px;
	}

	#wallet_div7 {
		position: absolute;
		padding: 3%;
		width: 82%;
		height: 80px;
		margin-left: 5%;
		margin-top: 240px;
		border-radius: 10px;
		background-color: #fff;
	}

	.wallet_div7_span1 {
		position: relative;
		display: block;
		font-size: 12px;
		margin-left: -160px;
		margin-top: 10px;
	}

	.wallet_div7_span1 img {
		width: 12px;
		height: 12px;
	}

	.wallet_div7_span2 {
		position: relative;
		display: block;
		font-size: 15px;
		font-weight: 600;
		margin-left: -155px;
		margin-top: 15px;
	}

	.wallet_div7_span3 {
		position: relative;
		color: #646566;
		font-size: 11px;
		margin-left: -195px;
		margin-top: 15px;
	}
</style>
