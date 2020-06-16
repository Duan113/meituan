<template>
	<div id="borrmoney">
		<div id="borrmoney_back">
			<img src="../../assets/my/箭头左.png" />
			<span>消息</span>
		</div>
		
		<div id="borrmoney_div1">
			<div id="borrmoney_div1_top">
				<img class="div1_top_img1" src="../../assets/icon_library/borrmoney/美团联名卡.png" />
				<span class="div1_top_span1">美团生活费·借钱</span>
				<img class="div1_top_img2" src="../../assets/my/箭头.png" />
			</div>
			
			<div id="borrmoney_div1_middle">
				<div>
					<span class="div1_middle_span1">大约可借额度</span>
					<span class="div1_middle_span2">￥167,000.00</span>
					<span class="div1_middle_span3"><img src="../../assets/my/红包1.png" />现在借钱，免费用7天，金额无上限</span>
				</div>
				<span class="div1_middle_span4">现在借钱</span>
			</div>
			
			<div id="borrmoney_div1_bottom">
				<span class="div1_bottom_span1"><img src="../../assets/icon_library/borrmoney/对.png" />&nbsp;随借随还</span>
				<span class="div1_bottom_span2"><img src="../../assets/icon_library/borrmoney/时间.png" />&nbsp;两秒放款</span>
				<span class="div1_bottom_span3"><img src="../../assets/icon_library/borrmoney/钱.png" />&nbsp;日利率0.02%起</span>
			</div>
		</div>
		<div id="advertising">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item><img src="../../assets/advertising1.jpg" /></van-swipe-item>
				<van-swipe-item><img src="../../assets/advertising2.jpg" /></van-swipe-item>
				<van-swipe-item><img src="../../assets/advertising3.jpeg" /></van-swipe-item>
			</van-swipe>
		</div>
		
		<div id="borrmoney_div2">
			<div id="borrmoney_div1_top">
				<img class="div1_top_img1" src="../../assets/icon_library/borrmoney/美团联名卡.png" />
				<span class="div1_top_span1">美团联名卡</span>
				<img class="div1_top_img2" src="../../assets/my/箭头.png" />
			</div>
			
			<div id="borrmoney_div1_middle">
				<div>
					<span class="div1_middle_span1">最高额度</span>
					<span class="div1_middle_span2">￥50,000</span>
				</div>
				<span class="div1_middle_span4">免费领取</span>
			</div>
			
			<div id="borrmoney_div1_bottom">
				<span class="div1_bottom_span1"><img src="../../assets/icon_library/borrmoney/外卖.png" />&nbsp;外面天天减6元</span>
				<span class="div1_bottom_span2"><img src="../../assets/icon_library/borrmoney/免年费.png" />&nbsp;免年费</span>
				<span class="div1_bottom_span3"><img src="../../assets/icon_library/borrmoney/时间.png" />&nbsp;急速秒批</span>
			</div>
			
			<div id="borrmoney_div1_bottom2">
				<span class="div1_bottom2_span1">省钱专区</span>
				<span class="div1_bottom2_span2">每天领无门槛红包</span>
				<img src="../../assets/icon_library/borrmoney/右箭头金.png" />
			</div>
		</div>
		
		<div id="borrmoney_div3">
			<div id="borrmoney_div1_top">
				<img class="div1_top_img1" src="../../assets/icon_library/borrmoney/美团联名卡.png" />
				<span class="div1_top_span1">美团生活费·借钱</span>
				<img class="div1_top_img2" src="../../assets/my/箭头.png" />
			</div>
			
			<div id="borrmoney_div1_middle">
				<div>
					<span class="div1_middle_span1">大约可借额度</span>
					<span class="div1_middle_span2" style="font-size: 18px;font-weight: 600;top: 20px;">这月买,下月付,笔笔立减</span>
				</div>
				<span class="div1_middle_span4">领取权益</span>
			</div>
			
			<div id="borrmoney_div1_bottom">
				<span class="div1_bottom_span1"><img src="../../assets/icon_library/borrmoney/对.png" />&nbsp;高额度，最长38天免息</span>
				<span class="div1_bottom_span2"><img src="../../assets/icon_library/borrmoney/时间.png" />&nbsp;笔笔减，最高88元</span>
			</div>
		</div>
		<div id="borrmoney_div4">
			<span>- 美团金融服务 -</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#borrmoney {
		position: absolute;
		width: 100%;
		height: 940px;
		background-color: #f7f7f7;
	}

	#borrmoney_back {
		background-color: #FFCC00;
		height: 260px;
		position: relative;
	}

	#borrmoney_back:after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		box-shadow: 0 -50px 60px 0 #ffffff inset;
	}
	#borrmoney_back img{
		position: relative;
		width: 24px;
		height: 24px;
		margin-left: -300px;
		top: 9px;
	}
	#borrmoney_back span{
		position: relative;
		font-size: 19px;
		left: 140px;
		top: 6px;
	}

	#borrmoney_div1 {
		position: absolute;
		width: 82%;
		padding: 4%;
		margin-left: 5%;
		text-align: left;
		background-color: #fff;
		border-radius: 10px;
		margin-top: -180px;
	}
	#borrmoney_div1_top{
		height: 30px;
	}
	.div1_top_img1{
		top:5px;
		position: relative;
		width: 20px;
		height: 20px;
	}
	.div1_top_span1{
		top:3px;
		left: 5px;
		position: relative;
	}
	.div1_top_img2{
		position: relative;
		width: 20px;
		height: 20px;
		top:5px;
		left: 150px;
	}
	
	#borrmoney_div1_middle{
		top: 10px;
		border-bottom: #C4C4C4 1px solid;
	}
	#borrmoney_div1_middle div{
		position: relative;
		width: 200px;
		height: 90px;
	}
	.div1_middle_span1{
		position: relative;
		display: block;
		top: 10px;
		color: #646566;
		font-size: 14px;
	}
	.div1_middle_span2{
		position: relative;
		display: block;
		top: 10px;
		font-size: 30px;
		font-size: 600;
	}
	.div1_middle_span3{
		font-size: 10px;
		top: 10px;
		position: relative;
		color: #FFCC00;
	}
	.div1_middle_span3 img{
		top: 2px;
		position: relative;
		width: 20px;
		height: 15px;
	}
	.div1_middle_span4{
		position: relative;
		padding: 10px;
		border-radius: 20px;
		font-size: 14px;
		background-color: #FFCC00;
		top: -55px;
		left: 230px;
	}
	
	#borrmoney_div1_bottom{
		margin-top: 10px;
	}
	.div1_bottom_span1{
		position: relative;
		color: #646566;
		font-size: 14px;
	}
	.div1_bottom_span1 img{
		position: relative;
		top: 4px;
		width: 20px;
		height: 20px;
	}
	.div1_bottom_span2{
		position: relative;
		color: #646566;
		font-size: 14px;
		left: 20px;
	}
	.div1_bottom_span2 img{
		position: relative;
		top: 4px;
		width: 20px;
		height: 18px;
	}
	.div1_bottom_span3{
		position: relative;
		color: #646566;
		font-size: 14px;
		left: 35px;
	}
	.div1_bottom_span3 img{
		position: relative;
		top: 4px;
		width: 20px;
		height: 20px;
	}
	
	#advertising {
		position: absolute;
		width: 90%;
		margin-left: 5%;
		margin-top: 40px;
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
	#borrmoney_div2 {
		position: absolute;
		width: 82%;
		padding: 4%;
		margin-left: 5%;
		text-align: left;
		background-color: #fff;
		border-radius: 10px;
		margin-top: 160px;
	}
	#borrmoney_div1_bottom2{
		margin-top: 10px;
		padding: 5px;
		background-color: #F5F5DC;
		border-radius: 5px;
	}
	.div1_bottom2_span1{
		position: relative;
		left: 5px;
		width: 20px;
		height: 20px;
		color: #FFAA00;
		font-size: 13px;
	}
	.div1_bottom2_span2{
		position: relative;
		font-size: 13px;
		left: 15px;
	}
	#borrmoney_div1_bottom2 img{
		position: relative;
		top: 4px;
		width: 20px;
		height: 20px;
		left: 120px;
	}
	
	#borrmoney_div3 {
		position: absolute;
		width: 82%;
		padding: 4%;
		margin-left: 5%;
		text-align: left;
		background-color: #fff;
		border-radius: 10px;
		margin-top: 430px;
	}
	
	#borrmoney_div4 {
		position: absolute;
		width: 90%;
		margin-left: 5%;
		border-radius: 10px;
		margin-top: 640px;
	}
	#borrmoney_div4 span{
		font-size: 14px;
		color: #aaa;
	}
</style>

