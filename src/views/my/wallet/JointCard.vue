<template>
	<div id="jointCard">
		<div id="jointCard_top">
			<img src="../../../assets/my/箭头左.png" />
			<span>美团联名信用卡</span>
			<img src="../../../assets/my/coopertion/分享.png" style="left: 180px;" />
		</div>
		<div id="jointCard_middle">
			<img src="../../../assets/my/jointcard/卡1.jpg" />
		</div>
		<div id="jointCard_bottom">
			<div id="jointCard_bottom_left">
				<img src="../../../assets/my/jointcard/卡2.jpg" />
			</div>
			<div id="jointCard_bottom_right">
				<span class="jointCard_bottom_right_span1">上海银行联名信用卡</span>
				<span class="jointCard_bottom_right_span2">美食</span>
				<span class="jointCard_bottom_right_span3">随机减</span>
				<div id="jointCard_bottom_right_div1">
					<div>
						<span class="jointCard_bottom_right_div1_span1">吃外卖天天减6元*60天</span>
						<span class="jointCard_bottom_right_div1_span2">绑定微信首刷立减10元</span>
					</div>
					<span class="jointCard_bottom_right_div1_span3">立即申请</span>
				</div>
				<span class="jointCard_bottom_right_span4">刷1000送80，刷3000送300</span>
				<span class="jointCard_bottom_right_span5">周六周日京东满99立减10元</span>
			</div>
		</div>
		<div id="jointCard_bottom">
			<div id="jointCard_bottom_left">
				<img src="../../../assets/my/jointcard/卡3.jpg" />
			</div>
			<div id="jointCard_bottom_right">
				<span class="jointCard_bottom_right_span1">上海银行联名信用卡</span>
				<span class="jointCard_bottom_right_span2">美食</span>
				<span class="jointCard_bottom_right_span3">电影</span>
				<div id="jointCard_bottom_right_div1">
					<div>
						<span class="jointCard_bottom_right_div1_span1">外卖天天减6元*90天</span>
						<span class="jointCard_bottom_right_div1_span2">天天刷笔笔抽红包10元</span>
					</div>
					<span class="jointCard_bottom_right_div1_span3">立即申请</span>
				</div>
				<span class="jointCard_bottom_right_span4">最高10万额度免年费</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#jointCard {
		position: absolute;
		width: 100%;
		height: 150%;
	}
	#jointCard_top {
		width: 100%;
		height: 50px;
		text-align: left;
	}
	#jointCard_top img {
		position: relative;
		width: 25px;
		height: 25px;
		top: 12.5px;
		left: 10px;
	}
	#jointCard_top span {
		position: relative;
		font-size: 19px;
		font-weight: 500;
		top: 8px;
		left: 100px;
	}
	#jointCard_middle{
		width: 100%;
	}
	#jointCard_middle img{
		width: 100%;
	}
	
	#jointCard_bottom{
		padding: 4%;
		width: 92%;
		height: 110px;
	}
	
	#jointCard_bottom_left{
		float: left;
		width: 35%;
	}
	#jointCard_bottom_left img{
		width: 80%;
	}
	
	#jointCard_bottom_right{
		float: right;
		width: 65%;
		text-align: left;
	}
	.jointCard_bottom_right_span1{
		position: relative;
		display: block;
		font-size: 16px;
		font-weight: 600;
	}
	.jointCard_bottom_right_span2{
		position: relative;
		top: 5px;
		font-size: 12px;
		border: #FFCC00 1px solid;
		padding: 3px;
		border-radius: 3px;
	}
	.jointCard_bottom_right_span3{
		position: relative;
		font-size: 12px;
		top: 5px;
		border: #FFCC00 1px solid;
		padding: 3px;
		border-radius: 3px;
		left: 5px;
	}
	#jointCard_bottom_right_div1{
		width: 100%;
		height: 40px;
		position: relative;
	}
	#jointCard_bottom_right_div1 div{
		float: left;
		width: 65%;
	}
	.jointCard_bottom_right_div1_span1{
		position: relative;
		top: 10px;
		display: block;
		font-size: 12px;
		color: #646566;
	}
	.jointCard_bottom_right_div1_span2{
		position: relative;
		top: 10px;
		font-size: 12px;
		color: #646566;
	}
	.jointCard_bottom_right_div1_span3{
		position: relative;
		width: 35%;
		padding: 5px;
		top: 15px;
		border-radius: 8px;
		font-size: 13px;
		font-weight: 600;
		background-color: #FFCC00;
	}
	
	.jointCard_bottom_right_span4{
		position: relative;
		margin-top: 10px;
		display: block;
		font-size: 12px;
		color: #646566;
	}
	.jointCard_bottom_right_span5{
		position: relative;
		top: 5px;
		display: block;
		font-size: 12px;
		color: #646566;
	}
</style>
