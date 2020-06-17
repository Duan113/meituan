<template>
	<div id="checkin">
		<div id="checkin_div1">
			<img class="checkin_div1_img" src="../../assets/my/箭头左.png" />
			<span class="checkin_div1_span1">垃圾分类助手</span>
			<img class="checkin_div1_img2" src="../../assets/icon_library/checkin/分享.png" />
		</div>
		<div id="checkin_div2">
			<img src="../../assets/checkinhead.jpg" />
		</div>
		<div id="checkin_div3">
			<span class="checkin_div3_span1">签到领红包</span>
			<span class="checkin_div3_span2">天天赢奖励金 连签兑红包</span>
		</div>
		<div id="checkin_div4">
			<div id="div4_top">
				<span class="div4_top_span1">奖励金<span style="font-size: 15px;font-weight: 600;color: #FFCC00;">4.19</span>元</span>
				<span class="div4_top_span2">补签卡<span style="font-size: 15px;font-weight: 600;color: #FFCC00;">1</span>张</span>
				<span class="div4_top_span3">签到提醒</span>
				<van-switch v-model="checked" active-color="#ee0a24" inactive-color="#666" size="16px" />
			</div>
			<div id="div4_middle">
				<img src="../../assets/icon_library/checkin/checkinday.jpg" />
			</div>
			<div id="div4_bt">
				<span>明天继续领奖励</span>
			</div>
			<div id="div4_bottom">
				<img src="../../assets/icon_library/checkin/喇叭.png" />&nbsp;
				<span>连续签到7天仅支持兑换【优惠红包】奖励</span>
			</div>
		</div>
		
		<div id="checkin_div5">
			<img src="../../assets/icon_library/checkin/ad1.jpg" />
			<img src="../../assets/icon_library/checkin/ad2.jpg" />
			<img src="../../assets/icon_library/checkin/ad3.jpg" />
		</div>
		
		<div id="checkin_div6">
			<span class="checkin_div6_span1">每日必抢</span>
			<span class="checkin_div6_span2">0点开始,超值神券无门槛领</span>
		</div>
		<div id="checkin_div7">
			<img src="../../assets/icon_library/checkin/券.jpg" />
			<span>展开更多</span>
		</div>
		
		<div id="checkin_div8">
			<span class="checkin_div8_span1">天天特价</span>
			<span class="checkin_div8_span2">懂你每天最想要</span>
		</div>
		
		<div id="checkin_div9">
			<ul>
				<li>
					<img src="../../assets/icon_library/borrmoney/外卖.png" />
					<div id="checkin_div9_middle">
						<span class="div9_span1">安德鲁烘焙坊</span>
						<span class="div9_span2">25减7</span>
						<span class="div9_span3">19人已买</span>
					</div>
					<span class="div9_span4">立即购买</span>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      checked: true,
	    };
	  },
	};
</script>

