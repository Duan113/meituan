<template>
	<div id="my">
		<div id="my_top">
			<router-link to="/perInfo"><img class="image_head" src="../../assets/ironman.jpg" /></router-link>
			<span class="head_name">Shadows</span>
			<span class="growthvalue">成长值 50 <img style="width: 10px; height: 10px;" src="../../assets/my/箭头.png" /></span>
			<router-link to="/setting"><img class="sett" src="../../assets/my/设置.png" /></router-link>
			<img class="service" src="../../assets/my/客服.png" />
			<div id="top_my_list1">
				<ul id="top_list_ul1">
					<li><a><img src="../../assets/my/收藏.png" /><span>收藏</span></a></li>
					<router-link to="/evaluation" style="color: #000;"><li><a><img src="../../assets/my/评价.png" /><span>评价</span></a></li></router-link>
					<router-link to="/footprint" style="color: #000;"><li><a><img src="../../assets/my/足迹.png" /><span>足迹</span></a></li></router-link>
					<router-link to="/redCard" style="color: #000;"><li><a><img src="../../assets/my/卡券.png" /><span>红包卡券</span></a></li></router-link>
				</ul>
			</div>
		</div>
		<router-link to="/message" style="color: #000;">
		<div id="my_bottom1">
			<img class="bt1_img1" src="../../assets/my/铃铛.png" />
			<span>点击进入消息中心</span>
			<img class="bt1_img2" src="../../assets/my/箭头.png" />
		</div>
		</router-link>
		<div id="my_bottom2">
			<span class="bt2_span1">我的订单</span>
			<span class="bt2_span2">查看全部订单</span>
			<img class="bt2_img" src="../../assets/my/箭头.png" />
			<div id="bottom2_my_list2">
				<ul id="bottom2_list_ul2">
					<li><a><img src="../../assets/my/付款.png" /><span>待付款</span></a></li>
					<li><a><img src="../../assets/my/待使用.png" /><span>待使用</span></a></li>
					<li><a><img src="../../assets/my/评价1.png" /><span>待评价</span></a></li>
					<li><a><img src="../../assets/my/售后.png" /><span>退款/售后</span></a></li>
				</ul>
			</div>
		</div>
		<router-link to="/wallet" style="color: #000;">
		<div id="my_bottom3">
			<span class="bt3_span1">我的钱包</span>
			<span class="bt3_span2">查看现金券</span>
			<img class="bt3_img" src="../../assets/my/箭头.png" />
			<div id="my_list3">
				<ul id="list_ul3">
					<router-link to="/borrow" style="color: #000;"><li>
						<span style="font-size: 15px;font-weight: 600;">15.9万</span>
						<span style="font-size: 12px;font-weight: 600;">借钱</span>
						<span style="font-size: 12px;color: #bfbfbf;">大约可借</span>
					</li></router-link>
					<router-link to="/addBank" style="color: #000;"><li>
						<span style="font-size: 15px;font-weight: 600;">8张</span>
						<span style="font-size: 12px;font-weight: 600;">月付可用</span>
						<span style="font-size: 12px;color: #bfbfbf;">外卖红包</span>
					</li></router-link>
					<router-link to="/monthPay" style="color: #000;"><li>
						<span style="font-size: 15px;font-weight: 600;">5.50元</span>
						<span style="font-size: 12px;font-weight: 600;">免费领红包</span>
						<span style="font-size: 12px;color: #bfbfbf;">全场通用</span>
					</li></router-link>
					<router-link to="/statement" style="color: #000;"><li>
						<span style="font-size: 15px;font-weight: 600;">1</span>
						<span style="font-size: 12px;font-weight: 600;">现金券</span>
						<span style="font-size: 12px;color: #bfbfbf;">当前可用(张)</span>
					</li></router-link>
				</ul>
			</div>
		</div>
		</router-link>
		<div id="my_bottom4">
			<span class="bt4_span1">互动签到</span>
			<div id="my_list4">
				<ul id="list_ul4">
					<li>
						<span class="li4_span1">袋鼠快跑</span>
						<span class="li4_span2">领大额外卖红包
							<img class="li4_img1" src="../../assets/my/箭头.png" />
						</span>
						<img class="li4_img2" src="../../assets/my/汽车.png" />
					</li>
					<li>
						<span class="li4_span1">小美果园</span>
						<span class="li4_span2">0元领水果
							<img class="li4_img1" src="../../assets/my/箭头.png" />
						</span>
						<img class="li4_img2" src="../../assets/my/树.png" />
					</li>
					<li>
						<span class="li4_span1">红包签到</span>
						<span class="li4_span2">连续7天兑红包
							<img class="li4_img1" src="../../assets/my/箭头.png" />
						</span>
						<img class="li4_img2" src="../../assets/my/红包1.png" />
					</li>
					<li style="margin-left: 30px;">
						<span class="li4_span1">邀请有礼</span>
						<span class="li4_span2">分享得20元优惠
							<img class="li4_img1" src="../../assets/my/箭头.png" />
						</span>
						<img class="li4_img2" src="../../assets/my/领取红包.png" />
					</li>
				</ul>
			</div>
		</div>
		<div id="my_bottom5">
			<span class="bt5_span1">推荐工具</span>
			<div id="my_list5">
				<ul id="list_ul5">
					<router-link to="/recharge" style="color: #000;"><li><a><img src="../../assets/my/充值.png" /><span>充值中心</span></a></li></router-link>
					<router-link to="/grabageSort" style="color: #000;"><li><a><img src="../../assets/my/垃圾.png" /><span>垃圾分类</span></a></li></router-link>
					<router-link to="/taxes" style="color: #000;"><li><a><img src="../../assets/my/税务.png" /><span>新个税计算</span></a></li></router-link>
					<li><a><img src="../../assets/my/天气.png" /><span>墨迹天气</span></a></li>
					<li><a><img src="../../assets/my/发票.png" /><span>发票助手</span></a></li>
					<li><a><img src="../../assets/my/大学.png" /><span>美团大学</span></a></li>
					<router-link to="/cooperation" style="color: #000;"><li><a><img src="../../assets/my/合作.png" /><span>我要合作</span></a></li></router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#my {
		position: absolute;
		width: 100%;
		height: 850px;
		background-color: #f7f7f7;
	}

	#my_top {
		position: absolute;
		width: 100%;
		height: 180px;
		background-color: #FFCC00;
	}

	.image_head {
		position: relative;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		top: 10px;
		left: -35px;
	}

	.head_name {
		position: relative;
		font-size: 20px;
		font-weight: 600;
		top: -25px;
		left: -30px;
	}

	.growthvalue {
		position: relative;
		padding: 5px;
		font-size: 10px;
		background-color: #000000;
		opacity: 0.5;
		border-radius: 5px;
		color: #FFFFFF;
		left: -118px;
	}

	.sett {
		position: relative;
		width: 25px;
		height: 25px;
		top: -20px;
		left: 25px;
	}

	.service {
		position: relative;
		width: 25px;
		height: 25px;
		top: -20px;
		left: 40px;
	}

	#top_my_list1 {
		position: absolute;
		width: 90%;
		height: auto;
		margin-top: 20px;
		margin-left: 5%;
	}

	ul {
		list-style: none;
	}

	#top_list_ul1 li {
		float: left;
		width: 83px;
	}

	#top_list_ul1 {
		margin: 0 auto;
		overflow: hidden;
	}

	#top_list_ul1 a {
		color: black;
	}

	#top_list_ul1 li img {
		display: block;
		margin: 0 auto;
		width: 35px;
		height: 35px;
	}

	#top_list_ul1 li span {
		margin-top: 2px;
		display: block;
		font-size: 12px;
	}

	#my_bottom1 {
		position: relative;
		background-color: #FFFFFF;
		width: 90%;
		height: 50px;
		left: 5%;
		border-radius: 5px;
		top: 155px;
	}

	.bt1_img1 {
		position: absolute;
		width: 20px;
		height: 20px;
		margin-top: 15px;
		margin-left: -150px;
	}

	#my_bottom1 span {
		position: absolute;
		font-size: 13px;
		margin-top: 20.5px;
		margin-left: -120px;

	}

	.bt1_img2 {
		position: absolute;
		width: 20px;
		height: 20px;
		margin-top: 15px;
		margin-left: 130px;
	}

	#my_bottom2 {
		position: relative;
		background-color: #FFFFFF;
		width: 90%;
		height: 120px;
		left: 5%;
		border-radius: 5px;
		top: 165px;
	}

	.bt2_span1 {
		position: relative;
		font-size: 15px;
		font-weight: 600;
		top: 8px;
		left: -75px;
	}

	.bt2_span2 {
		position: relative;
		font-size: 12px;
		color: #bfbfbf;
		top: 6px;
		left: 65px;
	}

	.bt2_img {
		position: relative;
		width: 20px;
		height: 20px;
		top: 10px;
		left: 73px;
	}

	#bottom2_my_list2 {
		position: absolute;
		width: 90%;
		height: 100px;
		margin-left: 4%;
		margin-top: 5px;
	}

	#bottom2_list_ul2 li {
		float: left;
		width: 70px;
		height: 80px;
		margin-left: 5px;
	}

	#bottom2_list_ul2 {
		margin: 0 auto;
		overflow: hidden;
	}

	#bottom2_list_ul2 a {
		color: black;
	}

	#bottom2_list_ul2 li img {
		display: block;
		margin: 0 auto;
		width: 35px;
		height: 35px;
		margin-left: 18px;
	}

	#bottom2_list_ul2 li span {
		margin-top: 38px;
		display: block;
		font-size: 12px;
	}


	#my_bottom3 {
		position: relative;
		background-color: #FFFFFF;
		width: 90%;
		height: 130px;
		left: 5%;
		border-radius: 5px;
		top: 175px;
	}

	.bt3_span1 {
		position: relative;
		font-size: 15px;
		font-weight: 600;
		top: 8px;
		left: -80px;
	}

	.bt3_span2 {
		position: relative;
		font-size: 12px;
		color: #bfbfbf;
		top: 6px;
		left: 65px;
	}

	.bt3_img {
		position: relative;
		width: 20px;
		height: 20px;
		top: 10px;
		left: 73px;
	}

	#my_list3 {
		position: absolute;
		width: 90%;
		height: 100px;
		margin-left: 4%;
		margin-top: 15px;
	}

	#list_ul3 li {
		float: left;
		width: 70px;
		height: 80px;
		margin-left: 5px;
	}

	#list_ul3 {
		margin: 0 auto;
		overflow: hidden;
	}

	#list_ul3 li span {
		display: block;
		text-align: center;
	}

	#my_bottom4 {
		position: relative;
		background-color: #FFFFFF;
		width: 90%;
		height: 140px;
		left: 5%;
		border-radius: 5px;
		top: 185px;
	}

	.bt4_span1 {
		position: relative;
		font-size: 15px;
		font-weight: 600;
		top: 8px;
		left: -120px;
	}

	#my_list4 {
		position: absolute;
		height: auto;
		margin-top: 10px;
	}

	#list_ul4 li {
		float: left;
		width: 140px;
	}

	#list_ul4 {
		margin: 0 auto;
		overflow: hidden;
	}

	.li4_span1 {
		position: absolute;
		font-size: 13px;
		font-weight: 600;
	}

	.li4_span2 {
		font-size: 10px;
		color: #ff0000;
	}

	.li4_img1 {
		width: 12px;
		height: 12px;
	}

	.li4_img2 {
		width: 40px;
		height: 40px;
	}

	#my_bottom5 {
		position: relative;
		background-color: #FFFFFF;
		width: 90%;
		height: 150px;
		left: 5%;
		border-radius: 5px;
		top: 195px;
	}

	.bt5_span1 {
		position: relative;
		font-size: 15px;
		font-weight: 600;
		top: 8px;
		left: -120px;
	}

	#my_list5 {
		position: absolute;
		width: 90%;
		height: 100px;
		margin-left: 4%;
		margin-top: 10px;
	}

	#list_ul5 li {
		float: left;
		width: 70px;
		height: 60px;
		margin-left: 5px;
	}

	#list_ul5 {
		margin: 0 auto;
		overflow: hidden;
	}

	#list_ul5 a {
		color: black;
	}

	#list_ul5 li img {
		display: block;
		margin: 0 auto;
		width: 35px;
		height: 35px;
		margin-left: 18px;
	}

	#list_ul5 li span {
		display: block;
		font-size: 12px;
	}
</style>
