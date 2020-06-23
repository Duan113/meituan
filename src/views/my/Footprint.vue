<template>
	<div id="footprint">
		<div id="footprint_top">
			<img src="../../assets/my/箭头左.png" />
			<span class="footprint_top_span1">我的足迹</span>
			<span class="footprint_top_span2">编辑</span>
		</div>
		<div id="footpring_div1">
			<div id="footpring_div1_left">
				<img src="../../assets/my/footprint/l3.jpg" />
			</div>
			<div id="footpring_div1_middle">
				<span class="footpring_div1_middle_span1">传奇叫花鸡</span>
				<span class="footpring_div1_middle_span3">大成名店 卤味鸭脖</span>
			</div>
			<div id="footpring_div1_right">
				<span>2.4km</span>
			</div>
		</div>
		<van-divider />
		<div id="footpring_div1">
			<div id="footpring_div1_left">
				<img src="../../assets/my/footprint/l1.jpg" />
			</div>
			<div id="footpring_div1_middle">
				<span class="footpring_div1_middle_span1">叫了只鸡(仙林店)</span>
				<img src="../../assets/icon_library/evaluation/星.jpg" />
				<span class="footpring_div1_middle_span3">大成名店 炸鸡炸串</span>
			</div>
			<div id="footpring_div1_right">
				<span>2.4km</span>
			</div>
		</div>
		<van-divider />
		<div id="footpring_div1">
			<div id="footpring_div1_left">
				<img src="../../assets/my/footprint/l2.jpg" />
			</div>
			<div id="footpring_div1_middle">
				<span class="footpring_div1_middle_span1">台资味(南京仙林店)</span>
				<img src="../../assets/icon_library/evaluation/星.jpg" />
				<span class="footpring_div1_middle_span2">人均￥18.0</span>
				<span class="footpring_div1_middle_span3">大成名店 快餐简餐</span>
			</div>
			<div id="footpring_div1_right">
				<span>2.4km</span>
			</div>
		</div>
		<van-divider />
		<div id="footpring_div1">
			<div id="footpring_div1_left">
				<img src="../../assets/my/footprint/l3.jpg" />
			</div>
			<div id="footpring_div1_middle">
				<span class="footpring_div1_middle_span1">南京康美美容医院</span>
				<img src="../../assets/icon_library/evaluation/星.jpg" />
				<span class="footpring_div1_middle_span2">人均￥1511.0</span>
				<span class="footpring_div1_middle_span3">夫子庙/水游城 医学美容</span>
			</div>
			<div id="footpring_div1_right">
				<span>17.1km</span>
			</div>
		</div>
		<van-divider />
		<div id="footpring_div1">
			<div id="footpring_div1_left">
				<img src="../../assets/my/footprint/l3.jpg" />
			</div>
			<div id="footpring_div1_middle">
				<span class="footpring_div1_middle_span1">喜儿炸物(仙林金鹰店)</span>
				<img src="../../assets/icon_library/evaluation/星.jpg" />
				<span class="footpring_div1_middle_span2">人均￥23.0</span>
				<span class="footpring_div1_middle_span3">大成名店 炸鸡炸串</span>
			</div>
			<div id="footpring_div1_right">
				<span>2.5km</span>
			</div>
		</div>
		<van-divider />
	</div>
</template>

<script>
</script>

<style>
	#footprint {
		position: absolute;
		width: 100%;
		height: 110%;
	}

	#footprint_top {
		width: 100%;
		height: 50px;
		text-align: left;
		background-color: #FFCC00;
	}

	#footprint_top img {
		position: relative;
		width: 25px;
		height: 25px;
		top: 12.5px;
		left: 10px;
	}

	.footprint_top_span1 {
		position: relative;
		font-size: 19px;
		font-weight: 600;
		top: 8px;
		left: 130px;
	}

	.footprint_top_span2 {
		position: relative;
		font-size: 15px;
		top: 8px;
		left: 230px;
	}

	#footpring_div1 {
		padding: 4%;
		width: 92%;
		height: 70px;
		text-align: left;
	}

	#footpring_div1_left {
		float: left;
		width: 30%;
	}
	#footpring_div1_left img{
		width: 100%;
		border-radius: 10px;
	}
	
	#footpring_div1_middle{
		float: left;
		width: 40%;
		margin-left: 10px;
	}
	.footpring_div1_middle_span1{
		display: block;
		position: relative;
		font-size: 15px;
		font-weight: 600;
	}
	#footpring_div1_middle img{
		position: relative;
		top: 10px;
		height: 15px;
	}
	.footpring_div1_middle_span2{
		position: relative;
		left: 10px;
		font-size: 12px;
		top: 10px;
		color: #646566;
	}
	.footpring_div1_middle_span3{
		position: relative;
		display: block;
		position: relative;
		font-size: 12px;
		top: 12px;
		color: #646566;
		
	}
	
	#footpring_div1_right{
		width: 10%;
		float: right;
	}
	#footpring_div1_right span{
		font-size: 12px;
		color: #646566;
	}
</style>