<style>
	#checkin{
		position: absolute;
		width: 100%;
		height: 880px;
		background-color: #f7f7f7;
	}
	#checkin_div1 {
		width: 100%;
		height: 50px;
		background-color: #fff;
	}
	.checkin_div1_img{
		position: relative;
		width: 20px;
		height: 20px;
		top: 15px;
		left: -100px;
	}
	
	.checkin_div1_span1{
		position: relative;
		font-size: 18px;
		font-weight: 600;
		top: 10px;
	}
	.checkin_div1_img2{
		position: relative;
		width: 22px;
		height: 22px;
		left: 85px;
		top: 12px;
	}
	
	#checkin_div2{
		width: 100%;
	}
	#checkin_div2 img{
		width: 100%;
	}
	
	#checkin_div3{
		margin-top: 15px;
		width: 90%;
		margin-left: 5%;
		text-align: left;
		border-left: #ff6600 3px solid;
		
	}
	.checkin_div3_span1{
		font-size: 16px;
		font-weight: 600;
		margin-left: 15px;
		
	}
	.checkin_div3_span2{
		font-size: 10px;
		color: #777;
		margin-left: 20px;
	}
	
	#checkin_div4{
		width: 90%;
		height: 215px;
		margin-left: 5%;
		margin-top: 15px;
		text-align: left;
		border-radius: 10px;
		background-color: #fff;
	}
	#div4_top{
		background-color: #ff6600;
		height: 50px;
		border-radius: 10px 10px 0 0;
	}
	.div4_top_span1{
		position: relative;
		font-size: 13px;
		font-weight: 600;
		color: #fff;
		margin-left: 15px;
		top: 10px;
	}
	.div4_top_span2{
		position: relative;
		font-size: 13px;
		font-weight: 600;
		color: #fff;
		margin-left: 15px;
		top: 10px;
	}
	.div4_top_span3{
		position: relative;
		font-size: 13px;
		font-weight: 600;
		color: #fff;
		margin-left: 60px;
		top: 10px;
	}
	.van-switch{
		position: relative;
		margin-left: 5px;
		top: 15px;
	}
	#div4_middle{
		width: 100%;
	}
	#div4_middle img{
		width: 100%;
	}
	#div4_bt{
		position: relative;
		top: 5px;
		width: 50%;
		height: 16px;
		padding: 10px;
		border-radius: 20px;
		background-color: #888;
		text-align: center;
		margin-left: 70px;
	}
	#div4_bt span{
		position: relative;
		top: -4px;
		font-size: 16px;
		color: #fff;
		
	}
	#div4_bottom{
		position: relative;
		top: 15px;
		width: 90%;
		margin-left: 5%;
	}
	#div4_bottom img{
		width: 13px;
		height: 13px;
	}
	#div4_bottom span{
		font-size: 13px;
	}
	
	#checkin_div5{
		width: 90%;
		margin-left: 5%;
		margin-top: 15px;
		text-align: left;
		border-radius: 10px;
	}
	#checkin_div5 img{
		width: 47%;
		margin-left: 2%;
		border-radius: 10px;
	}
	
	#checkin_div6{
		margin-top: 15px;
		width: 90%;
		margin-left: 5%;
		text-align: left;
		border-left: #ff6600 3px solid;
	}
	.checkin_div6_span1{
		font-size: 16px;
		font-weight: 600;
		margin-left: 15px;
		
	}
	.checkin_div6_span2{
		font-size: 10px;
		color: #777;
		margin-left: 20px;
	}
	
	#checkin_div7{
		margin-top: 10px;
		width: 90%;
		margin-left: 5%;
		background-color: #fff;
	}
	#checkin_div7 img{
		width: 100%;
		border-radius: 5px;
	}
	#checkin_div7 span{
		font-size: 14px;
		color: #aaa;
	}
	
	#checkin_div8{
		margin-top: 15px;
		width: 90%;
		margin-left: 5%;
		text-align: left;
		border-left: #ff6600 3px solid;
	}
	.checkin_div8_span1{
		font-size: 16px;
		font-weight: 600;
		margin-left: 15px;
		
	}
	.checkin_div8_span2{
		font-size: 10px;
		color: #777;
		margin-left: 20px;
	}
	
	#checkin_div9{
		padding: 4%;
		width: 82%;
		margin-left: 5%;
		background-color: #fff;
	}
	#checkin_div9 ul{
		list-style: none;
		overflow: hidden;
	}
	#checkin_div9 li{
		margin-top: 5px;
		text-align: left;
		width: 100%;
	}
	#checkin_div9 img{
		padding: 5px;
		float: left;
		width: 40px;
		height: 40px;
		background-color: #1989FA;
		border-radius: 5px;
	}
	#checkin_div9_middle{
		float: left;
		margin-left: 10px;
	}
	.div9_span1{
		display: block;
		font-size: 15px;
		font-weight: 600;
	}
	.div9_span2{
		display: block;
		font-size: 10px;
		color: #777;
	}
	.div9_span3{
		font-size: 10px;
		color: #777;
	}
	.div9_span4{
		position: absolute;
		font-size: 13px;
		color: #ff4400;
		padding: 5px;
		border-radius: 10px;
		border: #ff4400 1px solid;
		margin-left: 100px;
		margin-top: 10px;
	}
</style>
